import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // GitHub Pages = static hosting, so no server build needed
  console.log("skipping server build (GitHub Pages static deploy)");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
