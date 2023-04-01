import React from 'react';

interface TextAreaFormProps {
  name: string;
  placeholder: string;
  validationField: { isValid: boolean; error: string; value: string };
  validate: (value: string) => string | undefined;
  setValue: ({ value, isValid, error }: { isValid: boolean; error: string; value: string }) => void;
}

export function TextAreaForm({ name, placeholder, setValue, validate, validationField: { isValid, error, value } }: TextAreaFormProps) {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
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
      <textarea
        className={`w-full h-24 uppercase border-b-2 border-white/50 bg-transparent px-6 text-font-mobile-input placeholder:text-white/50`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      ></textarea>
      {!isValid ? <p>{error}</p> : null}
    </div>
  );
}
