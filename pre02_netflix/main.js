"use strict";

//User info
const get_user =() =>{
  //JSON.parse(localStorage.getItem("user"));
  const access_token=localStorage.getItem("access_token");
  const user_id=localStorage.getItem("user_id");
  const profile=localStorage.getItem("profile");
  const user_name=localStorage.getItem("user_name");
  const bio=localStorage.getItem("bio");

  document.querySelector(".profile_pic img").src=profile;
  document.querySelector("#name").innerText=user_name;
  document.querySelector("#state").innerText=bio;
}

//Page move
let id = 1;
let url = `http://3.37.140.20:5000/api/v1/movie/` + id;
const befButton = document.querySelector("#left");
const nextButton = document.querySelector("#right");
befButton.style.cursor="pointer";
nextButton.style.cursor="pointer";

befButton.addEventListener("click", function () {
  before();
  draw();
});
nextButton.addEventListener("click", function () {
  next();
  draw();
});
const before = () => {
  if (id > 1) {
    id -= 1;
  } else {
    id = 4;
  }
  url = `http://3.37.140.20:5000/api/v1/movie/` + id;
};
const next = () => {
  if (id < 4) {
    id += 1;
  } else {
    id = 1;
  }
  url = `http://3.37.140.20:5000/api/v1/movie/` + id;
}; //page move

//Window draw
const draw = () => {
  //GET movie API
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(`${data.status}, movie id: ${id}`);

      //오류처리
      if(data.status_code===400){
        let message=data.message;
        alert(message);
        return;
      }
      
      //title, year, season, quality, des, play, bg 초기화
      const title = document.querySelector(".title");
      const year = document.querySelector("#year");
      const season = document.querySelector("#season");
      const quality = document.querySelector("#view");
      const des = document.querySelector(".movie_des");
      const play = document.querySelector("#current");
      const bg_img = document.getElementById("mainpg_background");

      id = data.data.id;
      title.innerText = data.data.title;
      year.innerText = data.data.year;
      season.innerText = data.data.season + " Season";
      quality.innerText = data.data.quality;
      des.innerText = data.data.description;
      play.innerText = "Play " + data.data.current_see;
      bg_img.src = data.data.image;

      //star 초기화
      const star = document.querySelector(".star");
      star.innerHTML = '';
      const star_cnt = data.data.star;
      for (let i = 0; i < star_cnt; i++) {
        const star_full = document.createElement("img");
        star_full.src = "./img/Star3.png";
        star.appendChild(star_full);
      }
      for (let i = 0; i < 5 - star_cnt; i++) {
        const star_empty = document.createElement("img");
        star_empty.src = "./img/Star 5.png";
        star.appendChild(star_empty);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}; //window draw

//run
get_user();
draw();