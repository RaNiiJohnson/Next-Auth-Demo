"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const LoginButtun = () => {
  return (
    <Button
      onClick={async () => {
        await signIn();
      }}
    >
      Login
    </Button>
  );
};
