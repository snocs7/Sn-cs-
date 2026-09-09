/* =========================
   Splash Screen
========================= */

window.addEventListener("load", function () {

  const splash =
    document.getElementById("splash-screen");


  setTimeout(function () {

    splash.style.opacity = "0";

    splash.style.visibility = "hidden";

  }, 400);

});
