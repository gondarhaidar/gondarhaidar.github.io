
/********* Waktu **********/
let date = document.querySelector('.waktu');
let waktu = document.querySelectorAll('.waktu span');
let kaping = document.querySelectorAll('.tanggal span');
let p = document.querySelectorAll('.waktu p')
let detik = () => new Date().getSeconds();
let menit = ()=> new Date().getMinutes();
let jam = ()=> new Date().getHours();
let hari = ()=> new Date().getDay();
let tanggal = ()=> new Date().getDate();
let bulan = ()=> new Date().getMonth();
let tahun = ()=> new Date().getFullYear();
let namahari = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
let namabulan = ["Januari, 'Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]


/******* Jam *********/
setInterval(()=>{
	if(detik() < 10){
		waktu[2].innerHTML = '0'+detik();
	}else{
		waktu[2].innerHTML = detik();
	}
	if(menit()<10){
		waktu[1].innerHTML = '0'+menit();
	}else{
		waktu[1].innerHTML = menit();
	}	
	waktu[0].innerHTML = jam();
	kaping[0].innerHTML = namahari[hari()-1] + ',';
	kaping[1].innerHTML = tanggal();
	kaping[2].innerHTML = namabulan[bulan()-1];
	kaping[3].innerHTML = tahun();
},1000)



/******* animasi waktu *******/
setTimeout(()=>{
	waktu.forEach(e=>{
		e.classList.remove('hide')
	})
	kaping.forEach(e=>{
		e.classList.remove('hide')
	})
	p.forEach(e=>{
		e.classList.remove('hide')
	})
}, 1500)

/**********************/
// let nama = document.querySelector('.nama');
// let deskripsi = ["Hello everyone", "My Name's Gondar Ahmad Haidar", "I am a web developer"];
// let i = 0;
// setInterval(()=>{
// 	i += 1;
// 	if(i > 3){
// 		i = 1;
// 	}
// 	nama.classList.add('animasinama')
// 	nama.innerHTML = deskripsi[i-1];
// }, 3500)

/****** peringatan *******/
document.querySelectorAll('nav ul li').forEach(e=>{
	e.onclick = ()=>{
		alert('Fitur ini sedang dalam perbaikan');
	}
})

/******* sidebar ********/
let tombol = document.querySelector('.tombol');
let sidebar = document.querySelector('.sidebar');
tombol.addEventListener('click', ()=>{
	sidebar.classList.toggle('flex');
})
