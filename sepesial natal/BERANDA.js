//document.addEventListener('DOMContentLoaded', function() {
  //  const gambarAnimenya = document.querySelectorAll('.anime-item');
    //gambarAnimenya.forEach(item => {
      //  item.addEventListener('click', function() {
        //    const lokasiVideonya = this.getAttribute('data-video');
          //  window.location.href =lokasiVideonya;
       // })
   // })
//})
const tombol = document.getElementById('tombol');

tombol.addEventListener('click', function() {
    tombol.classList.add('blur');
    setTimeout(function() {
        tombol.classList.remove('blur');
    }, 500);
});
document.addEventListener('DOMContentLoaded', function() {
    const gambarAnimenya = document.querySelectorAll('.anime-item');
    gambarAnimenya.forEach(item => {
        item.addEventListener('click', function() {
          const lokasiVideonya = this.getAttribute('data-video');
          window.location.href =lokasiVideonya
        })
    })
})