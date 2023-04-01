'use client';

import React from 'react';

interface TextAreaFormProps {
  name: string;
  placeholder: string;
  validate?: (value: string) => string | undefined;
  setValue?: ({ value, isValid }: { value: string; isValid: boolean }) => void;
}

export function TextAreaForm({ name, placeholder }: TextAreaFormProps) {
  const [state, dispatch] = React.useState<{
    name: string;
    placeholder: string;
    type: 'text' | 'area';
    isValid: boolean;
    error: string;
  }>({
    name,
    placeholder,
    type: 'text',
    isValid: true,
    error: '',
  });

  return (
    <div className="">
      <textarea
        className={`w-full h-24 uppercase border-b-2 border-white/50 bg-transparent px-6 text-font-mobile-input placeholder:text-white/50`}
        placeholder={placeholder}
        name={name}
      ></textarea>
    </div>
  );
}
