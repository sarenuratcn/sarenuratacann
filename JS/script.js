
  function hosgeldin() {
    const ad = document.getElementById("isim").value;
    const cikti = document.getElementById("mesaj");

    if (ad.trim() !== "") {
      cikti.innerText = `Hoş geldin ${ad}, ağlara birlikte dalıyoruz 💙✨`;
    } else {
      cikti.innerText = "Lütfen adını yaz canımınici 💬";
    }
  }
  
    function gosterTesekkur() {
      document.getElementById("tesekkurMesaji").style.display = "block";
    }
  
    
function cevapGoster() {
  const ad = document.getElementById("fad").value.trim();
  const yaziliCevap = document.getElementById("lanswer").value.trim().toLowerCase();
  const secili = document.querySelector('input[name="q"]:checked');
  const radioCevap = secili ? secili.value : "";

  // sorusonuc.html sayfasına yönlendir, verileri URL üzerinden gönder
  const url = `sorusonuc.html?ad=${encodeURIComponent(ad)}&yazili=${encodeURIComponent(yaziliCevap)}&radio=${encodeURIComponent(radioCevap)}`;
  window.location.href = url; // Aynı sekmede açılır
}
function geribildirimGonder() {
  const ad = document.getElementById("ad").value.trim();
  const yorum = document.getElementById("yorum").value.trim();

  const url = `geribildirimsonuc.html?ad=${encodeURIComponent(ad)}&yorum=${encodeURIComponent(yorum)}`;
  window.location.href = url;
}
const url = `pages/geribildirimsonuc.html?...`;


