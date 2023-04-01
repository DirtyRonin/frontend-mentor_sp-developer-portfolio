import ButtonUnderline from '../button-underline/button-underline';
import { InputForm } from './input-form';
import { TextAreaForm } from './text-area';

export function ContactForm() {
  return (
    <div className="w-full">
      <form>
        <div className="grid bg-black gap-8">
          <InputForm name="name" placeholder="name" />
          <InputForm name="email" placeholder="email" />
          <TextAreaForm name="message" placeholder="message" />
          <div className="flex flex-row-reverse">
            <ButtonUnderline title="send message" />
          </div>
        </div>
      </form>
    </div>
  );
}
