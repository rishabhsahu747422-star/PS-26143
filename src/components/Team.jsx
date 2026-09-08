import React from 'react';
import { teamMembers, projectMeta } from '../data/projectData';
import { Users, Award, CheckCircle2 } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-borderSlate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white border border-borderSlate text-xs font-bold uppercase tracking-widest text-slate-700">
            <Users className="w-3.5 h-3.5 text-primaryBlue" />
            <span>{projectMeta.teamId} Roster</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-mainText tracking-tight">
            MEET THE TEAM
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            The people behind the solution.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-borderSlate p-6 shadow-2xs hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Member Header: Avatar Initials + Meta */}
                <div className="flex items-center space-x-4 mb-4">
                  {/* Clean Initials Avatar Placeholder */}
                  <div className={`w-14 h-14 rounded-2xl ${member.avatarBg} text-white flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-white`}>
                    {member.avatarInitials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900 tracking-tight truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-primaryBlue truncate">
                      {member.role}
                    </p>
                    <span className="text-[11px] text-slate-600">
                      Team 26175 • SIH 2026
                    </span>
                  </div>
                </div>

                {/* Short Contribution */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.contribution}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Note & Contribution Stamp */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Contributor</span>
                </span>
                <span className="text-[11px] text-slate-600 font-mono">
                  SIH-2026-DEV
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Team Credo Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-borderSlate shadow-soft max-w-3xl mx-auto text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-primaryBlue font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Smart India Hackathon 2026 Commitment</span>
          </div>
          <p className="text-base font-bold text-slate-900">
            "Real Work. Real Progress. Real Impact."
          </p>
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
            Every code commit, architectural model, and field test has been documented openly to uphold the highest standards of academic integrity and technical competence for SIH evaluators.
          </p>
        </div>

      </div>
    </section>
  );
}
