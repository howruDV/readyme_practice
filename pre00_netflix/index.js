fetch("http://3.37.140.20:5000/api/v1/movie/1")
.then(res=>res.json())
.then(data=>{
    //title, year, season, quality, des, play, bg 초기화
    const title = document.querySelector(".title");
    const year=document.querySelector("#year");
    const season=document.querySelector("#season");
    const quality=document.querySelector("#view");
    const des=document.querySelector(".movie_des");
    const play=document.querySelector("#current")
    const bg_img=document.getElementById("mainpg_background");
    
    title.innerText=data.data.title;
    year.innerText=data.data.year;
    season.innerText=data.data.season+" Season";
    quality.innerText=data.data.quality;
    des.innerText=data.data.description;
    play.innerText="Play "+data.data.current_see;
    bg_img.src=data.data.image;

    //star 초기화
    const star = document.querySelector(".star");
    star.innerHTML="";  //Q 코드 초기화하는 다른방법?
    const star_cnt = data.data.star;
    for (i=0; i<star_cnt; i++){
        const star_full = document.createElement("img");
        star_full.src = "./img/Star3.png";  //Q img element(#star_full)를 직접 호출할 순 없는지?
        star.appendChild(star_full);    //Q appendChild 업호스팅?
    }
    for (i=0;i<5-star_cnt;i++){
        const star_empty = document.createElement("img");
        star_empty.src = "./img/Star 5.png";
        star.appendChild(star_empty);
    }
}).catch(error=>{console.log(error)})