let ul = document.querySelector('.navbar');
let nav = ()=>{
	ul.classList.add('open');
}

let svg = document.querySelector('.svg');
svg.onclick = ()=>{
	ul.classList.remove('open');
}

let li = document.querySelectorAll('.skils ul li');
li.forEach(el=>{
  el.classList.add('hide');
})
let profil = document.querySelector('.profil');
let elements = document.querySelectorAll('.hide');
let skil = document.querySelector('.skils');
window.addEventListener('scroll', () => {



/*********************************************************/
    if(skil.getBoundingClientRect().top < window.innerHeight - 100){
      skil.classList.add('satu');
    }else{
      skil.classList.remove('satu');
    }





/*********************************************************/

  elements.forEach((e, i) => {
    if (e.getBoundingClientRect().top < window.innerHeight - 180) {
      e.classList.add('muncul');
    }else{
    	e.classList.remove('muncul');
    }
  });




/*********************************************************/
  let bar = document.querySelectorAll('.bar');
  bar.forEach((e, i)=>{
    if(e.getBoundingClientRect().top < window.innerHeight - 150 && e.getBoundingClientRect().bottom > 150){
      document.querySelectorAll('.menu li')[i].classList.add('aktif');
      document.querySelectorAll('.navbar li')[i].classList.add('aktif');
    }else{
      document.querySelectorAll('.menu li')[i].classList.remove('aktif');
      document.querySelectorAll('.navbar li')[i].classList.remove('aktif');
    }
  });


});


// let klikBar = document.querySelectorAll('.menu li');
// let klikNav = document.querySelectorAll('.navbar li');
// let target = document.querySelectorAll('.bar');
// klikBar.forEach((e, i) => {
//     e.addEventListener('click', ()=>{
//       target[i].getBoundingClientRect().top = 100;
//       console.log('oke')
//     });
// });