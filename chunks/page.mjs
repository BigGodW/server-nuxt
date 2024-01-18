import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const page = defineEventHandler((event) => {
  return "post";
});

export { page as default };
//# sourceMappingURL=page.mjs.map
