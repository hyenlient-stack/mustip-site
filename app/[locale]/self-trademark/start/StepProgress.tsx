"use client";

import clsx from "clsx";

interface StepProgressProps {
  currentStep: number; // 1-based
  totalSteps: number;
  stepLabels: string[];
}

export function StepProgress({ currentStep, totalSteps, stepLabels }: StepProgressProps) {
  return (
    <div className="mb-8">
      {/* Mobile: simple text */}
      <div className="flex items-center justify-between md:hidden">
        <span className="text-sm font-medium text-slate-900">
          {currentStep} / {totalSteps}
        </span>
        <span className="text-sm text-slate-500">
          {stepLabels[currentStep - 1]}
        </span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-slate-100 md:hidden">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      {/* Desktop: step circles */}
      <div className="hidden md:flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isDone = step < currentStep;
          return (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    isActive && "bg-blue-600 text-white",
                    isDone && "bg-blue-100 text-blue-700",
                    !isActive && !isDone && "bg-slate-100 text-slate-400"
                  )}
                >
                  {isDone ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                <span
                  className={clsx(
                    "text-[11px] whitespace-nowrap",
                    isActive ? "text-blue-600 font-semibold" : "text-slate-400"
                  )}
                >
                  {stepLabels[i]}
                </span>
              </div>
              {step < totalSteps && (
                <div
                  className={clsx(
                    "mx-1 h-px flex-1",
                    isDone ? "bg-blue-200" : "bg-slate-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
