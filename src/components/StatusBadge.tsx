import type { AgentStatus } from "@/services/agentSimulator";
import { Loader2 } from "lucide-react";

interface Props {
  status: AgentStatus;
  className?: string;
}

const styles: Record<AgentStatus, string> = {
  pending: "bg-muted text-muted-foreground border-border",
  running: "bg-status-running/15 text-status-running border-status-running/30",
  success: "bg-status-success/15 text-status-success border-status-success/30",
  failure: "bg-status-failure/15 text-status-failure border-status-failure/30",
};

const dotStyles: Record<AgentStatus, string> = {
  pending: "bg-muted-foreground",
  running: "bg-status-running",
  success: "bg-status-success",
  failure: "bg-status-failure",
};

export function StatusBadge({ status, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border font-medium transition-colors ${styles[status]} ${className}`}
    >
      {status === "running" ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <span
          className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]} ${status === "pending" ? "animate-pulse" : ""}`}
        />
      )}
      {status}
    </span>
  );
}
