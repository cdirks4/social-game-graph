"use client";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SimulationState {
  totalPopulation: number;
  committedMinority: number;
  introductionRound: number;
  rounds: number;
  memoryLength: number;
  adoptionHistory: number[];
}

export default function SimulationView() {
  const [simulation, setSimulation] = useState<SimulationState>({
    totalPopulation: 100,
    committedMinority: 25,
    introductionRound: 1,
    rounds: 50,
    memoryLength: 12,
    adoptionHistory: [],
  });

  const [isRunning, setIsRunning] = useState(false);

  // Simulate one round of interactions
  const simulateRound = (
    currentAdoption: number,
    roundNumber: number
  ): number => {
    // Only apply committed minority after introduction round
    const effectiveMinority =
      roundNumber >= simulation.introductionRound
        ? simulation.committedMinority
        : 0;

    const minorityPercentage =
      (effectiveMinority / simulation.totalPopulation) * 100;
    const nonCommittedPopulation =
      simulation.totalPopulation - effectiveMinority;
    const currentNonCommittedAdopters =
      (currentAdoption * simulation.totalPopulation) / 100 - effectiveMinority;

    // Probability of adoption increases as more people adopt
    const adoptionProbability = Math.min(
      1,
      (currentNonCommittedAdopters + effectiveMinority) /
        simulation.totalPopulation
    );

    // Add noise to create more realistic adoption patterns
    const noise = (Math.random() - 0.5) * 0.1;

    // Calculate new adoption percentage
    let newAdopters = currentNonCommittedAdopters;
    if (minorityPercentage >= 25) {
      // Critical mass threshold
      newAdopters +=
        (nonCommittedPopulation - currentNonCommittedAdopters) *
        (adoptionProbability + noise);
    } else {
      // Decay rate is stronger before minority introduction
      const decayRate = roundNumber < simulation.introductionRound ? 0.2 : 0.1;
      newAdopters -= currentNonCommittedAdopters * (decayRate + noise);
    }

    // Convert back to percentage
    return (
      ((newAdopters + effectiveMinority) / simulation.totalPopulation) * 100
    );
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSimulation((prev) => {
          if (prev.adoptionHistory.length >= prev.rounds) {
            setIsRunning(false);
            return prev;
          }

          const currentRound = prev.adoptionHistory.length + 1;
          const lastAdoption =
            prev.adoptionHistory.length > 0
              ? prev.adoptionHistory[prev.adoptionHistory.length - 1]
              : 0;

          const newAdoption = simulateRound(lastAdoption, currentRound);
          return {
            ...prev,
            adoptionHistory: [...prev.adoptionHistory, newAdoption],
          };
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const chartData = {
    labels: Array.from(
      { length: simulation.adoptionHistory.length },
      (_, i) => i + 1
    ),
    datasets: [
      {
        label: "Alternative Convention Adoption",
        data: simulation.adoptionHistory,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Critical Mass Threshold",
        data: Array(simulation.adoptionHistory.length).fill(70),
        borderColor: "rgba(255, 99, 132, 0.5)",
        borderDash: [5, 5],
        tension: 0,
      },
      {
        label: "Minority Introduction",
        data: Array(simulation.adoptionHistory.length)
          .fill(null)
          .map((_, i) => (i + 1 === simulation.introductionRound ? 100 : null)),
        borderColor: "rgba(255, 165, 0, 1)",
        pointRadius: 8,
        pointStyle: "triangle",
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
        text: "Social Convention Tipping Point Simulation",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: { parsed: { y: number } }) => {
            return `Adoption: ${context.parsed.y.toFixed(1)}%`;
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Population Adoption (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Rounds",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Tipping Points in Social Convention
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Committed Minority (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={simulation.committedMinority}
                  onChange={(e) => {
                    setSimulation({
                      ...simulation,
                      committedMinority: Number(e.target.value),
                      adoptionHistory: [],
                    });
                  }}
                  className="w-full"
                />
                <div className="text-sm text-gray-500">
                  {simulation.committedMinority}%
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Introduction Round
                </label>
                <input
                  type="number"
                  min="1"
                  max={simulation.rounds}
                  value={simulation.introductionRound}
                  onChange={(e) => {
                    setSimulation({
                      ...simulation,
                      introductionRound: Math.min(
                        Number(e.target.value),
                        simulation.rounds
                      ),
                      adoptionHistory: [],
                    });
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Population Size
                </label>
                <input
                  type="number"
                  value={simulation.totalPopulation}
                  onChange={(e) => {
                    setSimulation({
                      ...simulation,
                      totalPopulation: Number(e.target.value),
                      adoptionHistory: [],
                    });
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Rounds
                </label>
                <input
                  type="number"
                  value={simulation.rounds}
                  onChange={(e) => {
                    const newRounds = Number(e.target.value);
                    setSimulation({
                      ...simulation,
                      rounds: newRounds,
                      introductionRound: Math.min(
                        simulation.introductionRound,
                        newRounds
                      ),
                      adoptionHistory: [],
                    });
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">
                  About This Simulation
                </h3>
                <p className="text-sm text-blue-600">
                  This simulation demonstrates how a committed minority can
                  trigger a shift in social conventions. You can now specify
                  when the committed minority is introduced, allowing you to see
                  how timing affects the adoption dynamics.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  className={`flex-1 px-4 py-2 rounded-md text-white ${
                    isRunning
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={() => {
                    if (!isRunning) {
                      setSimulation({
                        ...simulation,
                        adoptionHistory: [],
                      });
                    }
                    setIsRunning(!isRunning);
                  }}
                >
                  {isRunning ? "Stop" : "Start"} Simulation
                </button>
                <button
                  className="flex-1 px-4 py-2 rounded-md text-white bg-gray-500 hover:bg-gray-600"
                  onClick={() => {
                    setSimulation({
                      ...simulation,
                      adoptionHistory: [],
                    });
                    setIsRunning(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <Line data={chartData} options={options} />
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            {simulation.adoptionHistory.length > 0 && (
              <>
                Current Adoption:{" "}
                {simulation.adoptionHistory[
                  simulation.adoptionHistory.length - 1
                ].toFixed(1)}
                %
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
