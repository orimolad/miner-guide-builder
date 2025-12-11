import { Check } from "lucide-react";

interface CheckListProps {
  items: string[];
}

const CheckList = ({ items }: CheckListProps) => {
  return (
    <ul className="list-none my-5 space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4 p-4 bg-card/30 rounded-xl"
        >
          <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-success-foreground" />
          </div>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
