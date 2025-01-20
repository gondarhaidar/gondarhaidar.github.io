let ul = document.querySelector(".navbar");
let nav = () => {
  ul.classList.add("open");
};

let svg = document.querySelector(".svg");
svg.onclick = () => {
  ul.classList.remove("open");
};

let li = document.querySelectorAll(".skils ul li");
li.forEach((el) => {
  el.classList.add("hide");
});
let profil = document.querySelector(".profil");
let elements = document.querySelectorAll(".hide");
let skil = document.querySelector(".skils");
window.addEventListener("scroll", () => {
  /*********************************************************/
  if (skil.getBoundingClientRect().top < window.innerHeight - 100) {
    skil.classList.add("satu");
  } else {
    skil.classList.remove("satu");
  }

  /*********************************************************/

  elements.forEach((e, i) => {
    if (e.getBoundingClientRect().top < window.innerHeight - 180) {
      e.classList.add("muncul");
    } else {
      e.classList.remove("muncul");
    }
  });

  /*********************************************************/
  let bar = document.querySelectorAll(".bar");
  bar.forEach((e, i) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 150 &&
      e.getBoundingClientRect().bottom > 150
    ) {
      document.querySelectorAll(".menu li")[i].classList.add("aktif");
      document.querySelectorAll(".navbar li")[i].classList.add("aktif");
    } else {
      document.querySelectorAll(".menu li")[i].classList.remove("aktif");
      document.querySelectorAll(".navbar li")[i].classList.remove("aktif");
    }
  });
});

const bodyProject = document.querySelector(".body-project");
function getProject() {
  bodyProject.innerHTML = '<div class="loading"></div>';
  fetch("https://api.gondarweb.my.id/project")
    .then((res) => {
      if (!res.ok) {
        bodyProject.innerHTML = "terjadi kesalahan";
        throw new Error("terjadi kesalahan");
      }
      return res.json();
    })
    .then((data) => {
      bodyProject.innerHTML = "";
      console.log(data);
      data.forEach((dt) => {
        bodyProject.innerHTML += `
          <div class="brd-project">
            <h2>${dt.nama}</h2>
            <hr />
            <div class="brd-img">
              <img src="https://api.gondarweb.my.id/img/${dt.img}" alt="" />
            </div>
            <hr />
            <div class="link">
              <a href=${dt.linkPreview} class="red">Preview</a>
              <a href=${dt.linkCode} class="red">View Code&lt;/&gt;</a>
              <a href="#" class="red">About</a>
            </div>
          </div>
    `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
getProject();
