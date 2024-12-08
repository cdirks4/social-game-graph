import { GamesData } from "./types";

export const gamesData: GamesData = {
  games: [
    {
      game_id: "game_001",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 10,
      start_time_utc: "2024-12-08T12:00:00Z",
      end_time_utc: "2024-12-08T12:30:00Z",
      final_convergence: {
        converged: true,
        winning_item: "apple",
        percentage: 85,
      },
      agents: [
        {
          agent_id: "Agent_1",
          strategy: "Opportunist",
          initial_currency: 1,
          final_currency: 1.2,
          history: [
            {
              round: 1,
              partner_id: "Agent_2",
              initial_guess: "apple",
              final_guess: "apple",
              reward: 0.5,
            },
            {
              round: 2,
              partner_id: "Agent_3",
              initial_guess: "banana",
              final_guess: "banana",
              reward: 0.2,
            },
          ],
        },
        {
          agent_id: "Agent_2",
          strategy: "Conservative",
          initial_currency: 1,
          final_currency: 0.9,
          history: [
            {
              round: 1,
              partner_id: "Agent_1",
              initial_guess: "banana",
              final_guess: "apple",
              reward: 0.5,
            },
            {
              round: 2,
              partner_id: "Agent_4",
              initial_guess: "apple",
              final_guess: "apple",
              reward: 0.4,
            },
          ],
        },
      ],
      rounds: [
        {
          round_number: 1,
          pairs: [
            {
              agent_1_id: "Agent_1",
              agent_2_id: "Agent_2",
              initial_guesses: {
                Agent_1: "apple",
                Agent_2: "banana",
              },
              final_guesses: {
                Agent_1: "apple",
                Agent_2: "apple",
              },
              rewards: {
                Agent_1: 0.5,
                Agent_2: 0.5,
              },
            },
            {
              agent_1_id: "Agent_3",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_3: "banana",
                Agent_4: "banana",
              },
              final_guesses: {
                Agent_3: "banana",
                Agent_4: "banana",
              },
              rewards: {
                Agent_3: 0.4,
                Agent_4: 0.4,
              },
            },
          ],
        },
        {
          round_number: 2,
          pairs: [
            {
              agent_1_id: "Agent_1",
              agent_2_id: "Agent_3",
              initial_guesses: {
                Agent_1: "apple",
                Agent_3: "banana",
              },
              final_guesses: {
                Agent_1: "banana",
                Agent_3: "banana",
              },
              rewards: {
                Agent_1: 0.3,
                Agent_3: 0.7,
              },
            },
          ],
        },
      ],
      statistics: {
        total_rewards_distributed: 15.4,
        average_reward_per_agent: 0.77,
        most_popular_item_per_round: {
          "1": "apple",
          "2": "banana",
        },
        rounds_until_convergence: 8,
      },
    },
    {
      game_id: "game_002",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 12,
      start_time_utc: "2024-12-08T13:00:00Z",
      end_time_utc: "2024-12-08T13:45:00Z",
      final_convergence: {
        converged: true,
        winning_item: "banana",
        percentage: 90,
      },
      agents: [
        // Similar agent structure
      ],
      rounds: [
        // Similar rounds structure
      ],
      statistics: {
        total_rewards_distributed: 18.2,
        average_reward_per_agent: 0.91,
        most_popular_item_per_round: {
          "1": "apple",
          "2": "banana",
          "3": "banana",
        },
        rounds_until_convergence: 12,
      },
    },
    {
      game_id: "game_003",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 6,
      start_time_utc: "2024-12-08T14:00:00Z",
      end_time_utc: "2024-12-08T14:20:00Z",
      final_convergence: {
        converged: true,
        winning_item: "apple",
        percentage: 95,
      },
      statistics: {
        total_rewards_distributed: 12.8,
        average_reward_per_agent: 0.64,
        most_popular_item_per_round: {
          "1": "apple",
          "2": "apple",
        },
        rounds_until_convergence: 6,
      },
    },
    {
      game_id: "game_004",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 15,
      start_time_utc: "2024-12-08T15:00:00Z",
      end_time_utc: "2024-12-08T15:50:00Z",
      final_convergence: {
        converged: true,
        winning_item: "banana",
        percentage: 75,
      },
      statistics: {
        total_rewards_distributed: 22.5,
        average_reward_per_agent: 1.125,
        most_popular_item_per_round: {
          "1": "apple",
          "2": "banana",
          "3": "banana",
        },
        rounds_until_convergence: 15,
      },
    },
    {
      game_id: "game_005",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 9,
      start_time_utc: "2024-12-08T16:00:00Z",
      end_time_utc: "2024-12-08T16:25:00Z",
      final_convergence: {
        converged: true,
        winning_item: "apple",
        percentage: 88,
      },
      statistics: {
        total_rewards_distributed: 16.2,
        average_reward_per_agent: 0.81,
        most_popular_item_per_round: {
          "1": "banana",
          "2": "apple",
          "3": "apple",
        },
        rounds_until_convergence: 9,
      },
    },
    {
      game_id: "game_006",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 7,
      start_time_utc: "2024-12-08T17:00:00Z",
      end_time_utc: "2024-12-08T17:20:00Z",
      final_convergence: {
        converged: true,
        winning_item: "banana",
        percentage: 92,
      },
      statistics: {
        total_rewards_distributed: 14.0,
        average_reward_per_agent: 0.7,
        most_popular_item_per_round: {
          "1": "banana",
          "2": "banana",
        },
        rounds_until_convergence: 7,
      },
    },
  ],
};
