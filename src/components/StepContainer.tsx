import { ReactNode } from "react";

interface StepContainerProps {
  stepNumber: number | string;
  title: string;
  children: ReactNode;
}

const StepContainer = ({ stepNumber, title, children }: StepContainerProps) => {
  return (
    <div className="bg-card/30 border border-border rounded-2xl p-8 md:p-12 my-10 relative">
      <div className="absolute -top-5 left-8 md:left-10 w-12 h-12 gradient-primary rounded-full flex items-center justify-center font-display text-xl glow-primary-sm">
        {stepNumber}
      </div>
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-5 tracking-tight mt-2">
        {title}
      </h2>
      <div className="text-lg leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
};

export default StepContainer;
