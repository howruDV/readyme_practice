"use strict";
import axios from "axios";

const input_id = document.getElementById("input_id");
const input_pw = document.getElementById("input_pw");
const input_pw_check = document.getElementById("input_pw_check");
const input_name = document.getElementById("input_name");
const input_bio = document.getElementById("input_bio");
const input_profile = document.getElementById("input_profile");
const btn_submit = document.getElementById("btn_submit");

const register =() =>{
    const formData  = new FormData();
    formData.append("name", input_name.value);
    formData.append("username", input_id.value);
    formData.append("password", input_pw.value);
    formData.append("bio", input_bio.value);
    formData.append("profile_img", input_profile.files[0]);

    if(input_pw.value == input_pw_check.value) {
        axios.post("http://3.37.140.20:5000/api/v1/account/register", formData)
        .then(res => {
            if(res.data.ok == true)
                alert("회원가입 성공!");
            else
                alert("회원가입 실패 :(");
        })
        .catch(error => {
            alert("오류 발생 : "+error);
        })
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
};

btn_submit.addEventListener("click", register);