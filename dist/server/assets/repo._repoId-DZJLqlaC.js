import { W as jsxRuntimeExports } from "./worker-entry-YXVaySDz.js";
import { H as Home } from "./Home-C8gCmGKB.js";
import { R as Route } from "./router-CuSwdHdt.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function RepoPage() {
  const { repoId } = Route.useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Home, { repoId });
}
export { RepoPage as component };
