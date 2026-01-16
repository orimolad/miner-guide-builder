import { Check } from "lucide-react";
interface CheckListProps {
  items: string[];
}
const CheckList = ({
  items
}: CheckListProps) => {
  return <ul className="list-none my-5 space-y-3">
      {items.map((item, index) => {})}
    </ul>;
};
export default CheckList;