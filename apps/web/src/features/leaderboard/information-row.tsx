import type { InformationRow as InformationRowType } from "@providers/trpc/types";

export function InformationRow({ row }: { row: InformationRowType }) {
  return (
    <div className="flex items-center justify-center bg-border p-4">
      <div className="text-sm font-semibold tracking-tight">
        {row.displayText}
      </div>
    </div>
  );
}
