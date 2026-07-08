interface GameOverScreenProps {
  score: number;
  wordsCount: number;
  onRestart: () => void;
}

function GameOverScreen({ score, wordsCount, onRestart }: GameOverScreenProps) {
  return (
    <div className="w-full flex flex-col items-center py-8 gap-6 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase">¡Tiempo agotado!</h2>

      <div className="flex flex-col items-center gap-2 bg-white/5 w-full p-6 border border-white/20">
        <span className="text-white/80 uppercase tracking-widest text-sm">Puntaje Final</span>
        <span className="text-5xl font-black text-accent">{score}</span>
        <span className="text-white/60 text-sm mt-2">Palabras encadenadas: {wordsCount}</span>
      </div>

      <button
        onClick={onRestart}
        className="w-full mt-4 bg-accent text-primary font-bold py-3 px-6 border-2 border-accent hover:bg-transparent hover:text-accent transition-all tracking-widest uppercase shadow-lg"
      >
        Jugar de nuevo
      </button>
    </div>
  );
}

export default GameOverScreen;