import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg-dark flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-md mx-auto">
        <AlertTriangle className="w-24 h-24 text-brand-secondary mx-auto animate-bounce" />
        <h1 className="text-6xl font-bold text-white mt-8">404</h1>
        <h2 className="text-3xl font-semibold text-brand-text-light mt-4">Página no encontrada</h2>
        <p className="text-lg text-brand-text-muted mt-4">
          Lo sentimos, pero la página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-12">
          <Link
            to="/"
            className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all duration-300 transform hover:scale-105 btn-glow"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};
