import Storage from './storage';

export interface LeaderboardEntry {
  playerName: string;
  score: number;
  wordCount: number;
}

export const getLeaderboard = (): LeaderboardEntry[] => {
  return Storage.getLeaderboard();
};

export const saveScore = (playerName: string, score: number, wordCount: number): LeaderboardEntry[] => {
  const currentLeaderboard = Storage.getLeaderboard();
  
  const newEntry: LeaderboardEntry = {
    playerName: playerName.trim() || 'Anónimo',
    score,
    wordCount
  };

  currentLeaderboard.push(newEntry);
  
  const top10 = currentLeaderboard
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  Storage.setLeaderboard(top10);

  return top10;
};