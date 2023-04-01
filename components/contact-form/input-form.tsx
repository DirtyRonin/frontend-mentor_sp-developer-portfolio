import React from 'react';

interface InputFormProps {
  name: string;
  placeholder: string;
  validationField: { isValid: boolean; error: string; value: string };
  validate: (value: string) => string | undefined;
  setValue: ({ value, isValid, error }: { isValid: boolean; error: string; value: string }) => void;
}

export function InputForm({ name, placeholder, setValue, validate, validationField: { isValid, error, value } }: InputFormProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const validationResult = validate(event.target.value);

    setValue({
      value: event.target.value,
      error: validationResult || '',
      isValid: validationResult === undefined,
    });
  };

  return (
    <div className="z-50">
      <input
        className={`w-full h-10 uppercase border-b-2 border-white/50 bg-transparent px-6 text-font-mobile-input placeholder:text-white/50`}
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      ></input>
      {!isValid ? <p>{error}</p> : null}
    </div>
  );
}
