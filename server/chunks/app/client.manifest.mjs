const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-7200b45d.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/index.vue"
    ],
    "css": [
      "entry.749b763b.css"
    ],
    "assets": [
      "neko.3ebbdfd3.jpg"
    ]
  },
  "pages/index.vue": {
    "file": "index-13d89a26.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-e66c4a23.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
