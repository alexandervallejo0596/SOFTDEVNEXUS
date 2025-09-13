import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark-gradient flex flex-col items-center justify-center text-white z-50">
      <div className="w-24 h-24 border-4 border-brand-teal-accent border-t-transparent rounded-full animate-spin mb-6"></div>
      <h2 className="text-3xl font-bold text-white mb-2 animate-pulse">Cargando...</h2>
      <p className="text-lg text-gray-300">Estamos preparando el contenido para ti.</p>
    </div>
  );
};

export default Loading;
