import Link from "next/link";
import { HabitStreakCard } from "@/components/HabitStreakCard";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Habit Tracker AI</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build better habits with AI-powered insights and streak tracking
        </p>
        <Link 
          href="/habit-streak-example"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Example Streaks
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Track Your Progress</h2>
          <p className="text-gray-600">
            Monitor your daily habits and build consistent routines with our intuitive tracking system.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">AI-Powered Insights</h2>
          <p className="text-gray-600">
            Get personalized recommendations and motivation based on your habit patterns.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Build Streaks</h2>
          <p className="text-gray-600">
            Stay motivated by tracking your streaks and celebrating your achievements.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Habits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HabitStreakCard
            habitName="Morning Exercise"
            currentStreak={5}
            bestStreak={7}
            lastCompleted={new Date()}
          />
          <HabitStreakCard
            habitName="Reading"
            currentStreak={12}
            bestStreak={10}
            lastCompleted={new Date()}
          />
          <HabitStreakCard
            habitName="Meditation"
            currentStreak={0}
            bestStreak={3}
            lastCompleted={new Date(Date.now() - 86400000)}
          />
        </div>
      </section>
    </div>
  );
}
