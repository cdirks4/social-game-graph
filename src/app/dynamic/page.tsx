"use client";
import { useEffect, useState } from "react";
import { GameData } from "@/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const getPhaseColor = (round: number) => {
  if (round < 10) return "text-purple-600";
  if (round < 15) return "text-orange-600";
  return "text-green-600";
};

const getPhaseDescription = (round: number) => {
  if (round < 10) return "Initial Convergence";
  if (round < 15) return "Minority Influence";
  return "New Consensus Formation";
};

export default function DynamicView() {
  const [game, setGame] = useState<GameData | null>(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1000);
  const [agentHistory, setAgentHistory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCurrentDistribution = (round: number) => {
    if (!game)
      return {
        counts: {},
        percentages: {},
      };

    const currentRoundData = game.rounds.find((r) => r.round_number === round);

    if (!currentRoundData) {
      const emptyDistribution = game.options.reduce((acc, option) => {
        acc[option] = 0;
        return acc;
      }, {} as Record<string, number>);

      return {
        counts: emptyDistribution,
        percentages: Object.keys(emptyDistribution).reduce((acc, key) => {
          acc[key] = "0";
          return acc;
        }, {} as Record<string, string>),
      };
    }

    // Initialize counts for all options
    const counts = game.options.reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {} as Record<string, number>);

    // Count final guesses
    currentRoundData.pairs.forEach((pair) => {
      Object.values(pair.final_guesses).forEach((guess) => {
        if (counts.hasOwnProperty(guess)) {
          counts[guess]++;
        }
      });
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    const percentages = Object.keys(counts).reduce((acc, key) => {
      acc[key] = ((counts[key] / total) * 100).toFixed(1);
      return acc;
    }, {} as Record<string, string>);

    return { counts, percentages };
  };

  const pieData = {
    labels:
      game?.options.map(
        (option) => option.charAt(0).toUpperCase() + option.slice(1)
      ) || [],
    datasets: [
      {
        data: Object.values(getCurrentDistribution(currentRound).counts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)", // Red (guava)
          "rgba(255, 205, 86, 0.8)", // Yellow (lychee)
          "rgba(255, 159, 64, 0.8)", // Orange (dragonfruit)
          "rgba(153, 102, 255, 0.8)", // Purple (persimmon)
          "rgba(255, 159, 132, 0.8)", // Pink (papaya)
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Current Choice Distribution",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: { dataIndex: number }) => {
            const distribution = getCurrentDistribution(currentRound);
            const labels = ["apple", "banana"];
            const key = labels[
              context.dataIndex
            ] as keyof typeof distribution.percentages;
            return `${labels[context.dataIndex]}: ${
              distribution.percentages[key]
            }%`;
          },
        },
      },
    },
  };

  // Add function to reconstruct rounds from agent histories
  const reconstructRounds = (game: GameData) => {
    const rounds: Record<
      number,
      {
        round_number: number;
        pairs: Array<{
          agent_1_id: string;
          agent_2_id: string;
          initial_guesses: Record<string, string>;
          final_guesses: Record<string, string>;
          rewards: Record<string, number>;
        }>;
      }
    > = {};

    // Process each agent's history
    game.agents.forEach((agent) => {
      agent.history.forEach((interaction) => {
        const round = interaction.round;

        if (!rounds[round]) {
          rounds[round] = {
            round_number: round,
            pairs: [],
          };
        }

        // Check if this pair is already added (from the other agent's perspective)
        const existingPair = rounds[round].pairs.find(
          (pair) =>
            (pair.agent_1_id === agent.agent_id &&
              pair.agent_2_id === interaction.partner_id) ||
            (pair.agent_2_id === agent.agent_id &&
              pair.agent_1_id === interaction.partner_id)
        );

        if (!existingPair) {
          rounds[round].pairs.push({
            agent_1_id: agent.agent_id,
            agent_2_id: interaction.partner_id,
            initial_guesses: {
              [agent.agent_id]: interaction.initial_guess,
            },
            final_guesses: {
              [agent.agent_id]: interaction.final_guess,
            },
            rewards: {
              [agent.agent_id]: interaction.reward,
            },
          });
        } else {
          // Update existing pair with this agent's information
          existingPair.initial_guesses[agent.agent_id] =
            interaction.initial_guess;
          existingPair.final_guesses[agent.agent_id] = interaction.final_guess;
          existingPair.rewards[agent.agent_id] = interaction.reward;
        }
      });
    });

    // Convert to array and sort by round number
    return Object.values(rounds).sort(
      (a, b) => a.round_number - b.round_number
    );
  };

  // Update the useEffect where we fetch data
  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        if (!response.ok) {
          throw new Error("Failed to fetch game data");
        }
        const data = await response.json();
        console.log("API Response:", data);

        // Reconstruct rounds data
        const gameData = data[0];
        gameData.rounds = reconstructRounds(gameData);

        setGame(gameData);
        setIsLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch game data"
        );
        setIsLoading(false);
      }
    };

    fetchGameData();
  }, []);

  useEffect(() => {
    // Skip if game is null
    if (!game) return;

    // Reset round when game changes
    setCurrentRound(1);
    setIsPlaying(false);

    // Initialize agent history for new game
    const newHistory: Record<string, string[]> = {};
    game.agents.forEach((agent) => {
      newHistory[agent.agent_id] = []; // Start with empty history
    });
    setAgentHistory(newHistory);
  }, [game]);

  useEffect(() => {
    // Skip if game is null
    if (!game) return;

    const newHistory: Record<string, string[]> = {};

    game.agents.forEach((agent) => {
      newHistory[agent.agent_id] = Array(currentRound).fill("");
    });

    for (let roundNum = 1; roundNum <= currentRound; roundNum++) {
      const round = game.rounds.find((r) => r.round_number === roundNum);
      if (round) {
        round.pairs.forEach((pair) => {
          const { agent_1_id, agent_2_id, final_guesses } = pair;
          if (roundNum === 1) {
            newHistory[agent_1_id] = [final_guesses[agent_1_id]];
            newHistory[agent_2_id] = [final_guesses[agent_2_id]];
          } else {
            newHistory[agent_1_id].push(final_guesses[agent_1_id]);
            newHistory[agent_2_id].push(final_guesses[agent_2_id]);
          }
        });
      }
    }

    setAgentHistory(newHistory);
  }, [game, currentRound]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && game) {
      interval = setInterval(() => {
        setCurrentRound((prev) => {
          if (prev >= game.rounds_played) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, game, playbackSpeed]);

  const getRewardColor = (reward: number) => {
    if (reward >= 0.7) return "text-green-600";
    if (reward <= 0.3) return "text-red-600";
    return "text-yellow-600";
  };

  const getDecisionChangeColor = (
    initialGuess: string,
    finalGuess: string,
    winningItem: string
  ) => {
    if (initialGuess === finalGuess) {
      return finalGuess === winningItem ? "text-green-600" : "text-gray-600";
    }
    return finalGuess === winningItem
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";
  };

  // Add helper function to calculate current convergence
  const getCurrentConvergence = (round: number, game: GameData) => {
    const roundData = game.rounds.find((r) => r.round_number === round);
    if (!roundData) return 0;

    const choices = roundData.pairs.flatMap((pair) =>
      Object.values(pair.final_guesses)
    );

    const total = choices.length;
    const counts = choices.reduce((acc, choice) => {
      acc[choice] = (acc[choice] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const maxCount = Math.max(...Object.values(counts));
    return (maxCount / total) * 100;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading game data...</div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">
          {error || "Failed to load game data"}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => {
                  setCurrentRound(1);
                  setIsPlaying(false);
                }}
              >
                Reset
              </button>
              <select
                className="border rounded p-2"
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
              >
                <option value={2000}>0.5x Speed</option>
                <option value={1000}>1x Speed</option>
                <option value={500}>2x Speed</option>
                <option value={250}>4x Speed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                <div className="bg-white rounded-lg p-4 border">
                  <h3 className="font-semibold text-lg mb-4">
                    Current Round Interactions
                  </h3>
                  <div className="space-y-4">
                    {game.rounds
                      .find((r) => r.round_number === currentRound)
                      ?.pairs.map((pair, index) => {
                        const agent1Color = getDecisionChangeColor(
                          pair.initial_guesses[pair.agent_1_id],
                          pair.final_guesses[pair.agent_1_id],
                          game.final_convergence.winning_item
                        );
                        const agent2Color = getDecisionChangeColor(
                          pair.initial_guesses[pair.agent_2_id],
                          pair.final_guesses[pair.agent_2_id],
                          game.final_convergence.winning_item
                        );

                        return (
                          <div
                            key={index}
                            className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex-1">
                                <div className="font-medium">
                                  {pair.agent_1_id}
                                </div>
                                <div className={`text-sm ${agent1Color}`}>
                                  {pair.initial_guesses[pair.agent_1_id]} →{" "}
                                  {pair.final_guesses[pair.agent_1_id]}
                                </div>
                              </div>
                              <div className="flex-1 text-center">
                                <div className="text-xs text-gray-500">
                                  Rewards
                                </div>
                                <div className="flex justify-center gap-2">
                                  <span
                                    className={`text-sm ${getRewardColor(
                                      pair.rewards[pair.agent_1_id]
                                    )}`}
                                  >
                                    {pair.rewards[pair.agent_1_id]}
                                  </span>
                                  <span className="text-gray-400">|</span>
                                  <span
                                    className={`text-sm ${getRewardColor(
                                      pair.rewards[pair.agent_2_id]
                                    )}`}
                                  >
                                    {pair.rewards[pair.agent_2_id]}
                                  </span>
                                </div>
                              </div>
                              <div className="flex-1 text-right">
                                <div className="font-medium">
                                  {pair.agent_2_id}
                                </div>
                                <div className={`text-sm ${agent2Color}`}>
                                  {pair.initial_guesses[pair.agent_2_id]} →{" "}
                                  {pair.final_guesses[pair.agent_2_id]}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border">
                  <h3 className="font-semibold text-lg mb-4">
                    Agent Decision History
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(agentHistory).map(
                      ([agentId, decisions]) => {
                        const agent = game.agents.find(
                          (a) => a.agent_id === agentId
                        );
                        return (
                          <div key={agentId} className="flex items-center">
                            <div className="w-32 font-medium">
                              {agentId}{" "}
                              <span className="text-xs text-gray-500">
                                ({agent?.strategy})
                              </span>
                            </div>
                            <div className="flex-1 flex gap-1">
                              {decisions.map((decision, idx) => (
                                <div
                                  key={idx}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs
                                  ${
                                    decision ===
                                    game.final_convergence.winning_item
                                      ? "bg-green-100 text-green-800 border-2 border-green-300"
                                      : decision === "apple"
                                      ? "bg-red-100 text-red-800"
                                      : decision === "banana"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100"
                                  }`}
                                >
                                  {decision ? decision[0].toUpperCase() : "-"}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border">
              <div className="h-[300px] flex items-center justify-center">
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                {Object.entries(
                  getCurrentDistribution(currentRound).percentages
                ).map(([option, percentage]) => (
                  <div key={option} className="capitalize">
                    {option}: {percentage}%
                  </div>
                ))}
              </div>
              <div className="mt-2 text-center text-xs text-gray-500">
                Target: {game.convergence_threshold * 100}% for convergence
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-gray-600">
            Round {currentRound} of {game.rounds_played}
          </div>
        </div>

        {/* Game Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Game Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Convergence Status</h3>
              <div className="text-sm space-y-1">
                <p>
                  Current Convergence:{" "}
                  <span className="font-medium">
                    {getCurrentConvergence(currentRound, game).toFixed(1)}%
                  </span>
                </p>
                <p>Target: {(game.convergence_threshold * 100).toFixed(1)}%</p>
                <p className="mt-2 text-xs text-gray-500">
                  {getCurrentConvergence(currentRound, game) >=
                  game.convergence_threshold * 100
                    ? "Group has reached convergence"
                    : "Group has not yet converged"}
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(
                        100,
                        (getCurrentConvergence(currentRound, game) /
                          (game.convergence_threshold * 100)) *
                          100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Phase Analysis</h3>
              <div className="text-sm space-y-1">
                <p>
                  Current Phase:{" "}
                  <span
                    className={`font-medium ${getPhaseColor(currentRound)}`}
                  >
                    {getPhaseDescription(currentRound)}
                  </span>
                </p>
                <p>
                  Popular Choice:{" "}
                  {game.statistics.most_popular_item_per_round[currentRound]}
                </p>
                <div className="mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Initial Choices</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span>Convergence Period</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Final Consensus</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Game Stats</h3>
              <div className="text-sm space-y-1">
                <p>
                  Total Rewards:{" "}
                  {game.statistics.total_rewards_distributed.toFixed(1)}
                </p>
                <p>
                  Avg Reward:{" "}
                  {game.statistics.average_reward_per_agent.toFixed(2)}
                </p>
                <p>
                  Rounds to Converge:{" "}
                  {game.statistics.rounds_until_convergence ||
                    "Not yet converged"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
