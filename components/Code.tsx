"use client"
import { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
interface Props{
  code:string,
  lang:string

}

export const Code = ({code, lang}:Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>

    <code className={`lang-${lang} bg-transparent relative rounded  px-[0.3rem] py-[0.2rem] font-mono text-sm"`}>
      {code}
    </code>
    </pre>
  );
};
