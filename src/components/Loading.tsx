import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-brand-white flex flex-col items-center justify-center text-brand-dark-navy z-50">
      <div className="w-24 h-24 border-4 border-brand-teal-accent border-t-transparent rounded-full animate-spin mb-6"></div>
      <h2 className="text-3xl font-bold text-brand-dark-navy mb-2 animate-pulse">Cargando...</h2>
      <p className="text-lg text-gray-500">Estamos preparando el contenido para ti.</p>
    </div>
  );
};

export default Loading;
