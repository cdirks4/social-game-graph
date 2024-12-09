import { GamesData } from "./types";

export const gamesData: GamesData = {
  games: [
    {
      game_id: "game_001",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 5,
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
          history: [],
        },
        {
          agent_id: "Agent_2",
          strategy: "Conservative",
          initial_currency: 1,
          final_currency: 0.9,
          history: [],
        },
        {
          agent_id: "Agent_3",
          strategy: "Follower",
          initial_currency: 1,
          final_currency: 1.1,
          history: [],
        },
        {
          agent_id: "Agent_4",
          strategy: "Random",
          initial_currency: 1,
          final_currency: 0.8,
          history: [],
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
                Agent_3: "apple",
                Agent_4: "banana",
              },
              rewards: {
                Agent_3: 0.2,
                Agent_4: 0.2,
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
                Agent_3: "apple",
              },
              final_guesses: {
                Agent_1: "apple",
                Agent_3: "apple",
              },
              rewards: {
                Agent_1: 0.6,
                Agent_3: 0.6,
              },
            },
            {
              agent_1_id: "Agent_2",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_2: "apple",
                Agent_4: "banana",
              },
              final_guesses: {
                Agent_2: "apple",
                Agent_4: "apple",
              },
              rewards: {
                Agent_2: 0.4,
                Agent_3: 0.4,
              },
            },
          ],
        },
        {
          round_number: 3,
          pairs: [
            {
              agent_1_id: "Agent_1",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_1: "apple",
                Agent_4: "apple",
              },
              final_guesses: {
                Agent_1: "apple",
                Agent_4: "apple",
              },
              rewards: {
                Agent_1: 0.7,
                Agent_4: 0.7,
              },
            },
            {
              agent_1_id: "Agent_2",
              agent_2_id: "Agent_3",
              initial_guesses: {
                Agent_2: "apple",
                Agent_3: "apple",
              },
              final_guesses: {
                Agent_2: "apple",
                Agent_3: "apple",
              },
              rewards: {
                Agent_2: 0.5,
                Agent_3: 0.5,
              },
            },
          ],
        },
        {
          round_number: 4,
          pairs: [
            {
              agent_1_id: "Agent_1",
              agent_2_id: "Agent_2",
              initial_guesses: {
                Agent_1: "apple",
                Agent_2: "apple",
              },
              final_guesses: {
                Agent_1: "apple",
                Agent_2: "apple",
              },
              rewards: {
                Agent_1: 0.8,
                Agent_2: 0.8,
              },
            },
            {
              agent_1_id: "Agent_3",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_3: "apple",
                Agent_4: "apple",
              },
              final_guesses: {
                Agent_3: "apple",
                Agent_4: "apple",
              },
              rewards: {
                Agent_3: 0.6,
                Agent_4: 0.6,
              },
            },
          ],
        },
        {
          round_number: 5,
          pairs: [
            {
              agent_1_id: "Agent_1",
              agent_2_id: "Agent_3",
              initial_guesses: {
                Agent_1: "apple",
                Agent_3: "apple",
              },
              final_guesses: {
                Agent_1: "apple",
                Agent_3: "apple",
              },
              rewards: {
                Agent_1: 0.9,
                Agent_3: 0.9,
              },
            },
            {
              agent_1_id: "Agent_2",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_2: "apple",
                Agent_4: "apple",
              },
              final_guesses: {
                Agent_2: "apple",
                Agent_4: "apple",
              },
              rewards: {
                Agent_2: 0.7,
                Agent_4: 0.7,
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
          "2": "apple",
          "3": "apple",
          "4": "apple",
          "5": "apple",
        },
        rounds_until_convergence: 5,
      },
    },
    {
      game_id: "game_002",
      num_agents: 20,
      convergence_threshold: 0.7,
      options: ["apple", "banana"],
      rounds_played: 4,
      start_time_utc: "2024-12-08T13:00:00Z",
      end_time_utc: "2024-12-08T13:45:00Z",
      final_convergence: {
        converged: true,
        winning_item: "banana",
        percentage: 90,
      },
      agents: [
        {
          agent_id: "Agent_1",
          strategy: "Follower",
          initial_currency: 1,
          final_currency: 1.3,
          history: [],
        },
        {
          agent_id: "Agent_2",
          strategy: "Leader",
          initial_currency: 1,
          final_currency: 1.2,
          history: [],
        },
        {
          agent_id: "Agent_3",
          strategy: "Opportunist",
          initial_currency: 1,
          final_currency: 0.9,
          history: [],
        },
        {
          agent_id: "Agent_4",
          strategy: "Conservative",
          initial_currency: 1,
          final_currency: 1.1,
          history: [],
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
                Agent_1: "banana",
                Agent_2: "banana",
              },
              rewards: {
                Agent_1: 0.6,
                Agent_2: 0.6,
              },
            },
            {
              agent_1_id: "Agent_3",
              agent_2_id: "Agent_4",
              initial_guesses: {
                Agent_3: "apple",
                Agent_4: "banana",
              },
              final_guesses: {
                Agent_3: "banana",
                Agent_4: "banana",
              },
              rewards: {
                Agent_3: 0.5,
                Agent_4: 0.5,
              },
            },
          ],
        },
        // Add more rounds following the same pattern...
      ],
      statistics: {
        total_rewards_distributed: 18.2,
        average_reward_per_agent: 0.91,
        most_popular_item_per_round: {
          "1": "banana",
          "2": "banana",
          "3": "banana",
          "4": "banana",
        },
        rounds_until_convergence: 4,
      },
    },
  ],
};
