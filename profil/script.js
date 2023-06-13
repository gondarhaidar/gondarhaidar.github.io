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

let elements = document.querySelectorAll('.hide');
let skil = document.querySelector('.skils');
window.addEventListener('scroll', () => {
    if(skil.getBoundingClientRect().top < window.innerHeight - 100){
      skil.classList.add('satu');
    }else{
      skil.classList.remove('satu');
    }
  elements.forEach(e => {
    if (e.getBoundingClientRect().top < window.innerHeight - 180) {
      e.classList.add('muncul');
    }else{
    	e.classList.remove('muncul');
    }
  });
});
