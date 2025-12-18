// components/CaseStudy.jsx
import React from 'react';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle,
  Target,
  Zap,
  BarChart
} from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back */}
        <div className="mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Projects</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            Case Study
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GoTask — Collaborative Task Management App
          </h1>
          <p className="text-xl text-gray-600">
            A Trello-inspired task management application built by a small team,
            focusing on clean UI, scalable frontend architecture, and practical
            collaboration workflows.
          </p>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Timeline</h3>
            <p className="text-gray-600">~2 months (iterative development)</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Role</h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">Team</h3>
            <p className="text-gray-600">2 people (1 Frontend, 1 Backend)</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'Tailwind CSS', 'DnD Kit', 'Axios', 'SweetAlert2'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-lg">
              <Target className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
          </div>

          <div className="bg-red-50/30 border border-red-100 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              Small teams often struggle to manage tasks effectively due to
              scattered tools and unclear workflows, leading to poor visibility
              and reduced productivity.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>Tasks spread across chat apps and personal notes</li>
              <li>No clear task ownership or progress tracking</li>
              <li>Overly complex tools for simple team needs</li>
              <li>Poor user experience for new or non-technical users</li>
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">The Solution</h2>
          </div>

          <div className="bg-green-50/30 border border-green-100 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-8">
              We built GoTask as a lightweight task management application that
              emphasizes clear UI structure, smooth interactions, and scalable
              frontend patterns suitable for small teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li>Workspace-based task boards</li>
                  <li>Drag & drop task cards using DnD Kit</li>
                  <li>Member invitation and role display</li>
                  <li>Responsive layout for desktop and mobile</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Frontend Architecture
                </h3>
                <ul className="space-y-3">
                  <li>Component-driven React structure</li>
                  <li>Centralized API service layer</li>
                  <li>Reusable UI components</li>
                  <li>Clear separation between UI and data logic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Decisions */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Technical Decisions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Drag & Drop with DnD Kit
              </h3>
              <p className="text-gray-700">
                Chose DnD Kit for its flexibility and accessibility support.
                Implemented droppable empty boards to ensure smooth UX even when
                columns contain no tasks.
              </p>
            </div>
            <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Frontend–Backend Collaboration
              </h3>
              <p className="text-gray-700">
                Worked closely with the backend developer to define API contracts
                early, allowing frontend development to progress independently
                and reducing integration issues.
              </p>
            </div>
            <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                UI Consistency with Tailwind CSS
              </h3>
              <p className="text-gray-700">
                Used Tailwind CSS to maintain consistent spacing, typography, and
                color usage across the application while enabling rapid UI
                iteration.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <BarChart className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Outcomes & Learnings
            </h2>
          </div>

          <div className="bg-purple-50/30 border border-purple-100 rounded-xl p-8">
            <ul className="space-y-3 text-gray-700">
              <li>Built a complete task management UI from scratch</li>
              <li>Gained hands-on experience with complex drag & drop behavior</li>
              <li>Improved collaboration skills between frontend and backend</li>
              <li>Applied UI/UX principles for productivity-focused interfaces</li>
              <li>Strengthened understanding of scalable React architecture</li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-gray-200">
          <a
            href="https://github.com/NurkalamAbdurahman/GoTask-FE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Github size={18} />
            <span className="font-medium">View Source Code</span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
