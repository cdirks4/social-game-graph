export interface GameData {
  game_id: string;
  num_agents: number;
  convergence_threshold: number;
  options: string[];
  rounds_played: number;
  start_time_utc: string;
  end_time_utc: string;
  final_convergence: {
    converged: boolean;
    winning_item: string;
    percentage: number;
  };
  agents: Agent[];
  rounds: Round[];
  statistics: {
    total_rewards_distributed: number;
    average_reward_per_agent: number;
    most_popular_item_per_round: {
      [key: string]: string;
    };
    rounds_until_convergence: number;
  };
}

interface Agent {
  agent_id: string;
  strategy: string;
  initial_currency: number;
  final_currency: number;
  history: AgentHistory[];
}

interface AgentHistory {
  round: number;
  partner_id: string;
  initial_guess: string;
  final_guess: string;
  reward: number;
}

interface Round {
  round_number: number;
  pairs: Pair[];
}

interface Pair {
  agent_1_id: string;
  agent_2_id: string;
  initial_guesses: {
    [key: string]: string;
  };
  final_guesses: {
    [key: string]: string;
  };
  rewards: {
    [key: string]: number;
  };
}
