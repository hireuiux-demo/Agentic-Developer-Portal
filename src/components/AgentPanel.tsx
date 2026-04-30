import { useEffect, useRef, useState } from "react";
import type { Repo } from "@/data/mockRepos";
import {
  runAgent,
  type AgentEvent,
  type AgentResult,
  type AgentStatus,
  type SimulatorHandle,
} from "@/services/agentSimulator";
import type { AgentTask } from "./TaskModal";
import { LogStream } from "./LogStream";
import { StatusBadge } from "./StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { RotateCw, FileSearch, Terminal, X } from "lucide-react";

interface Props {
  repo: Repo;
  task: AgentTask;
  runId: number;
  onClose: () => void;
}

export function AgentPanel({ repo, task, runId: initialRunId, onClose }: Props) {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<AgentStatus>("pending");
  const [result, setResult] = useState<AgentResult | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [runId, setRunId] = useState(initialRunId);
  const handleRef = useRef<SimulatorHandle | null>(null);

  useEffect(() => {
    setLogs([]);
    setResult(null);
    setStatus("pending");

    const handle = runAgent(task);
    handleRef.current = handle;

    const unsub = handle.subscribe((event: AgentEvent) => {
      if (event.type === "log" && event.log) {
        setLogs((prev) => [...prev, event.log!]);
      } else if (event.type === "status" && event.status) {
        setStatus(event.status);
      } else if (event.type === "complete" && event.result) {
        setResult(event.result);
      }
    });

    return () => {
      unsub();
      handle.cancel();
    };
  }, [task, runId, repo.id]);

  const retry = () => setRunId((n) => n + 1);
  const isRunning = status === "running" || status === "pending";

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal className="h-4 w-4 text-muted-foreground shrink-0" />
          <span className="text-sm font-medium truncate">{task}</span>
          <span className="text-xs text-muted-foreground truncate">
            on {repo.name}
          </span>
          <StatusBadge status={status} />
        </div>
        <div className="flex items-center gap-1">
          {!isRunning && (
            <>
              <Button variant="ghost" size="sm" onClick={retry}>
                <RotateCw className="h-3.5 w-3.5 mr-1" />
                Retry
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDetailsOpen(true)}
                disabled={!result}
              >
                <FileSearch className="h-3.5 w-3.5 mr-1" />
                Details
              </Button>
            </>
          )}
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      <LogStream logs={logs} status={status} />

      <Sheet open={detailsOpen} onOpenChange={setDetailsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Run Details</SheetTitle>
            <SheetDescription>
              {task} on {repo.name}
            </SheetDescription>
          </SheetHeader>
          {result && (
            <div className="mt-6 space-y-3 text-sm px-1">
              <Detail label="Duration" value={result.duration} />
              <Detail label="Files modified" value={result.filesModified} />
              <Detail label="Tests executed" value={result.testsExecuted} />
              <Detail label="Coverage change" value={result.coverageChange} />
              <Detail label="Final status" value={status} />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
