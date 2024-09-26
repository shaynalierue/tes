// =========================       NAVBAR   =========================================

// HAMBURGER MENU NAVBAR
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Fungsi untuk menampilkan menu
const showMenu = () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
};

// Fungsi untuk menutup menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

// Event listener untuk tombol open menu
menuBtn.addEventListener("click", showMenu);

// Event listener untuk tombol close menu
closeBtn.addEventListener("click", closeNav);

// Mengatur tampilan tombol berdasarkan ukuran layar
const updateMenuDisplay = () => {
  const isTablet = window.matchMedia("(max-width: 1024px)").matches;
  if (isTablet) {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  } else {
    menu.style.display = "flex";
    closeBtn.style.display = "none";
    menuBtn.style.display = "none";
  }
};

// Memperbarui tampilan pada awal muat halaman
updateMenuDisplay();

// Memperbarui tampilan saat ukuran jendela berubah
window.addEventListener("resize", updateMenuDisplay);
