fetch("http://3.36.60.137:5000/api/v1/movie/1")
.then(res=>res.json()) // data 받아 json 처리
.then(data=>{   // data를 화면에 출력
    //<div id="test"><p>...</p></div>
    const text=document.createElement("p"); //createElement: 태그생성 - html에 "p" tag 생성
    text.textContent="Title: "+data.data.title;

    //status
    const text2=document.createElement("p");
    text2.textContent="Status: "+data.status;

    //des
    const text3=document.createElement("p");
    text3.textContent="Description: "+data.data.description;
    
    //image
    const text4=document.createElement("img");
    text4.src=data.data.image;
    text4.width=300;

    const test = document.getElementById("test"); // getElementById: div를 만듬
    test.appendChild(text); //추출한 div값에 tag붙임
    test.appendChild(text2); //추출한 div값에 tag붙임
    test.appendChild(text3); //추출한 div값에 tag붙임
    test.appendChild(text4); //추출한 div값에 tag붙임
}).catch(error=>{console.log(error)})