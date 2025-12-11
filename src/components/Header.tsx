const Header = () => {
  return (
    <header className="text-center py-12 px-5 relative overflow-hidden">
      <div className="w-20 h-20 mx-auto mb-5 gradient-primary rounded-2xl flex items-center justify-center text-4xl animate-float glow-primary">
        ₿
      </div>
      <h1 className="font-display text-3xl md:text-5xl gradient-text mb-3 tracking-tight">
        Bitcoin Miner Setup Guide
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Your step-by-step companion for getting your Bitcoin miner up and running
      </p>
    </header>
  );
};

export default Header;
