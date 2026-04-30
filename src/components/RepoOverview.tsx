import type { Repo } from "@/data/mockRepos";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GitPullRequest, Package, AlertTriangle, ShieldCheck, Activity, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  repo: Repo;
  onRunAgent: () => void;
}

const healthChip: Record<Repo["health"], string> = {
  healthy: "bg-status-success/15 text-status-success border-status-success/30",
  warning: "bg-amber-400/15 text-amber-400 border-amber-400/30",
  critical: "bg-status-failure/15 text-status-failure border-status-failure/30",
};

function Stat({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  accent?: string;
}) {
  return (
    <Card className="p-4 transition-colors hover:bg-muted/30">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <Icon className={`h-4 w-4 ${accent ?? "text-muted-foreground"}`} />
      </div>
      <p className="mt-2 text-2xl font-semibold tabular-nums">{value}</p>
    </Card>
  );
}

export function RepoOverview({ repo, onRunAgent }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{repo.name}</h1>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${healthChip[repo.health]}`}
            >
              {repo.health}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {repo.language} last commit {repo.lastCommit}
          </p>
        </div>
        <Button size="lg" onClick={onRunAgent} className="gap-2">
          <Play className="h-4 w-4 fill-current" />
          Run Agent Task
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <Stat label="Open PRs" value={repo.openPRs} icon={GitPullRequest} />
        <Stat label="Dependencies" value={repo.dependencies} icon={Package} />
        <Stat
          label="Outdated"
          value={repo.outdated}
          icon={AlertTriangle}
          accent={repo.outdated > 10 ? "text-status-failure" : "text-amber-400"}
        />
        <Stat
          label="Coverage"
          value={`${repo.coverage}%`}
          icon={ShieldCheck}
          accent={repo.coverage >= 80 ? "text-status-success" : "text-amber-400"}
        />
        <Stat label="Health" value={repo.health} icon={Activity} />
      </div>
    </div>
  );
}
