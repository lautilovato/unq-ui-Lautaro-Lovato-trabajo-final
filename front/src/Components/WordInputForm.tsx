import { type ChangeEvent, type FormEventHandler, type RefObject } from 'react';

interface WordInputFormProps {
  currentWord: string;
  placeholder: string;
  isLoading: boolean;
  inputRef: RefObject<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function WordInputForm({
  currentWord,
  placeholder,
  isLoading,
  inputRef,
  onSubmit,
  onChange,
}: WordInputFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
      <input
        ref={inputRef}
        type="text"
        value={currentWord}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isLoading}
        className="w-full bg-white/10 text-white border-2 border-white/30 focus:border-accent outline-none p-3 text-center text-lg uppercase tracking-widest transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-transparent hover:bg-accent text-accent hover:text-primary font-bold py-3 px-6 border-2 border-accent transition-all tracking-widest uppercase shadow-lg disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-accent"
      >
        {isLoading ? 'Validando...' : 'Enviar Palabra'}
      </button>
    </form>
  );
}

export default WordInputForm;