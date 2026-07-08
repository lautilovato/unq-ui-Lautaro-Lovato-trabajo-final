import GameErrorMessage from '../Components/GameErrorMessage';
import GameHeader from '../Components/GameHeader';
import GameOverScreen from '../Components/GameOverScreen';
import WordChain from '../Components/WordChain';
import WordInputForm from '../Components/WordInputForm';
import { useWordChainGame } from '../hooks/useWordChainGame';

function Game() {
  const {
    words,
    currentWord,
    score,
    timeLeft,
    error,
    gameStatus,
    isLoading,
    inputRef,
    placeholder,
    handleInputChange,
    handleSubmit,
    restartGame,
  } = useWordChainGame();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-primary/65"></div>

      <div className="relative z-10 w-full max-w-2xl bg-primary border-2 border-white p-6 sm:p-10 flex flex-col items-center shadow-2xl">
        {gameStatus !== 'finished' ? (
          <>
            <GameHeader score={score} timeLeft={timeLeft} />

            <div className="w-full flex flex-col gap-6">
              <WordChain words={words} />
              <WordInputForm
                currentWord={currentWord}
                placeholder={placeholder}
                isLoading={isLoading || gameStatus !== 'playing'}
                inputRef={inputRef as React.RefObject<HTMLInputElement>}
                onSubmit={handleSubmit}
                onChange={handleInputChange}
              />
              <GameErrorMessage error={error} />
            </div>
          </>
        ) : (
          <GameOverScreen score={score} wordsCount={words.length} onRestart={restartGame} />
        )}
      </div>
    </div>
  );
}

export default Game;