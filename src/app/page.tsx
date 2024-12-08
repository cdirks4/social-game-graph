"use client";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useEffect, useState } from "react";
import { GamesData } from "@/types";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

interface TooltipContext {
  dataIndex: number;
}

export default function Home() {
  const [gamesData, setGamesData] = useState<GamesData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Pretty print the API response
      console.log("API Response:", JSON.stringify(data, null, 2));

      if (data && data.games) {
        setGamesData({ games: data.games });

        // Log detailed statistics
        console.log("\n=== Games Summary ===");
        console.log(`Total Games: ${data.games.length}`);

        data.games.forEach((game, index) => {
          console.log(`\nGame ${index + 1} (${game.game_id}):`);
          console.log(
            `- Convergence: ${game.statistics.rounds_until_convergence} rounds`
          );
          console.log(`- Winner: ${game.final_convergence.winning_item}`);
          console.log(
            `- Final Percentage: ${game.final_convergence.percentage}%`
          );
          console.log(
            `- Average Reward: ${game.statistics.average_reward_per_agent}`
          );
          console.log(
            `- Total Rewards: ${game.statistics.total_rewards_distributed}`
          );

          // Log popular items per round
          console.log("- Popular items by round:");
          Object.entries(game.statistics.most_popular_item_per_round).forEach(
            ([round, item]) => {
              console.log(`  Round ${round}: ${item}`);
            }
          );
        });

        // Calculate and log aggregate statistics
        const avgConvergence =
          data.games.reduce(
            (sum, game) => sum + game.statistics.rounds_until_convergence,
            0
          ) / data.games.length;

        const avgReward =
          data.games.reduce(
            (sum, game) => sum + game.statistics.average_reward_per_agent,
            0
          ) / data.games.length;

        console.log("\n=== Aggregate Statistics ===");
        console.log(
          `Average Convergence Time: ${avgConvergence.toFixed(2)} rounds`
        );
        console.log(`Average Reward per Agent: ${avgReward.toFixed(2)}`);

        // Log winning items distribution
        const winningItems = data.games.reduce((acc, game) => {
          const winner = game.final_convergence.winning_item;
          acc[winner] = (acc[winner] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        console.log("\nWinning Items Distribution:");
        Object.entries(winningItems).forEach(([item, count]) => {
          console.log(
            `${item}: ${count} games (${(
              (count / data.games.length) *
              100
            ).toFixed(1)}%)`
          );
        });
      } else {
        throw new Error("Invalid data format received from API");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading data...</div>
      </div>
    );
  }

  if (error || !gamesData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">
          {error || "Failed to load data"}
        </div>
      </div>
    );
  }

  const scatterData = {
    datasets: [
      {
        label: "Rounds to Convergence",
        data: gamesData.games.map((game) => ({
          x: parseInt(game.game_id.split("_")[1]),
          y: game.statistics.rounds_until_convergence,
        })),
        backgroundColor: "rgb(75, 192, 192)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Social Game Convergence Analysis",
        font: {
          size: 20,
        },
        padding: 20,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipContext) => {
            const gameIndex = context.dataIndex;
            const game = gamesData.games[gameIndex];
            return [
              `Game ${game.game_id}`,
              `Rounds: ${game.statistics.rounds_until_convergence}`,
              `Winner: ${game.final_convergence.winning_item}`,
              `Final %: ${game.final_convergence.percentage}%`,
            ];
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rounds Until Convergence",
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Game Number",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Calculate summary statistics
  const averageRounds =
    gamesData.games.reduce(
      (sum, game) => sum + game.statistics.rounds_until_convergence,
      0
    ) / gamesData.games.length;

  const fastestGame = gamesData.games.reduce((fastest, game) =>
    game.statistics.rounds_until_convergence <
    fastest.statistics.rounds_until_convergence
      ? game
      : fastest
  );

  const slowestGame = gamesData.games.reduce((slowest, game) =>
    game.statistics.rounds_until_convergence >
    slowest.statistics.rounds_until_convergence
      ? game
      : slowest
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Social Game Convergence Analysis
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-blue-800 mb-2">
                Average Convergence
              </h2>
              <p className="text-2xl font-bold text-blue-600">
                {averageRounds.toFixed(1)} rounds
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-green-800 mb-2">
                Fastest Convergence
              </h2>
              <p className="text-2xl font-bold text-green-600">
                {fastestGame.statistics.rounds_until_convergence} rounds
              </p>
              <p className="text-sm text-green-600">
                Game {fastestGame.game_id} (
                {fastestGame.final_convergence.winning_item})
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h2 className="text-sm font-semibold text-purple-800 mb-2">
                Slowest Convergence
              </h2>
              <p className="text-2xl font-bold text-purple-600">
                {slowestGame.statistics.rounds_until_convergence} rounds
              </p>
              <p className="text-sm text-purple-600">
                Game {slowestGame.game_id} (
                {slowestGame.final_convergence.winning_item})
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <Scatter data={scatterData} options={options} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Game Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamesData.games.map((game) => (
              <div
                key={game.game_id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  Game {game.game_id}
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Rounds: {game.statistics.rounds_until_convergence}</p>
                  <p>Winner: {game.final_convergence.winning_item}</p>
                  <p>Final Percentage: {game.final_convergence.percentage}%</p>
                  <p>
                    Average Reward:{" "}
                    {game.statistics.average_reward_per_agent.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
