<?php
// PHP 8.4 compatible contact form handler
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Configuration
$to_email = 'contacto@softdevnexus.com';
$from_email = 'noreply@softdevnexus.com';
$subject_prefix = '[SoftDev Nexus] Nuevo mensaje de contacto';

// Validate and sanitize input
function sanitize_input($data): string {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

function validate_email($email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

try {
    // Get JSON input
    $json_input = file_get_contents('php://input');
    $data = json_decode($json_input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $required_fields = ['name', 'email', 'message'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("El campo {$field} es requerido");
        }
    }
    
    // Sanitize data
    $name = sanitize_input($data['name']);
    $email = sanitize_input($data['email']);
    $message = sanitize_input($data['message']);
    
    // Validate email
    if (!validate_email($email)) {
        throw new Exception('Email inválido');
    }
    
    // Validate name length
    if (strlen($name) < 2 || strlen($name) > 100) {
        throw new Exception('El nombre debe tener entre 2 y 100 caracteres');
    }
    
    // Validate message length
    if (strlen($message) < 10 || strlen($message) > 2000) {
        throw new Exception('El mensaje debe tener entre 10 y 2000 caracteres');
    }
    
    // Basic spam protection
    $spam_keywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations'];
    $message_lower = strtolower($message);
    foreach ($spam_keywords as $keyword) {
        if (strpos($message_lower, $keyword) !== false) {
            throw new Exception('Mensaje detectado como spam');
        }
    }
    
    // Rate limiting (simple file-based)
    $rate_limit_file = sys_get_temp_dir() . '/contact_rate_limit.json';
    $client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $current_time = time();
    
    if (file_exists($rate_limit_file)) {
        $rate_data = json_decode(file_get_contents($rate_limit_file), true) ?: [];
        
        // Clean old entries (older than 1 hour)
        $rate_data = array_filter($rate_data, function($timestamp) use ($current_time) {
            return ($current_time - $timestamp) < 3600;
        });
        
        // Check if IP has sent more than 5 messages in the last hour
        $ip_count = count(array_filter($rate_data, function($timestamp, $ip) use ($client_ip) {
            return $ip === $client_ip;
        }, ARRAY_FILTER_USE_BOTH));
        
        if ($ip_count >= 5) {
            throw new Exception('Demasiados mensajes enviados. Intenta más tarde.');
        }
    } else {
        $rate_data = [];
    }
    
    // Add current request to rate limit
    $rate_data[$client_ip . '_' . $current_time] = $current_time;
    file_put_contents($rate_limit_file, json_encode($rate_data));
    
    // Prepare email
    $subject = $subject_prefix . ' - ' . $name;
    
    // HTML email template
    $html_message = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e, #06b6d4); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #22c55e; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Nuevo mensaje de contacto - SoftDev Nexus</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Nombre:</div>
                    <div class='value'>{$name}</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>{$email}</div>
                </div>
                <div class='field'>
                    <div class='label'>Mensaje:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Fecha:</div>
                    <div class='value'>" . date('Y-m-d H:i:s') . "</div>
                </div>
                <div class='field'>
                    <div class='label'>IP:</div>
                    <div class='value'>{$client_ip}</div>
                </div>
            </div>
            <div class='footer'>
                <p>Este mensaje fue enviado desde el formulario de contacto de SoftDev Nexus</p>
            </div>
        </div>
    </body>
    </html>";
    
    // Plain text version
    $text_message = "
Nuevo mensaje de contacto - SoftDev Nexus

Nombre: {$name}
Email: {$email}
Mensaje: {$message}
Fecha: " . date('Y-m-d H:i:s') . "
IP: {$client_ip}

---
Este mensaje fue enviado desde el formulario de contacto de SoftDev Nexus
    ";
    
    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: ' . $from_email,
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: 3',
        'Return-Path: ' . $from_email
    ];
    
    // Send email
    $mail_sent = mail($to_email, $subject, $html_message, implode("\r\n", $headers));
    
    if (!$mail_sent) {
        throw new Exception('Error al enviar el email');
    }
    
    // Log successful submission
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from {$name} ({$email}) - IP: {$client_ip}\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado exitosamente. Te contactaremos pronto.'
    ]);
    
} catch (Exception $e) {
    // Error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
    
    // Log error
    $error_log = date('Y-m-d H:i:s') . " - Contact form error: " . $e->getMessage() . " - IP: " . ($client_ip ?? 'unknown') . "\n";
    file_put_contents('contact_errors.txt', $error_log, FILE_APPEND | LOCK_EX);
}
?>