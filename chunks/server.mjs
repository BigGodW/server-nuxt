globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const server = defineEventHandler((event) => {
  console.log("\u5F53\u524D\u4F4D\u7F6E:", globalThis._importMeta_.url);
  return "Hello server";
});

export { server as default };
//# sourceMappingURL=server.mjs.map
