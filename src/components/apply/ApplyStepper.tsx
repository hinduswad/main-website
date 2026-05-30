import { Check } from "lucide-react";

interface ApplyStepperProps {
  currentStep: number;
}

export default function ApplyStepper({ currentStep }: ApplyStepperProps) {
  const steps = [
    { number: 1, name: "Role Confirm" },
    { number: 2, name: "Personal" },
    { number: 3, name: "Professional" },
    { number: 4, name: "Review" },
    { number: 5, name: "Payment" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-10 px-4">
      <div className="relative flex items-center justify-between">
        {/* Progress Bar background */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-zinc-200 z-0 rounded-full" />
        
        {/* Progress Bar active fill */}
        <div
          className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-orange-500 z-0 transition-all duration-500 rounded-full"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;

          return (
            <div key={step.number} className="relative z-10 flex flex-col items-center">
              <div
                className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-orange-500 border-orange-500 text-white shadow-sm shadow-orange-500/25"
                    : isActive
                    ? "bg-white border-orange-500 text-orange-500 shadow-md shadow-orange-500/10 scale-110"
                    : "bg-white border-zinc-200 text-zinc-400"
                }`}
              >
                {isCompleted ? <Check size={16} strokeWidth={3} /> : step.number}
              </div>
              <span
                className={`mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 hidden sm:block ${
                  isActive ? "text-orange-500" : isCompleted ? "text-zinc-700" : "text-zinc-400"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
