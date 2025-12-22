import bitcoinMerchLogo from "@/assets/logo/bitcoinmerch-logo.png";

const Header = () => {
  return (
    <header className="text-center py-12 px-5 relative overflow-hidden">
      <div className="w-48 mx-auto mb-5">
        <img 
          src={bitcoinMerchLogo} 
          alt="Bitcoin Merch Logo"
          className="w-full h-auto"
        />
      </div>
      <h1 className="font-display text-3xl md:text-5xl gradient-text mb-3 tracking-tight">
        Set up a Bitcoin Miner device
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Your step-by-step companion for getting your Bitcoin miner up and running
      </p>
    </header>
  );
};

export default Header;
