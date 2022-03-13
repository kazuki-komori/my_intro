import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/_nuxt/default-e66c4a23.mjs": {
    "type": "application/javascript",
    "etag": "\"350-I8UHZ2HExRaBSt81HPuz32aevek\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/default-e66c4a23.mjs"
  },
  "/_nuxt/entry-7200b45d.mjs": {
    "type": "application/javascript",
    "etag": "\"1d29b-G0hFH0uyk59uSw5p5HXi9+kzmMw\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/entry-7200b45d.mjs"
  },
  "/_nuxt/entry.749b763b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15e6-oYWnZbaeZyJzWKLn1FCXNOGK05c\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/entry.749b763b.css"
  },
  "/_nuxt/index-13d89a26.mjs": {
    "type": "application/javascript",
    "etag": "\"1d2-mCGJFC9sA0YAc8R91+pEKAj67B8\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/index-13d89a26.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"2d6-72jhJdgR+Luu2TBSmcVqhcudhgk\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/neko.3ebbdfd3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2717-Zf7DwE/Z98rX1Fh7wcCURQdaowA\"",
    "mtime": "2022-03-13T09:03:25.631Z",
    "path": "../public/_nuxt/neko.3ebbdfd3.jpg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/home/runner/work/my_intro/my_intro/dist" + "/" + "1647162201";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
