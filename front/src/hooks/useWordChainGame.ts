import { useEffect, useRef, useState } from 'react';
import { validateWord } from '../services/wordService';

export function useWordChainGame() {
  const [words, setWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [error, setError] = useState<string>('');
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timeLeft <= 0 && !isGameOver) {
      setIsGameOver(true);
      return;
    }

    if (!isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft((previousTime) => previousTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, isGameOver]);

  useEffect(() => {
    if (!isGameOver && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isGameOver, isLoading, words]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentWord(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const wordToPlay = currentWord.trim().toLowerCase();

    if (!wordToPlay || isLoading || isGameOver) return;

    if (words.includes(wordToPlay)) {
      setError('La palabra ya fue utilizada.');
      return;
    }

    if (words.length > 0) {
      const lastWord = words[words.length - 1];
      const lastLetter = lastWord[lastWord.length - 1];

      if (wordToPlay[0] !== lastLetter) {
        setError(`Debe comenzar con la letra '${lastLetter.toUpperCase()}'.`);
        return;
      }
    }

    setIsLoading(true);
    setError('');

    try {
      const data = await validateWord(wordToPlay);

      if (data.exists) {
        setWords((previousWords) => [...previousWords, wordToPlay]);
        setScore((previousScore) => previousScore + wordToPlay.length);
        setTimeLeft(15);
        setCurrentWord('');
      } else {
        setError('La palabra no existe en el diccionario.');
      }
    } catch {
      setError('Error al conectar con el servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  const restartGame = () => {
    setWords([]);
    setScore(0);
    setTimeLeft(15);
    setCurrentWord('');
    setError('');
    setIsGameOver(false);
  };

  const nextLetter = words.length > 0 ? words[words.length - 1].slice(-1).toUpperCase() : '';
  const placeholder = words.length === 0 ? 'Escribe la primera palabra...' : `Debe empezar con '${nextLetter}'`;

  return {
    words,
    currentWord,
    score,
    timeLeft,
    error,
    isGameOver,
    isLoading,
    inputRef,
    placeholder,
    handleInputChange,
    handleSubmit,
    restartGame,
  };
}