document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("telefonoForm").addEventListener("submit", function(event) {
        var marca = document.getElementById("marca").value;
        var modelo = document.getElementById("modelo").value;
        var procesador = document.getElementById("procesador").value;
        var ram = document.getElementById("ram").value;
        var almacenamiento = document.getElementById("almacenamiento").value;
        var tarjeta_sd = document.getElementById("tarjeta_sd").value;
        var tamaño_pantalla = document.getElementById("tamaño_pantalla").value;

        if (marca === "" || modelo === "" || procesador === "" || ram === "" || almacenamiento === "" || tarjeta_sd === "" || tamaño_pantalla === "") {
            alert("Por favor, complete todos los campos antes de enviar el formulario.");
            event.preventDefault();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var sumaProcesador = 0;
    var sumaRAM = 0;
    var sumaTamañoPantalla = 0;
    var almacenamientoInterno = 0;

    document.getElementById("procesador").addEventListener("change", function() {
        var procesadorSeleccionado = document.getElementById("procesador").value;

        switch (procesadorSeleccionado) {
            case "Apple A15 Bionic":
                sumaProcesador = 14;
                break;
            case "Qualcomm Snapdragon 8 Series (por ejemplo, Snapdragon 888)":
                sumaProcesador = 13;
                break;
            case "Samsung Exynos 2200":
                sumaProcesador = 12;
                break;
            case "Qualcomm Snapdragon 7 Series (por ejemplo, Snapdragon 780G)":
                sumaProcesador = 11;
                break;
            case "MediaTek Dimensity 1000 Series (por ejemplo, Dimensity 1000+)":
                sumaProcesador = 10;
                break;
            case "Qualcomm Snapdragon 6 Series (por ejemplo, Snapdragon 678)":
                sumaProcesador = 9;
                break;
            case "Huawei Kirin 9000":
                sumaProcesador = 8;
                break;
            case "MediaTek Dimensity 800 Series (por ejemplo, Dimensity 820)":
                sumaProcesador = 7;
                break;
            case "Apple A14 Bionic":
                sumaProcesador = 6;
                break;
            case "Samsung Exynos 2100":
                sumaProcesador = 5;
                break;
            case "Qualcomm Snapdragon 5 Series (no mencionado anteriormente, como Snapdragon 750G)":
                sumaProcesador = 4;
                break;
            case "Huawei Kirin 990":
                sumaProcesador = 3;
                break;
            case "Qualcomm Snapdragon 4 Series (por ejemplo, Snapdragon 480)":
                sumaProcesador = 2;
                break;
            case "Qualcomm Snapdragon 2 Series (por ejemplo, Snapdragon 215)":
                sumaProcesador = 1;
                break;
            default:
                sumaProcesador = 0;
        }

        console.log("Suma del procesador seleccionado: " + sumaProcesador);
    });
    document.getElementById("ram").addEventListener("change", function() {
        var ramSeleccionada = document.getElementById("ram").value;

        switch (ramSeleccionada) {
            case "2GB de RAM":
                sumaRAM = 1;
                break;
            case "3GB de RAM":
                sumaRAM = 2;
                break;
            // Otros casos...
            default:
                sumaRAM = 0;
        }

        console.log("Suma de la RAM seleccionada: " + sumaRAM);
    });
    document.getElementById("tamaño_pantalla").addEventListener("change", function() {
        var tamañoPantallaSeleccionado = document.getElementById("tamaño_pantalla").value;

        switch (tamañoPantallaSeleccionado) {
            case "4.7 pulgadas - 5.1 pulgadas":
                sumaTamañoPantalla = 1;
                break;
            case "5.5 pulgadas - 6.1 pulgadas":
                sumaTamañoPantalla = 2;
                break;
            case "6.1 pulgadas - 6.5 pulgadas":
                    sumaTamañoPantalla = 3;
                    break;
            case "6.5 pulgadas o mas":
                sumaTamañoPantalla = 4;
                break;
            default:
                sumaTamañoPantalla = 0;
        }

        console.log("Suma del tamaño de pantalla seleccionado: " + sumaTamañoPantalla);
    });
/*agregar memoria interna */
    document.getElementById("almacenamiento").addEventListener("change", function() {
        almacenamientoInterno = parseInt(document.getElementById("almacenamiento").value) || 0;
        console.log("Almacenamiento interno ingresado: " + almacenamientoInterno);
    });
    /*suma de los totales */
    var sumaTotal = sumaProcesador + sumaRAM + sumaTamañoPantalla + almacenamientoInterno;
    console.log("Suma total: " + sumaTotal);


});