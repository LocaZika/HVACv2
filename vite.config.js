import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dns from "dns";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import { createRequire } from "node:module";

const projectDirRoot = path.resolve(__dirname);
dns.setDefaultResultOrder("verbatim");
const require = createRequire(import.meta.url);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "Components", replacement: path.resolve(projectDirRoot, "src/Components") },
      { find: "Pages", replacement: path.resolve(projectDirRoot, "src/Pages") },
      { find: "Services", replacement: path.resolve(projectDirRoot, "src/Services") },
      { find: "Routes", replacement: path.resolve(projectDirRoot, "src/Routes") },
      { find: "Middlewares", replacement: path.resolve(projectDirRoot, "src/Middlewares") },
      { find: "assets", replacement: path.resolve(projectDirRoot, "src/assets") },
      { find: "Layouts", replacement: path.resolve(projectDirRoot, "src/Layouts") },
      { find: "Errors", replacement: path.resolve(projectDirRoot, "src/Errors") },
    ],
  },
});
