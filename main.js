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