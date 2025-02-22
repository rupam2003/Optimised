import { ReactNode } from "react";

export const Code = ({ children }: { children: ReactNode }) => {
  return (
    <pre>

    <code className="relative rounded  px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
    </pre>
  );
};
