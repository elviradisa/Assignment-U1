"use strict";

async function register () {
    try {
        const contacing_server = document.querySelector(".contacting_server");
        contacing_server.style.display = "flex";
        document.querySelector(".background_contacting_server").style.display = "flex";

        const user_name = document.querySelector(".user_name").value;
        const password = document.querySelector(".password").value;

        const body_post = {
            action: "register",
            user_name: user_name,
            password: password,
        };

        const options = {
            method: "POST",
            body: JSON.stringify(body_post),
            headers: {"Content-type": "application/json; charset=UTF-8"},
        };

        const post_request = new Request("https://teaching.maumt.se/apis/access/", options);
        const response =  await send_request(post_request);

        contacing_server.style.display = "none";
        document.querySelector(".status_code").style.display = "flex";

        if(response.status === 200) {
            status_code_display("Registration complete. Please proceed to login!")
        } else if (response.status === 400) {
            status_code_display("You need a username and password to register");
        } else if (response.status === 409) {
            status_code_display("Sorry, that name is taken. Please try another one!")
        } else if (response.status === 418) {
            status_code_display("I'm not a teapot!");
        } 
    } catch(e) {
        console.log(e);
    }
}

async function login () {
    try {
        const contacing_server = document.querySelector(".contacting_server");
        contacing_server.style.display = "flex";
        document.querySelector(".background_contacting_server").style.display = "flex";

        const user_name = document.querySelector(".user_name").value;
        const password = document.querySelector(".password").value;

        const options = {
            headers: {"Content-type": "application/json; charset=UTF-8"},
        };

        const login_request = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_name}&password=${password}`, options);
        const response =  await send_request(login_request);

        contacing_server.style.display = "none";

        if(response.status === 200) {
            const resource = await response.json(); 
            localStorage.setItem("username", resource.data.user_name);
            quiz(user_name);
        } else if (response.status === 418) {
            document.querySelector(".status_code").style.display = "flex";
            login_status_display("I'm not a teapot!");
        } else if (response.status === 404) {
            document.querySelector(".background_contacting_server").style.display = "none";
            document.querySelector(".contacting_server").style.display = "none";
            document.querySelector("#paragraph").textContent = "Wrong username or password!";
            document.querySelector("#paragraph").style.backgroundColor = "#f0faf5";
            document.querySelector("#paragraph").style.display = "flex";     
        } else if (response.status === 400) {
            document.querySelector(".background_contacting_server").style.display = "none";
            document.querySelector(".contacting_server").style.display = "none";
            document.querySelector("#paragraph").textContent = "You need a username and password to login!";
            document.querySelector("#paragraph").style.backgroundColor = "#f0faf5";
            document.querySelector("#paragraph").style.display = "flex";
        } 
    } catch (e) {
        console.log(e);
    }
}

function login_status_display (string) {
    const status_code = document.querySelector(".status_code");
    const close_d = document.querySelector(".close_status_display_button");
    const status_code_text = document.querySelector(".status_code > p");

    status_code.style.display = "flex";
    close_d.style.display = "block";

    status_code_text.textContent = string;
}

function status_code_display (string) {
    const status_code = document.querySelector(".status_code");
    const close_d = document.querySelector(".close_status_display_button");
    const status_code_text = document.querySelector(".status_code > p");

    status_code.style.display = "flex";
    close_d.style.display = "block";

    status_code_text.textContent = string;
    
}

function close_status_display_button () {
    document.querySelector(".status_code").style.display = "none";
    document.querySelector(".background_contacting_server").style.display = "none";
}
