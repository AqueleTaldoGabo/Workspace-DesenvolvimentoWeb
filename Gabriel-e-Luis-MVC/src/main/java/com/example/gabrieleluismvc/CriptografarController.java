package com.example.gabrieleluismvc;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class CriptografarController {
    private CriptografarModel model = new CriptografarModel();

    @FXML
    private Button BTNcriptografar;

    @FXML
    private Label LBLcriptografado;

    @FXML
    private TextField TXTnome;

    @FXML
    void Criptografar(ActionEvent event) {
        String texto = TXTnome.getText();
        String resultado = model.criptografar(texto);
        LBLcriptografado.setText(resultado);
    }

}