function verificar(respuesta) {

    var resultado = document.getElementById("resultado");

    if (respuesta === "Jupiter") {

        resultado.innerHTML =
        "✅ Correcto: Júpiter es el planeta más grande.";

        resultado.style.color = "lightgreen";

    } else {

        resultado.innerHTML =
        "❌ Incorrecto. Intenta otra vez.";

        resultado.style.color = "red";
    }
}