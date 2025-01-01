// Selektor
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const landingOverlay = document.getElementById("landingOverlay");
const closeLandingBtn = document.getElementById("closeLandingBtn");

// Event: Klik tombol tutup landing
closeLandingBtn.addEventListener("click", () => {
  landingOverlay.classList.add("hide");
});

// Event: Toggle Dark Mode
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// 4. Event: Tampilkan landing page overlay ketika user scroll sampai mentok ke bawah
window.addEventListener("scroll", () => {
  // Cek apakah user sudah mencapai bagian paling bawah dokumen
  const scrollPosition = window.innerHeight + window.pageYOffset;
  const pageHeight = document.body.offsetHeight;

  // Jika posisi scroll >= tinggi halaman, berarti mentok ke bawah
  if (scrollPosition >= pageHeight) {
    landingOverlay.classList.remove("hide");
  }
});

let hasShown = false;

window.addEventListener("scroll", () => {
  if (!hasShown) {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.body.offsetHeight;
    if (scrollPosition >= pageHeight) {
      landingOverlay.classList.remove("hide");
      hasShown = true;
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
    // Set body ke dark-mode begitu page selesai dimuat
    document.body.classList.add("dark-mode");
});
