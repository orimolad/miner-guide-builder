import { ReactNode } from "react";
import { cn } from "@/lib/utils";
type InfoBoxVariant = "info" | "warning" | "success";
interface InfoBoxProps {
  variant?: InfoBoxVariant;
  children: ReactNode;
  className?: string;
}
const variantStyles: Record<InfoBoxVariant, string> = {
  info: "bg-accent/10 border-l-accent",
  warning: "bg-warning/10 border-l-warning",
  success: "bg-success/10 border-l-success"
};
const InfoBox = ({
  variant = "info",
  children,
  className
}: InfoBoxProps) => {
  return (
    <div className={cn("border-l-4 p-4 rounded-r-lg my-4", variantStyles[variant], className)}>
      {children}
    </div>
  );
};
export default InfoBox;