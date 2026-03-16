/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  // add more strongly-typed env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

