import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "~/providers/trpc/utils/trpc";

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
