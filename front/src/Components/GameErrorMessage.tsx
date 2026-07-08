interface GameErrorMessageProps {
  error: string;
}

function GameErrorMessage({ error }: GameErrorMessageProps) {
  return (
    <div className="h-6 w-full text-center">
      {error && <span className="text-red-400 text-sm font-bold tracking-wide">{error}</span>}
    </div>
  );
}

export default GameErrorMessage;