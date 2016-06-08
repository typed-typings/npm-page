SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "typescript": "npm:typescript@1.8.10",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16"
    },
    "packages": {
      "npm:typescript@1.8.10": {
        "map": {}
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    tsconfig: true
  },
  meta: {
    "*.ts": {
      loader: "plugin-typescript"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "page": "npm:page@1.7.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "npm:page@1.7.1": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@1.2.1"
      }
    },
    "npm:path-to-regexp@1.2.1": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    }
  }
});
