import { ViteDevServer, Plugin } from "vite";

export function devPlugin(): Plugin {
  return {
    name: "dev-plugin",
    configureServer(server: ViteDevServer) {},
  };
}
