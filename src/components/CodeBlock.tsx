import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <div className="bg-background/80 border border-border rounded-xl p-5 my-5 font-mono text-primary overflow-x-auto">
      {children}
    </div>
  );
};

export default CodeBlock;
