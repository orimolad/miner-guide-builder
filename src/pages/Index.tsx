import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MinerCard from "@/components/MinerCard";
import { miners } from "@/data/miners";

const Index = () => {
  const navigate = useNavigate();

  const handleMinerSelect = (minerId: string) => {
    navigate(`/setup/${minerId}`);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-pattern" />
      <div className="container">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 animate-fade-in-up">
          {miners.map((miner) => (
            <MinerCard
              key={miner.id}
              miner={miner}
              onClick={() => handleMinerSelect(miner.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
