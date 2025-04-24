"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrent } from "./features/auth/api/useCurrent";
import { useLogout } from "./features/auth/api/useLogout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  });

  return (
    <>
      <h1>Only visible to authorized users!!!</h1>
      <Button onClick={() => mutate()}>Logout</Button>
    </>
  );
}
