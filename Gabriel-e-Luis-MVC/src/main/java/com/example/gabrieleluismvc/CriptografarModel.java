package com.example.gabrieleluismvc;

public class CriptografarModel {
    public String cifraCesar (String texto){
        StringBuilder resultado = new StringBuilder();
        for (char c : texto.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isUpperCase(c) ? 'A' : 'a';
                char novo = (char) ((c - base + 3) % 26 + base);
                resultado.append(novo);
            }else {
                resultado.append(c);
            }
        }
        return resultado.toString();
    }
    public String criptografar(String texto){
        return cifraCesar(texto);
    }
}