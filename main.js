function showPeriode(id) {
  const section = document.getElementById("kegiatan");

  section.querySelectorAll(".periode").forEach(el => {
    el.classList.remove("aktif");
  });

  section.querySelector("#" + id).classList.add("aktif");
}

function showStruktur() {
  const selected = document.getElementById("pilihStruktur").value;

  document.querySelectorAll(".struktur-periode").forEach(el => {
    el.classList.remove("aktif");
  });

  if (selected) {
    document.getElementById(selected).classList.add("aktif");
  }
}
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
  let index = 0;

  function nextSlide() {
    const total = document.querySelectorAll(".profil-card").length;
  
    if (index < total - 1) {
      index++;
    }
  
    console.log("NEXT:", index);
    updateSlide();
  }
  
  function prevSlide() {
    if (index > 0) {
      index--;
    }
  
    console.log("PREV:", index);
    updateSlide();
  }
  
  function updateSlide() {
    const slider = document.querySelector(".profil-grid");
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
 
function hideArrowsOnDesktop() {
const arrows = document.querySelectorAll('.arrow');
if (window.innerWidth > 768) {
    arrows.forEach(arrow => {
        arrow.style.display = 'none';
    });
} else {
    arrows.forEach(arrow => {
        arrow.style.display = 'flex'; 
    });
}
}

hideArrowsOnDesktop();

window.addEventListener('resize', hideArrowsOnDesktop);
