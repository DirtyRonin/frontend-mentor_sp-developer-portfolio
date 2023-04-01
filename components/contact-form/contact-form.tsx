'use client';

import React from 'react';
import ButtonUnderline from '../button-underline/button-underline';
import { InputForm } from './input-form';
import { TextAreaForm } from './text-area';

export function ContactForm() {
  const [state, dispatch] = React.useState({
    email: { isValid: false, error: '', value: '' },
    name: { isValid: false, error: '', value: '' },
    message: { isValid: false, error: '', value: '' },
    isValidInput: false,
  });

  const validateText = (name: string) => {
    if (name.trim().length <= 0) return 'This field is required';

    return undefined;
  };

  const validateEmail = (email: string) => {
    if (email.trim().length <= 0) return 'this field is required';

    const regex = new RegExp(
      `([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+`
    );

    if (!regex.test(email)) return 'this email is invalid';

    return undefined;
  };

  React.useEffect(() => {
    dispatch((prev) => ({ ...prev, isValidInput: state.email.isValid && state.name.isValid && state.message.isValid }));
  }, [state.email.isValid, state.name.isValid, state.message.isValid]);

  return (
    <div className="w-full">
      <form>
        <div className="grid bg-transparent gap-8">
          <InputForm
            name="name"
            placeholder="name"
            validationField={state.name}
            setValue={(name) => {
              dispatch((prev) => ({ ...prev, name }));
            }}
            validate={validateText}
          />
          <InputForm
            name="email"
            placeholder="email"
            validationField={state.email}
            setValue={(email) => {
              dispatch((prev) => ({ ...prev, email }));
            }}
            validate={validateEmail}
          />
          <TextAreaForm
            name="message"
            placeholder="message"
            validationField={state.message}
            setValue={(message) => {
              dispatch((prev) => ({ ...prev, message }));
            }}
            validate={validateText}
          />
          <div className="flex flex-row-reverse">
            <ButtonUnderline title="send message" active={state.isValidInput} />
          </div>
        </div>
      </form>
    </div>
  );
}
