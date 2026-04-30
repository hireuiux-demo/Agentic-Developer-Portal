import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/repo/$repoId")({
  component: RepoPage,
});

function RepoPage() {
  const { repoId } = Route.useParams();
  return <Home repoId={repoId} />;
}
