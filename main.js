$(window).scroll(function () {
    $(".about-us ").each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $(window).height()) {
            $(this).addClass("show");
        }
    });
});

function enviarWhatsapp() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const mensaje = `Hola, quiero agendar una cita para el día ${fecha} a las ${hora}. Mi nombre es ${nombre}.`;

    const url = `https://api.whatsapp.com/send?phone=5522998883449&text=${encodeURIComponent(
        mensaje
    )}`;

    window.location.href = url;
}

function verificarCampos() {
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (nombre && fecha && hora) {
        enviarWhatsapp();
    } else {
        alert("Por favor, completa todos los campos antes de agendar la cita.");
    }
}

document.getElementById("ver-rutas-btn").addEventListener("click", function () {
    window.open(
        "https://www.google.com/maps?q=rua+da+esperanca+n207+estrada+do+palmital+casimiro+de+abreu+rj+28860-000+brasil",
        "_blank"
    );
});

function mostrarHorario() {
    var hoy = new Date();
    var dia = hoy.getDay();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();
    var abierto = false;
    var texto = "Fechado";

   if (dia === 0 && hora < 7) {
    texto = "Abre hoje às 7:00";
} else if (dia === 6) {
    texto = "Fechado";
} else if (dia === 5 && hora >= 17) {
    if (abreSabado) {
        texto = "Abre amanhã às 7:00";
    } else {
        texto = "Fechado";
    }
} else if (hora >= 7 && (hora < 11 || (hora === 11 && minutos < 1))) {
    texto = "Aberto até às 11:00";
    abierto = true;
} else if (hora >= 13 && (hora < 17 || (hora === 17 && minutos <= 45))) {
    texto = "Aberto até às 17:45";
    abierto = true;
} else if (dia === 1 && hora < 13) {
    texto = "Abre hoje às 13:00";
} else if (dia === 2 && hora < 13) {
    texto = "Abre hoje às 13:00";
} else if (dia === 3 && hora < 13) {
    texto = "Abre hoje às 13:00";
} else if (dia === 4 && hora < 13) {
    texto = "Abre hoje às 13:00";
} else if (dia === 5 && hora < 7) {
    texto = "Abre hoje às 7:00";
} else if (dia === 6 && abreSabado) {
    texto = "Abre hoje às 7:00";
}


    document.getElementById("horario").innerHTML = texto;

    if (abierto) {
        setTimeout(mostrarHorario, 1000); // actualiza cada segundo si está abierto
    } else {
        setTimeout(mostrarHorario, 60000); // actualiza cada minuto si está cerrado
    }
}

