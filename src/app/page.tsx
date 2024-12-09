"use client";
import Link from "next/link";
import { ArrowRight, Activity, Users, LineChart, Brain } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Interactive Research Visualization
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Social Convention{" "}
              <span className="text-blue-600">Tipping Points</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how committed minorities can trigger fundamental shifts
              in social conventions through interactive visualizations and
              simulations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              stat: "25%",
              label: "Critical Mass",
              description: "Minority size needed for change",
            },
            {
              icon: Activity,
              stat: "100%",
              label: "Success Rate",
              description: "When threshold is reached",
            },
            {
              icon: LineChart,
              stat: "8-15",
              label: "Rounds",
              description: "Average time to convergence",
            },
            {
              icon: Brain,
              stat: "20+",
              label: "Agents",
              description: "Per experimental trial",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-1">
                {item.stat}
              </div>
              <div className="font-medium text-gray-900 mb-1">{item.label}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Research Overview
            </h2>
            <p className="text-gray-600 mb-4">
              This project explores the fascinating dynamics of how social
              conventions change within populations. Based on research published
              in Science magazine, we demonstrate that when a committed minority
              reaches a critical mass—approximately 25% of the population—it can
              trigger a cascade of behavior change that rapidly increases the
              acceptance of their alternative views.
            </p>
            <p className="text-gray-600">
              Through experimental studies involving coordination games,
              researchers found that this tipping point consistently emerged
              across different trials and conditions, providing empirical
              evidence for theoretical models of critical mass dynamics in
              social convention change.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Findings
            </h2>
            <ul className="space-y-4">
              {[
                "A committed minority of approximately 25% of the population is required to create a tipping point",
                "Below this threshold, the dominant convention remains stable",
                "Above the threshold, rapid adoption of the alternative convention occurs",
                "The power of small groups comes from their commitment rather than their authority or resources",
              ].map((finding, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                    {i + 1}
                  </div>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              href: "/dynamic",
              title: "Interactive Game Visualization",
              description:
                "Watch how social conventions evolve in real-time through our visualization of the experimental game data. See how different agents interact and how their choices influence the broader population.",
              cta: "Explore Game Data",
            },
            {
              href: "/simulation",
              title: "Tipping Point Simulation",
              description:
                "Experiment with different population sizes and committed minority percentages to see how tipping points emerge. This interactive simulation lets you explore the conditions necessary for social convention change.",
              cta: "Try Simulation",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group block bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-1.5 transition-all">
                {item.cta}{" "}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2">
            Based on research by Damon Centola, Joshua Becker, Devon Brackbill,
            and Andrea Baronchelli
          </p>
          <p className="text-sm text-gray-500">
            Published in Science Magazine:{" "}
            <a
              href="https://science.sciencemag.org/content/360/6393/1116"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              &ldquo;Experimental evidence for tipping points in social
              convention&rdquo;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
