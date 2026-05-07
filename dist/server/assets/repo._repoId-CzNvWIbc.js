import { jsx } from "react/jsx-runtime";
import { H as Home } from "./Home-BEQ99DbJ.js";
import { R as Route } from "./router-CzM2nGO4.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@tanstack/react-router";
import "@radix-ui/react-select";
function RepoPage() {
  const {
    repoId
  } = Route.useParams();
  return /* @__PURE__ */ jsx(Home, { repoId });
}
export {
  RepoPage as component
};
