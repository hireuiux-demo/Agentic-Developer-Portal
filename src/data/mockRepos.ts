export type HealthStatus = "healthy" | "warning" | "critical";

export interface Repo {
  id: string;
  name: string;
  language: string;
  lastCommit: string;
  health: HealthStatus;
  openPRs: number;
  dependencies: number;
  outdated: number;
  coverage: number;
}

export const mockRepos: Repo[] = [
  {
    id: "1",
    name: "frontend-web",
    language: "TypeScript",
    lastCommit: "2h ago",
    health: "healthy",
    openPRs: 3,
    dependencies: 142,
    outdated: 6,
    coverage: 87,
  },
  {
    id: "2",
    name: "api-gateway",
    language: "Go",
    lastCommit: "1d ago",
    health: "warning",
    openPRs: 7,
    dependencies: 54,
    outdated: 12,
    coverage: 72,
  },
  {
    id: "3",
    name: "ml-pipeline",
    language: "Python",
    lastCommit: "5h ago",
    health: "critical",
    openPRs: 11,
    dependencies: 203,
    outdated: 34,
    coverage: 48,
  },
  {
    id: "4",
    name: "auth-service",
    language: "TypeScript",
    lastCommit: "30m ago",
    health: "healthy",
    openPRs: 1,
    dependencies: 78,
    outdated: 2,
    coverage: 94,
  },
  {
    id: "5",
    name: "billing-core",
    language: "Java",
    lastCommit: "3d ago",
    health: "warning",
    openPRs: 4,
    dependencies: 96,
    outdated: 9,
    coverage: 81,
  },
  {
    id: "6",
    name: "mobile-app",
    language: "TypeScript",
    lastCommit: "6h ago",
    health: "healthy",
    openPRs: 2,
    dependencies: 167,
    outdated: 4,
    coverage: 76,
  },
  {
    id: "7",
    name: "data-warehouse",
    language: "Python",
    lastCommit: "12h ago",
    health: "warning",
    openPRs: 5,
    dependencies: 88,
    outdated: 15,
    coverage: 65,
  },
];
