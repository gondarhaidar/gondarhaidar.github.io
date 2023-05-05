//responsive navbar
let x = document.getElementsByClassName("container")[0];
let nav = document.getElementsByClassName("nav")[0];
let width = x.clientWidth;
nav.style.width = `${width}px`;
//end

//collpase
let collap = document.querySelectorAll('.collap');
let ket = document.querySelectorAll('.ket');
for(let i=0; i < collap.length; i++){
	collap[i].addEventListener('click', ()=>{
		ket[i].classList.toggle('hide');
	})
}
//emd
