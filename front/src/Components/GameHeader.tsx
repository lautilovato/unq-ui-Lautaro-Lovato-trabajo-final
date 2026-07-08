interface GameHeaderProps {
  score: number;
  timeLeft: number;
}

function GameHeader({ score, timeLeft }: GameHeaderProps) {
  return (
    <div className="w-full flex justify-between items-center mb-6 border-b border-white/20 pb-4">
      <div className="text-white">
        <span className="block text-xs uppercase tracking-widest text-white/70">Puntaje</span>
        <span className="text-2xl font-bold text-accent">{score}</span>
      </div>
      <div className="text-right">
        <span className="block text-xs uppercase tracking-widest text-white/70">Tiempo</span>
        <span className={`text-3xl font-extrabold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
          00:{timeLeft.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default GameHeader;