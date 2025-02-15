import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEditorWillMount = (monaco:any) => {
    
  monaco.editor.defineTheme('custom-theme', {
      base: 'vs-dark', // Base theme (choose 'vs', 'vs-dark', or 'hc-black')
      inherit: true, // Inherit default settings from the base theme
      rules: [], // Additional style rules
      colors: {
          
          'editor.background': '#0F0F0F', 
          'editor.foreground': '#ffffff', 
      },
  });
};

export const handleEditorDidMount = (editor:any, monaco:any) => {
// Apply the custom theme after the editor has mounted
monaco.editor.setTheme('custom-theme');
};