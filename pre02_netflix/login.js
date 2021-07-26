"use strict";

//page move
const login=() =>{
    location.href="./main.html"
}

//login
const submit=() =>{
    //예외처리
    if(!input_id.value || !input_pw.value){
        alert("이메일 또는 전화번호와, 비밀번호를 입력해주세요.")
        return;
    }

    let user={
        username: input_id.value,
        password: input_pw.value
    };

    fetch("http://3.37.140.20:5000/api/v1/account/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json()) //login 값 입력 후 return이므로 함수 안에 위치함
    .then(data=>{
        if(data.status_code===400){
            let message=data.message;
            alert(message);
            return;
        }

        let access_token=data.access_token;
        let user_id=data.user_id;
        let profile=data.profile_url;
        let user_name=data.username;
        let bio=data.bio;
        
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("profile", profile);
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("bio", bio);

        login();
    }).catch(error=>{console.log(error)})
}

const btn_submit=document.querySelector("#btn_submit");
btn_submit.addEventListener("click", submit); //function이름만 받음