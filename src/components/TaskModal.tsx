import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const AGENT_TASKS = [
  "Create Pull Request",
  "Refactor Code",
  "Upgrade Dependencies",
  "Run Tests",
  "Security Scan",
  "Dependency Analysis",
] as const;

export type AgentTask = (typeof AGENT_TASKS)[number];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRun: (task: AgentTask) => void;
}

export function TaskModal({ open, onOpenChange, onRun }: Props) {
  const [selected, setSelected] = useState<AgentTask>(AGENT_TASKS[0]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Run Agent Task</DialogTitle>
          <DialogDescription>
            Choose a task for the AI agent to perform on this repository.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-2">
          {AGENT_TASKS.map((task) => (
            <button
              key={task}
              onClick={() => setSelected(task)}
              className={`text-left rounded-lg border px-3 py-3 text-sm transition-colors ${
                selected === task
                  ? "border-primary bg-primary/10"
                  : "border-border hover:bg-muted/50"
              }`}
            >
              {task}
            </button>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onRun(selected)}>Run Agent</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
