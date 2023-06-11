let ul = document.querySelector('.navbar');
let nav = ()=>{
	ul.classList.add('open');
}
let svg = document.querySelector('.svg');
svg.onclick = ()=>{
	ul.classList.remove('open');
}

let elements = document.querySelectorAll('.hide');
window.addEventListener('scroll', () => {
  elements.forEach(e => {
    if (e.getBoundingClientRect().top < window.innerHeight - 180) {
      e.classList.add('muncul');
    }else{
    	e.classList.remove('muncul');
    }
  });
});
