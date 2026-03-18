module com.example.gabrieleluismvc {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.gabrieleluismvc to javafx.fxml;
    exports com.example.gabrieleluismvc;
}