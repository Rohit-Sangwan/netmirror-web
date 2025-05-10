import React from 'react';
import { RippleEffect } from './RippleEffect';

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  className = '',
}) => {
  return (
    <RippleEffect
      className={`fixed bottom-20 right-4 w-14 h-14 rounded-full bg-primary text-on-primary shadow-lg active:scale-95 transition-transform ${className}`}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center">
        {icon}
      </div>
    </RippleEffect>
  );
}; 