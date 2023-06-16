import { fileURLToPath, URL } from "node:url";
import express from "express";
import fs from "fs";
import renderPage from "./dist/server/main.mjs";

const dist = `./dist`;

const ssr = JSON.parse(
  fs.readFileSync(`${dist}/server/package.json`, "utf-8")
).ssr;
const manifest = JSON.parse(
  fs.readFileSync(`${dist}/client/ssr-manifest.json`, "utf-8")
);

const server = express();
// Serve every static asset route
for (const asset of ssr.assets || []) {
  server.use(
    "/" + asset,
    express.static(
      fileURLToPath(new URL("./dist/client", import.meta.url)) + "/" + asset
    )
  );
}

// Everything else is treated as a "rendering request"
server.get("*", async (request, response) => {
  const url =
    request.protocol + "://" + request.get("host") + request.originalUrl;

  const { html, status, statusText, headers } = await renderPage(url, {
    manifest,
    preload: true,
    // Anything passed here will be available in the main hook
    request,
    response,
    // initialState: { ... } // <- This would also be available
  });

  response.type("html");
  response.writeHead(status || 200, statusText || headers, headers);
  response.end(html);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`);
});
