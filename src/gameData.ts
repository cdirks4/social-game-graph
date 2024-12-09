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
];
