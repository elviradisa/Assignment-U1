"use strict";

function go_to_register_page () {
    document.querySelector(".go_to_register_text").style.display = "none";
    document.querySelector(".go_to_login_text").style.display = "block";
    document.querySelector(".register_button").style.display = "block";
    document.querySelector(".login_button").style.display = "none"
    document.querySelector("#title_login").textContent = "REGISTER";
    document.querySelector("#paragraph").textContent = "Ready when you are..."
    document.querySelector("#paragraph").style.backgroundColor = "transparent";
    document.querySelector(".user_name").style.backgroundColor = "#87af9c";
    document.querySelector(".password").style.backgroundColor = "#87af9c";
    document.querySelector("#wrapper").style.backgroundColor = "#628a6f";
}

function go_to_login_page () {
    document.querySelector(".go_to_register_text").style.display = "block";
    document.querySelector(".go_to_login_text").style.display = "none";
    document.querySelector(".register_button").style.display = "none";
    document.querySelector(".login_button").style.display= "block";
    document.querySelector("#title_login").textContent = "LOGIN";
    document.querySelector("#paragraph").textContent = "Let the magic start!"
    document.querySelector(".user_name").style.backgroundColor = "#87a9af";
    document.querySelector(".password").style.backgroundColor = "#87a9af";
    document.querySelector("#wrapper").style.backgroundColor = "#438a9b";
}

function check_username () {
    const username = localStorage.getItem("username");

    if (username) {
        document.querySelector(".quiz").style.display = "flex";
        document.querySelector(".login_register").style.display = "none";
        document.querySelector(".sticky_logout").textContent = username;
        document.querySelector("#wrapper").style.backgroundColor = "#8f7dba";
        document.querySelector(".standby_image").style.display = "flex";
        document.querySelector(".login_register").style.display = "none";

    } else {
        document.querySelector(".background_contacting_server").style.display = "none";
        document.querySelector(".contacting_server").style.display = "none";
        document.querySelector(".login_register").style.display = "flex";
        document.querySelector(".status_code").style.display = "none";
        document.querySelector(".quiz").style.display = "none";
        document.querySelector("#paragraph").textContent = "Let the magic start!"
        document.querySelector("#paragraph").style.backgroundColor = "transparent";
        document.querySelector("#wrapper").style.backgroundColor = "#438a9b";
    }
}
check_username();