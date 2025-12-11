import { Miner } from "@/data/miners";

interface MinerCardProps {
  miner: Miner;
  onClick: () => void;
}

const MinerCard = ({ miner, onClick }: MinerCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-card/30 border border-border rounded-2xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_60px_rgba(247,147,26,0.2)]"
    >
      <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-full h-48 bg-secondary/50 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
          <img 
            src={miner.image} 
            alt={miner.name}
            className="w-full h-full object-contain p-4"
          />
        </div>
        
        <h3 className="font-display text-xl text-primary mb-3">{miner.name}</h3>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-primary/20 px-3 py-1.5 rounded-full text-sm font-medium border border-primary/30">
            {miner.hashrate}
          </span>
          <span className="bg-primary/20 px-3 py-1.5 rounded-full text-sm font-medium border border-primary/30">
            {miner.power}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MinerCard;
