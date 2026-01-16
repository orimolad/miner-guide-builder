import { Check } from "lucide-react";
interface CheckListProps {
  items: string[];
}
const CheckList = ({
  items
}: CheckListProps) => {
  return (
    <ul className="list-none my-5 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
};
export default CheckList;