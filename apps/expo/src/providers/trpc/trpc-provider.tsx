import React from "react";
import { queryClient } from "@/providers/trpc/utils/trpc";
import { QueryClientProvider } from "@tanstack/react-query";

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
