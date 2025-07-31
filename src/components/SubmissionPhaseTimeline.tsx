import { submissionPhases } from "@/data/submissionPhase";

export default function SubmissionPhaseTimeline() {
  return (
    <div className="space-y-8">
      {submissionPhases.map((phase) => {
        const isActive = phase.active;
        const textColor = isActive ? "text-gray-900" : "text-gray-500";
        const borderColor = isActive ? "border-blue-500" : "border-gray-300";
        const badge = phase.badge ? (
          <span
            className={`px-3 py-1 ${
              isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
            } text-xs font-medium rounded-full`}
          >
            {phase.badge}
          </span>
        ) : null;

        return (
          <div
            key={phase.id}
            className={`border-l-4 ${borderColor} pl-4`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-8 h-8 rounded-full ${
                  isActive ? "bg-blue-100" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <span
                  className={`font-bold ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {phase.id}
                </span>
              </div>
              <h3 className={`text-lg font-semibold ${textColor}`}>
                {phase.title}
              </h3>
              {badge}
            </div>
            <div className="ml-10 space-y-3">
              <p className={`text-sm ${textColor}`}>
                {phase.deadline && <b>{phase.deadline}<br /></b>}
                {phase.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
