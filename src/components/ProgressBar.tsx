interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full h-1.5 bg-secondary rounded-full my-8 overflow-hidden">
      <div
        className="h-full gradient-primary rounded-full transition-all duration-500 glow-progress"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
