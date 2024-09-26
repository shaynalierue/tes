// ================================= FLOATING IMAGE LANDING PAGE =================================

// Ambil elemen gambar
const image = document.querySelector(".floating-image");

// Variabel untuk mengatur arah dan kecepatan
let direction = 1; // 1 untuk naik, -1 untuk turun
let speed = 0.1; // Kecepatan gerak

function floatImage() {
  // Ambil posisi gambar saat ini
  const currentTop = parseFloat(window.getComputedStyle(image).top);

  // Jika mencapai batas atas atau bawah, ubah arah
  if (currentTop <= -10 || currentTop >= 10) {
    direction *= -1;
  }

  // Perbarui posisi gambar dengan menambah/mengurangi posisi
  image.style.top = currentTop + speed * direction + "px";

  // Panggil animasi berikutnya
  requestAnimationFrame(floatImage);
}

// Mulai animasi
floatImage();
