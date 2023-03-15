$(window).scroll(function() {
  $('.about-us ').each(function() {
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

  const url = `https://api.whatsapp.com/send?phone=5522998883449&text=${encodeURIComponent(mensaje)}`;

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




document.getElementById("ver-rutas-btn").addEventListener("click", function() {
  window.open("https://cdn.worldvectorlogo.com/logos/logo-google-maps.svg", "_blank");
});





