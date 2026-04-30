import { useEffect, useRef } from "react";
import type { AgentStatus } from "@/services/agentSimulator";
import { Loader2 } from "lucide-react";

interface Props {
  logs: string[];
  status: AgentStatus;
}

function logColor(line: string): string {
  if (line.includes("✓") || /passed|success|complete/i.test(line))
    return "text-status-success";
  if (line.includes("✗") || /fail|error/i.test(line)) return "text-status-failure";
  if (/warn|outdated|advisor/i.test(line)) return "text-amber-400";
  return "text-zinc-300";
}

export function LogStream({ logs, status }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [logs]);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-terminal text-terminal-foreground">
      {/* terminal title bar */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-black/30">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-[11px] font-mono text-zinc-500">
          agent — bash
        </span>
      </div>

      <div
        ref={ref}
        className="flex-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed"
      >
        {logs.length === 0 ? (
          <div className="flex items-center gap-2 text-zinc-500">
            <Loader2 className="h-3 w-3 animate-spin" />
            <span>Initializing agent…</span>
          </div>
        ) : (
          <>
            {logs.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap animate-in fade-in slide-in-from-left-1 duration-200 ${logColor(line)}`}
              >
                <span className="text-zinc-600 mr-1">$</span>
                {line}
              </div>
            ))}
            {status === "running" && (
              <div className="flex items-center gap-2 mt-1 text-status-running">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span className="animate-pulse">streaming…</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
