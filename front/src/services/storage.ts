import type { LeaderboardEntry } from './leaderboardService';

const LEADERBOARD_KEY = 'word_chain_leaderboard';

const Storage = {
  getLeaderboard: (): LeaderboardEntry[] => {
    const scores = localStorage.getItem(LEADERBOARD_KEY);
    return scores ? JSON.parse(scores) : [];
  },

  setLeaderboard: (scores: LeaderboardEntry[]): void => {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(scores));
  },

  clearLeaderboard: (): void => {
    localStorage.removeItem(LEADERBOARD_KEY);
  }
};

export default Storage;