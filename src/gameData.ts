export const gameData = [
  {
    game_id: "1733710863",
    num_agents: 4,
    convergence_threshold: 1.0,
    options: ["apple", "banana"],
    rounds_played: 3,
    start_time_utc: "2024-12-09T02:21:03.365021+00:00",
    end_time_utc: "2024-12-09T02:21:14.828083+00:00",
    final_convergence: {},
    agents: [
      {
        agent_id: "Agent_0",
        strategy: "random_with_influence",
        initial_currency: 1.0,
        final_currency: 2.5,
        history: [
          {
            round: 1,
            partner_id: "Agent_1",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 2,
            partner_id: "Agent_2",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 3,
            partner_id: "Agent_2",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
        ],
      },
      {
        agent_id: "Agent_1",
        strategy: "random_with_influence",
        initial_currency: 1.0,
        final_currency: 2.5,
        history: [
          {
            round: 1,
            partner_id: "Agent_0",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 2,
            partner_id: "Agent_3",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 3,
            partner_id: "Agent_3",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
        ],
      },
      {
        agent_id: "Agent_2",
        strategy: "random_with_influence",
        initial_currency: 1.0,
        final_currency: 2.5,
        history: [
          {
            round: 1,
            partner_id: "Agent_3",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 2,
            partner_id: "Agent_0",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 3,
            partner_id: "Agent_0",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
        ],
      },
      {
        agent_id: "Agent_3",
        strategy: "random_with_influence",
        initial_currency: 1.0,
        final_currency: 2.5,
        history: [
          {
            round: 1,
            partner_id: "Agent_2",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 2,
            partner_id: "Agent_1",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
          {
            round: 3,
            partner_id: "Agent_1",
            initial_guess: "banana",
            final_guess: "banana",
            reward: 0.5,
          },
        ],
      },
    ],
    rounds: [
      {
        round_number: 1,
        pairs: [
          {
            agent_1_id: "Agent_2",
            agent_2_id: "Agent_3",
            initial_guesses: {
              Agent_2: "banana",
              Agent_3: "banana",
            },
            final_guesses: {
              Agent_2: "banana",
              Agent_3: "banana",
            },
            rewards: {
              Agent_2: 0.5,
              Agent_3: 0.5,
            },
          },
          {
            agent_1_id: "Agent_1",
            agent_2_id: "Agent_0",
            initial_guesses: {
              Agent_1: "banana",
              Agent_0: "banana",
            },
            final_guesses: {
              Agent_1: "banana",
              Agent_0: "banana",
            },
            rewards: {
              Agent_1: 0.5,
              Agent_0: 0.5,
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
              Agent_1: "banana",
              Agent_3: "banana",
            },
            final_guesses: {
              Agent_1: "banana",
              Agent_3: "banana",
            },
            rewards: {
              Agent_1: 0.5,
              Agent_3: 0.5,
            },
          },
          {
            agent_1_id: "Agent_0",
            agent_2_id: "Agent_2",
            initial_guesses: {
              Agent_0: "banana",
              Agent_2: "banana",
            },
            final_guesses: {
              Agent_0: "banana",
              Agent_2: "banana",
            },
            rewards: {
              Agent_0: 0.5,
              Agent_2: 0.5,
            },
          },
        ],
      },
      {
        round_number: 3,
        pairs: [
          {
            agent_1_id: "Agent_0",
            agent_2_id: "Agent_2",
            initial_guesses: {
              Agent_0: "banana",
              Agent_2: "banana",
            },
            final_guesses: {
              Agent_0: "banana",
              Agent_2: "banana",
            },
            rewards: {
              Agent_0: 0.5,
              Agent_2: 0.5,
            },
          },
          {
            agent_1_id: "Agent_3",
            agent_2_id: "Agent_1",
            initial_guesses: {
              Agent_3: "banana",
              Agent_1: "banana",
            },
            final_guesses: {
              Agent_3: "banana",
              Agent_1: "banana",
            },
            rewards: {
              Agent_3: 0.5,
              Agent_1: 0.5,
            },
          },
        ],
      },
    ],
    statistics: {
      total_rewards_distributed: 6.0,
      average_reward_per_agent: 1.5,
      most_popular_item_per_round: {
        "1": "banana",
        "2": "banana",
        "3": "banana",
      },
      rounds_until_convergence: null,
    },
  },
  {
    game_id: "1733715015",
    num_agents: 10,
    convergence_threshold: 0.5,
    options: ["guava", "lychee", "dragonfruit", "persimmon", "papaya"],
    rounds_played: 5,
    start_time_utc: "2024-12-09T03:30:15.108892+00:00",
    end_time_utc: "2024-12-09T03:30:52.669331+00:00",
    final_convergence: {
      converged: false,
      winning_item: "guava",
      percentage: 0.4,
    },
    agents: [
      {
        agent_id: "Agent_1",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: -3.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_7",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_8",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_9",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 4,
            partner_id: "Agent_2",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_5",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
        ],
      },
      {
        agent_id: "Agent_2",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: 1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_5",
            initial_guess: "dragonfruit",
            final_guess: "dragonfruit",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_3",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_5",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_1",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_3",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
        ],
      },
      {
        agent_id: "Agent_3",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: 1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_4",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_2",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_6",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_8",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_2",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
        ],
      },
      {
        agent_id: "Agent_4",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: 1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_3",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_7",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_8",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_6",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_7",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
        ],
      },
      {
        agent_id: "Agent_5",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: -3.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_2",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_6",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 3,
            partner_id: "Agent_2",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_7",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_1",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
        ],
      },
      {
        agent_id: "Agent_6",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: -3.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_8",
            initial_guess: "dragonfruit",
            final_guess: "dragonfruit",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_5",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: -1,
          },
          {
            round: 3,
            partner_id: "Agent_3",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_4",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_8",
            initial_guess: "papaya",
            final_guess: "papaya",
            reward: -1,
          },
        ],
      },
      {
        agent_id: "Agent_7",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: -1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_1",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_4",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_10",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 4,
            partner_id: "Agent_5",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_4",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
        ],
      },
      {
        agent_id: "Agent_8",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: -1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_6",
            initial_guess: "persimmon",
            final_guess: "persimmon",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_1",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_4",
            initial_guess: "guava",
            final_guess: "guava",
            reward: 1,
          },
          {
            round: 4,
            partner_id: "Agent_3",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
          {
            round: 5,
            partner_id: "Agent_6",
            initial_guess: "guava",
            final_guess: "guava",
            reward: -1,
          },
        ],
      },
      {
        agent_id: "Agent_9",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: 1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_10",
            initial_guess: "persimmon",
            final_guess: "persimmon",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_10",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_1",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: -1,
          },
          {
            round: 4,
            partner_id: "Agent_10",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
          {
            round: 5,
            partner_id: "Agent_10",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
        ],
      },
      {
        agent_id: "Agent_10",
        strategy: "gpt4_with_memory",
        initial_currency: 0.0,
        final_currency: 1.0,
        history: [
          {
            round: 1,
            partner_id: "Agent_9",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: -1,
          },
          {
            round: 2,
            partner_id: "Agent_9",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
          {
            round: 3,
            partner_id: "Agent_7",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: -1,
          },
          {
            round: 4,
            partner_id: "Agent_9",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
          {
            round: 5,
            partner_id: "Agent_9",
            initial_guess: "lychee",
            final_guess: "lychee",
            reward: 1,
          },
        ],
      },
    ],
    rounds: [
      {
        round_number: 1,
        pairs: [
          {
            agent_1_id: "Agent_8",
            agent_2_id: "Agent_6",
            initial_guesses: {
              Agent_8: "persimmon",
              Agent_6: "dragonfruit",
            },
            final_guesses: {
              Agent_8: "persimmon",
              Agent_6: "dragonfruit",
            },
            rewards: {
              Agent_8: -1,
              Agent_6: -1,
            },
          },
          {
            agent_1_id: "Agent_7",
            agent_2_id: "Agent_1",
            initial_guesses: {
              Agent_7: "lychee",
              Agent_1: "guava",
            },
            final_guesses: {
              Agent_7: "lychee",
              Agent_1: "guava",
            },
            rewards: {
              Agent_7: -1,
              Agent_1: -1,
            },
          },
          {
            agent_1_id: "Agent_2",
            agent_2_id: "Agent_5",
            initial_guesses: {
              Agent_2: "dragonfruit",
              Agent_5: "papaya",
            },
            final_guesses: {
              Agent_2: "dragonfruit",
              Agent_5: "papaya",
            },
            rewards: {
              Agent_2: -1,
              Agent_5: -1,
            },
          },
          {
            agent_1_id: "Agent_3",
            agent_2_id: "Agent_4",
            initial_guesses: {
              Agent_3: "papaya",
              Agent_4: "guava",
            },
            final_guesses: {
              Agent_3: "papaya",
              Agent_4: "guava",
            },
            rewards: {
              Agent_3: -1,
              Agent_4: -1,
            },
          },
          {
            agent_1_id: "Agent_10",
            agent_2_id: "Agent_9",
            initial_guesses: {
              Agent_10: "lychee",
              Agent_9: "persimmon",
            },
            final_guesses: {
              Agent_10: "lychee",
              Agent_9: "persimmon",
            },
            rewards: {
              Agent_10: -1,
              Agent_9: -1,
            },
          },
        ],
      },
      {
        round_number: 2,
        pairs: [
          {
            agent_1_id: "Agent_6",
            agent_2_id: "Agent_5",
            initial_guesses: {
              Agent_6: "lychee",
              Agent_5: "papaya",
            },
            final_guesses: {
              Agent_6: "lychee",
              Agent_5: "papaya",
            },
            rewards: {
              Agent_6: -1,
              Agent_5: -1,
            },
          },
          {
            agent_1_id: "Agent_10",
            agent_2_id: "Agent_9",
            initial_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            final_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            rewards: {
              Agent_10: 1,
              Agent_9: 1,
            },
          },
          {
            agent_1_id: "Agent_7",
            agent_2_id: "Agent_4",
            initial_guesses: {
              Agent_7: "guava",
              Agent_4: "guava",
            },
            final_guesses: {
              Agent_7: "guava",
              Agent_4: "guava",
            },
            rewards: {
              Agent_7: 1,
              Agent_4: 1,
            },
          },
          {
            agent_1_id: "Agent_2",
            agent_2_id: "Agent_3",
            initial_guesses: {
              Agent_2: "papaya",
              Agent_3: "papaya",
            },
            final_guesses: {
              Agent_2: "papaya",
              Agent_3: "papaya",
            },
            rewards: {
              Agent_2: 1,
              Agent_3: 1,
            },
          },
          {
            agent_1_id: "Agent_1",
            agent_2_id: "Agent_8",
            initial_guesses: {
              Agent_1: "guava",
              Agent_8: "guava",
            },
            final_guesses: {
              Agent_1: "guava",
              Agent_8: "guava",
            },
            rewards: {
              Agent_1: 1,
              Agent_8: 1,
            },
          },
        ],
      },
      {
        round_number: 3,
        pairs: [
          {
            agent_1_id: "Agent_8",
            agent_2_id: "Agent_4",
            initial_guesses: {
              Agent_8: "guava",
              Agent_4: "guava",
            },
            final_guesses: {
              Agent_8: "guava",
              Agent_4: "guava",
            },
            rewards: {
              Agent_8: 1,
              Agent_4: 1,
            },
          },
          {
            agent_1_id: "Agent_2",
            agent_2_id: "Agent_5",
            initial_guesses: {
              Agent_2: "papaya",
              Agent_5: "papaya",
            },
            final_guesses: {
              Agent_2: "papaya",
              Agent_5: "papaya",
            },
            rewards: {
              Agent_2: 1,
              Agent_5: 1,
            },
          },
          {
            agent_1_id: "Agent_7",
            agent_2_id: "Agent_10",
            initial_guesses: {
              Agent_7: "guava",
              Agent_10: "lychee",
            },
            final_guesses: {
              Agent_7: "guava",
              Agent_10: "lychee",
            },
            rewards: {
              Agent_7: -1,
              Agent_10: -1,
            },
          },
          {
            agent_1_id: "Agent_3",
            agent_2_id: "Agent_6",
            initial_guesses: {
              Agent_3: "papaya",
              Agent_6: "papaya",
            },
            final_guesses: {
              Agent_3: "papaya",
              Agent_6: "papaya",
            },
            rewards: {
              Agent_3: 1,
              Agent_6: 1,
            },
          },
          {
            agent_1_id: "Agent_1",
            agent_2_id: "Agent_9",
            initial_guesses: {
              Agent_1: "guava",
              Agent_9: "lychee",
            },
            final_guesses: {
              Agent_1: "guava",
              Agent_9: "lychee",
            },
            rewards: {
              Agent_1: -1,
              Agent_9: -1,
            },
          },
        ],
      },
      {
        round_number: 4,
        pairs: [
          {
            agent_1_id: "Agent_6",
            agent_2_id: "Agent_4",
            initial_guesses: {
              Agent_6: "papaya",
              Agent_4: "guava",
            },
            final_guesses: {
              Agent_6: "papaya",
              Agent_4: "guava",
            },
            rewards: {
              Agent_6: -1,
              Agent_4: -1,
            },
          },
          {
            agent_1_id: "Agent_3",
            agent_2_id: "Agent_8",
            initial_guesses: {
              Agent_3: "papaya",
              Agent_8: "guava",
            },
            final_guesses: {
              Agent_3: "papaya",
              Agent_8: "guava",
            },
            rewards: {
              Agent_3: -1,
              Agent_8: -1,
            },
          },
          {
            agent_1_id: "Agent_10",
            agent_2_id: "Agent_9",
            initial_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            final_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            rewards: {
              Agent_10: 1,
              Agent_9: 1,
            },
          },
          {
            agent_1_id: "Agent_2",
            agent_2_id: "Agent_1",
            initial_guesses: {
              Agent_2: "papaya",
              Agent_1: "guava",
            },
            final_guesses: {
              Agent_2: "papaya",
              Agent_1: "guava",
            },
            rewards: {
              Agent_2: -1,
              Agent_1: -1,
            },
          },
          {
            agent_1_id: "Agent_7",
            agent_2_id: "Agent_5",
            initial_guesses: {
              Agent_7: "guava",
              Agent_5: "papaya",
            },
            final_guesses: {
              Agent_7: "guava",
              Agent_5: "papaya",
            },
            rewards: {
              Agent_7: -1,
              Agent_5: -1,
            },
          },
        ],
      },
      {
        round_number: 5,
        pairs: [
          {
            agent_1_id: "Agent_8",
            agent_2_id: "Agent_6",
            initial_guesses: {
              Agent_8: "guava",
              Agent_6: "papaya",
            },
            final_guesses: {
              Agent_8: "guava",
              Agent_6: "papaya",
            },
            rewards: {
              Agent_8: -1,
              Agent_6: -1,
            },
          },
          {
            agent_1_id: "Agent_3",
            agent_2_id: "Agent_2",
            initial_guesses: {
              Agent_3: "papaya",
              Agent_2: "papaya",
            },
            final_guesses: {
              Agent_3: "papaya",
              Agent_2: "papaya",
            },
            rewards: {
              Agent_3: 1,
              Agent_2: 1,
            },
          },
          {
            agent_1_id: "Agent_1",
            agent_2_id: "Agent_5",
            initial_guesses: {
              Agent_1: "guava",
              Agent_5: "papaya",
            },
            final_guesses: {
              Agent_1: "guava",
              Agent_5: "papaya",
            },
            rewards: {
              Agent_1: -1,
              Agent_5: -1,
            },
          },
          {
            agent_1_id: "Agent_4",
            agent_2_id: "Agent_7",
            initial_guesses: {
              Agent_4: "guava",
              Agent_7: "guava",
            },
            final_guesses: {
              Agent_4: "guava",
              Agent_7: "guava",
            },
            rewards: {
              Agent_4: 1,
              Agent_7: 1,
            },
          },
          {
            agent_1_id: "Agent_10",
            agent_2_id: "Agent_9",
            initial_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            final_guesses: {
              Agent_10: "lychee",
              Agent_9: "lychee",
            },
            rewards: {
              Agent_10: 1,
              Agent_9: 1,
            },
          },
        ],
      },
    ],
    statistics: {
      total_rewards_distributed: -6,
      average_reward_per_agent: -0.6,
      most_popular_item_per_round: {
        "1": "persimmon",
        "2": "guava",
        "3": "guava",
        "4": "papaya",
        "5": "guava",
      },
      rounds_until_convergence: null,
    },
  },
];
