{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  env = {};
  idx = {
    extensions = [
      "svelte.svelte-vscode"
      "vue.volar"
      "vymarkov.firebase-explorer"
    ];
    workspace = {
      onCreate = {
        npm-install = "npm install --no-audit --prefer-offline";
      };
      onStart = {};
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };

}