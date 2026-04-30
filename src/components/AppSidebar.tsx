import { useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockRepos, type Repo } from "@/data/mockRepos";
import {
  Boxes,
  GitBranch,
  Search,
  FileCode2,
  FileJson,
  Coffee,
  Braces,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const languageIcon: Record<string, LucideIcon> = {
  TypeScript: FileCode2,
  JavaScript: FileJson,
  Python: Braces,
  Go: Code2,
  Java: Coffee,
};

const healthDot: Record<Repo["health"], string> = {
  healthy: "bg-status-success",
  warning: "bg-amber-400",
  critical: "bg-status-failure",
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [status, setStatus] = useState("all");

  const languages = useMemo(
    () => Array.from(new Set(mockRepos.map((r) => r.language))),
    []
  );

  const filtered = useMemo(() => {
    return mockRepos.filter((r) => {
      if (query && !r.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (language !== "all" && r.language !== language) return false;
      if (status !== "all" && r.health !== status) return false;
      return true;
    });
  }, [query, language, status]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="h-7 w-7 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0">
            <Boxes className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">DevPortal</p>
              <p className="text-[11px] text-muted-foreground leading-tight">
                AI-native workflows
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {!collapsed && (
          <div className="px-2 pt-2 space-y-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search repos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-8 pl-7 text-xs"
              />
            </div>
            <div className="flex gap-1.5">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="h-7 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All langs</SelectItem>
                  {languages.map((l) => (
                    <SelectItem key={l} value={l}>
                      {l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="h-7 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All status</SelectItem>
                  <SelectItem value="healthy">Healthy</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Repositories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filtered.map((repo) => {
                const url = `/repo/${repo.id}`;
                const isActive = currentPath === url;
                const LangIcon = languageIcon[repo.language] ?? GitBranch;
                return (
                  <SidebarMenuItem key={repo.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={repo.name}
                      className="h-auto py-2"
                    >
                      <Link to="/repo/$repoId" params={{ repoId: repo.id }}>
                        <LangIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        {!collapsed && (
                          <div className="flex flex-col min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate text-sm">{repo.name}</span>
                              <span
                                className={`h-1.5 w-1.5 rounded-full shrink-0 ${healthDot[repo.health]}`}
                              />
                            </div>
                            <span className="text-[10px] text-muted-foreground truncate">
                              {repo.language} {repo.lastCommit}
                            </span>
                          </div>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              {filtered.length === 0 && !collapsed && (
                <p className="px-3 py-4 text-xs text-muted-foreground text-center">
                  No repositories
                </p>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
