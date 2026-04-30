import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { RepoOverview } from "@/components/RepoOverview";
import { AgentPanel } from "@/components/AgentPanel";
import { TaskModal, type AgentTask } from "@/components/TaskModal";
import type { Repo } from "@/data/mockRepos";
import { mockRepos } from "@/data/mockRepos";
import { Terminal } from "lucide-react";

interface HomeProps {
  repoId?: string;
}

export function Home({ repoId }: HomeProps) {
  const selected: Repo =
    mockRepos.find((r) => r.id === repoId) ?? mockRepos[0];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState<AgentTask | null>(null);
  const [runId, setRunId] = useState(0);

  const handleRun = (task: AgentTask) => {
    setActiveTask(task);
    setRunId((n) => n + 1);
    setModalOpen(false);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-foreground">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0 h-screen">
          <header className="h-12 flex items-center gap-2 border-b border-border px-3 shrink-0">
            <SidebarTrigger />
            <div className="h-4 w-px bg-border mx-1" />
            <span className="text-sm text-muted-foreground">Repositories</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-medium">{selected.name}</span>
          </header>

          {/* Main + bottom logs split */}
          <div className="flex-1 flex flex-col min-h-0">
            <main className="flex-1 overflow-y-auto p-6">
              <RepoOverview
                repo={selected}
                onRunAgent={() => setModalOpen(true)}
              />
            </main>

            <section
              className={`border-t border-border shrink-0 transition-all duration-300 ease-out ${
                activeTask ? "h-80" : "h-10"
              }`}
            >
              {activeTask ? (
                <AgentPanel
                  repo={selected}
                  task={activeTask}
                  runId={runId}
                  onClose={() => setActiveTask(null)}
                />
              ) : (
                <div className="h-full flex items-center px-4 text-xs text-muted-foreground gap-2">
                  <Terminal className="h-3.5 w-3.5" />
                  Agent execution panel — run a task to view streaming logs
                </div>
              )}
            </section>
          </div>
        </div>

        <TaskModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          onRun={handleRun}
        />
      </div>
    </SidebarProvider>
  );
}
