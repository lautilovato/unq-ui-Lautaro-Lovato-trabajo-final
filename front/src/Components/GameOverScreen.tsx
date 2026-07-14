import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveScore } from '../services/leaderboardService';

interface GameOverScreenProps {
  score: number;
  wordsCount: number;
  onRestart: () => void;
}

function GameOverScreen({ score, wordsCount, onRestart }: GameOverScreenProps) {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    
    saveScore(playerName, score, wordsCount);
    setSaved(true);
  };

  return (
    <div className="w-full flex flex-col items-center py-8 gap-6 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase">¡Tiempo agotado!</h2>

      <div className="flex flex-col items-center gap-2 bg-white/5 w-full p-6 border border-white/20">
        <span className="text-white/80 uppercase tracking-widest text-sm">Puntaje Final</span>
        <span className="text-5xl font-black text-accent">{score}</span>
        <span className="text-white/60 text-sm mt-2">Palabras encadenadas: {wordsCount}</span>
      </div>

      {/* Form section */}
      {!saved ? (
        <form onSubmit={handleSave} className="w-full flex flex-col gap-4 mt-2">
          <input
            type="text"
            placeholder="TU NOMBRE"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            maxLength={15}
            required
            autoFocus
            className="w-full bg-black/20 text-white font-bold py-3 px-6 border-2 border-white/30 focus:border-accent outline-none text-center tracking-widest uppercase transition-all"
          />
          <button
            type="submit"
            className="w-full bg-transparent text-white font-bold py-3 px-6 border-2 border-white hover:bg-white hover:text-primary transition-all tracking-widest uppercase shadow-lg"
          >
            Guardar Puntaje
          </button>
        </form>
      ) : (
        <div className="w-full flex flex-col items-center justify-center p-4 border-2 border-accent bg-accent/10 mt-2">
          <span className="text-accent font-bold tracking-widest uppercase">¡Récord guardado!</span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="w-full flex flex-col gap-4 mt-4">
        <button
          onClick={onRestart}
          className= "w-full bg-transparent text-accent font-bold py-3 px-6 border-2 border-accent hover:bg-accent hover:text-primary transition-all tracking-widest uppercase shadow-lg"
        >
          Jugar de nuevo
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="w-full bg-transparent text-white font-bold py-3 px-6 border-2 border-white hover:bg-white hover:text-primary transition-all tracking-widest uppercase"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default GameOverScreen;