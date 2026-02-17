import React from 'react';

/**
 * Botón reutilizable con Tailwind CSS
 * @param {string} variant - 'primary' | 'secondary' | 'danger'
 * @param {React.ReactNode} children - Contenido del botón
 * @param className
 * @param {object} props - Resto de props (onClick, type, etc.)
 */
const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";
  
  const variants = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500",
    danger: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
  };

  const buttonClass = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
