"use client";


import { Button } from "@/components/ui/button";

import { useAuthActions } from "@convex-dev/auth/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function SignInPage() {
  const [step, setStep] = useState<"signIn" | "linkSent">("signIn");

  return (
    <div >
      
            <SignInWithGoogle />
            
    </div>
  );
}

function SignInWithGoogle() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      onClick={() => void signIn("google", { redirectTo: "/" })}
    >
      <GitHubLogoIcon className="mr-2 h-4 w-4" /> Google
    </Button>
  );
}


