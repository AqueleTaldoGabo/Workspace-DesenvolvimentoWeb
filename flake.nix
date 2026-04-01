{ description = "Ambiente dev web - Carlos";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux"; 
      pkgs = import nixpkgs { inherit system; };
      
      node22 = pkgs.nodejs_22.overrideAttrs (old: rec {
        version = "22.17.0";
        src = pkgs.fetchurl {
          url = "https://nodejs.org/dist/v22.17.0/node-v22.17.0.tar.xz";
          sha256 = "7a3ef2aedb905ea7926e5209157266e2376a5db619d9ac0cba3c967f6f5db4f9";
        };
      });
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          node22
          docker
          docker-compose
          insomnia
          dbeaver-bin
        ];

        shellHook = ''
          echo "Ambiente carregado"
          node -v
          npm -v
        '';
      };
    };
}
