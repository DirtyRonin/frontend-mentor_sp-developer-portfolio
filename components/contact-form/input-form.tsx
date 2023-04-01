'use client';

import React from 'react';

interface InputFormProps {
  name: string;
  placeholder: string;
  validate?: (value: string) => string | undefined;
  setValue?: ({ value, isValid }: { value: string; isValid: boolean }) => void;
}

export function InputForm({ name, placeholder }: InputFormProps) {
  const [state, dispatch] = React.useState<{
    name: string;
    placeholder: string;
    isValid: boolean;
    error: string;
  }>({
    name,
    placeholder,
    isValid: true,
    error: '',
  });

  return (
    <div className="bg-black">
      <input
        className={`w-full h-10 uppercase border-b border-white bg-black px-6 text-font-mobile-input placeholder:text-white/50`}
        type="text"
        placeholder={placeholder}
        name={name}
      ></input>
    </div>
  );
}