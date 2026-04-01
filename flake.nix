{
  description = "Ambiente dev web - Carlos";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; # estável
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux"; 
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22  
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
