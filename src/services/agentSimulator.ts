export type AgentStatus = "pending" | "running" | "success" | "failure";

export interface AgentResult {
  duration: string;
  filesModified: number;
  testsExecuted: number;
  coverageChange: string;
}

export interface AgentEvent {
  type: "log" | "status" | "complete";
  log?: string;
  status?: AgentStatus;
  result?: AgentResult;
}

export type AgentListener = (event: AgentEvent) => void;

const taskScripts: Record<string, string[]> = {
  "Create Pull Request": [
    "Agent started",
    "Analyzing branch diff",
    "Generating PR description",
    "Pushing branch to origin",
    "Opening pull request",
    "PR #482 created successfully",
  ],
  "Refactor Code": [
    "Agent started",
    "Loading project context",
    "Identifying refactor candidates",
    "Applying transformations",
    "Re-running type checks",
    "Refactor complete",
  ],
  "Upgrade Dependencies": [
    "Agent started",
    "Scanning dependencies",
    "Found outdated packages",
    "Resolving version conflicts",
    "Updating dependencies",
    "Running tests",
    "Tests passed",
  ],
  "Run Tests": [
    "Agent started",
    "Discovering test suites",
    "Running unit tests",
    "Running integration tests",
    "Collecting coverage",
    "All tests passed",
  ],
  "Security Scan": [
    "Agent started",
    "Fetching CVE database",
    "Scanning dependencies",
    "Checking secrets in source",
    "Generating security report",
    "Scan complete: 2 advisories",
  ],
  "Dependency Analysis": [
    "Agent started",
    "Building dependency graph",
    "Detecting circular imports",
    "Analyzing bundle impact",
    "Report ready",
  ],
};

function timestamp(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
}

export interface SimulatorHandle {
  cancel: () => void;
  subscribe: (listener: AgentListener) => () => void;
}

/**
 * Run an agent task and return a handle that supports observable subscriptions.
 * - Emits one log per ~1s
 * - Status: pending → running → success | failure
 * - 10% random failure rate
 */
export function runAgent(task: string): SimulatorHandle {
  const lines = taskScripts[task] ?? ["Agent started", "Working", "Done"];
  const listeners = new Set<AgentListener>();
  let cancelled = false;
  let idx = 0;

  const emit = (event: AgentEvent) => {
    listeners.forEach((l) => l(event));
  };

  // Start as pending, transition to running shortly after
  setTimeout(() => {
    if (cancelled) return;
    emit({ type: "status", status: "running" });
    tick();
  }, 600);

  const tick = () => {
    if (cancelled) return;
    if (idx < lines.length) {
      emit({ type: "log", log: `[${timestamp()}] ${lines[idx]}` });
      idx++;
      setTimeout(tick, 1000);
    } else {
      // 10% failure rate
      const success = Math.random() > 0.1;
      const finalStatus: AgentStatus = success ? "success" : "failure";
      emit({
        type: "log",
        log: `[${timestamp()}] ${success ? "✓ Task completed successfully" : "✗ Task failed unexpectedly"}`,
      });
      const result: AgentResult = {
        duration: `${lines.length}.0s`,
        filesModified: Math.floor(Math.random() * 12) + 1,
        testsExecuted: Math.floor(Math.random() * 200) + 20,
        coverageChange: success
          ? `+${(Math.random() * 3).toFixed(1)}%`
          : `-${(Math.random() * 2).toFixed(1)}%`,
      };
      emit({ type: "status", status: finalStatus });
      emit({ type: "complete", status: finalStatus, result });
    }
  };

  return {
    cancel: () => {
      cancelled = true;
      listeners.clear();
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
