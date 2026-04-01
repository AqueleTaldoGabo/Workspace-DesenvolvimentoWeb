{
  description = "Ambiente de desenvolvimento Web - Carlos";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22

    

          pkgs.docker
          pkgs.docker-compose

          pkgs.insomnia
          pkgs.dbeaver-bin
        ];

        shellHook = ''
          echo "Ambiente de Desenvolvimento Web carregado!"
          echo "Node: $(node -v)"
          echo "NPM: $(npm -v)"
        '';
      };
    };
}
