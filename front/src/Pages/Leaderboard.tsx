import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLeaderboard, type LeaderboardEntry } from '../services/leaderboardService';

function Leaderboard() {
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setScores(getLeaderboard());
  }, []);

  const sortedScores = scores.sort((a, b) => b.score - a.score).slice(0, 10);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-primary/65"></div>

      <div className="relative z-10 w-full max-w-3xl bg-primary border-2 border-white p-6 sm:p-10 flex flex-col items-center shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-accent tracking-widest uppercase mb-8 text-center">
          🏆 Leaderboard 🏆
        </h2>

        {sortedScores.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-white border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-3 text-sm font-semibold tracking-wider text-left">Puesto</th>
                  <th className="p-3 text-sm font-semibold tracking-wider text-left">Jugador</th>
                  <th className="p-3 text-sm font-semibold tracking-wider text-left">Puntaje</th>
                  <th className="p-3 text-sm font-semibold tracking-wider text-left">Palabras</th>
                </tr>
              </thead>
              <tbody>
                {sortedScores.map((entry, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-none hover:bg-white/5 transition-colors">
                    <td className="p-3 text-lg font-bold">{index + 1}</td>
                    <td className="p-3">{entry.playerName}</td>
                    <td className="p-3 font-bold text-accent">{entry.score} pts</td>
                    <td className="p-3">{entry.wordCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white/70 italic my-8">Todavía no hay puntajes registrados. ¡Sé el primero en jugar!</p>
        )}

        <Link to="/" className="mt-8 w-full max-w-xs bg-transparent text-white font-bold py-3 px-6 border-2 border-white hover:bg-white hover:text-primary transition-all tracking-widest uppercase text-center">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}

export default Leaderboard;