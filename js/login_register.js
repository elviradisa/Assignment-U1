function go_to_register_page () {
    document.querySelector("#title_login").textContent = "REGISTER";
    document.querySelector("#paragraph").textContent = "Ready when you are..."
    document.querySelector(".login_button").textContent = "Register"
    document.querySelector(".go_to_register_text").style.display = "none";
    document.querySelector(".go_to_login_text").style.display = "block";
    document.querySelector("#wrapper").style.backgroundColor = "#9c86bd";
}

function go_to_login_page () {
    document.querySelector(".go_to_register_text").style.display = "block";
    document.querySelector(".go_to_login_text").style.display = "none";
    document.querySelector("#title_login").textContent = "LOGIN";
    document.querySelector("#paragraph").textContent = "Let the magic start!"
    document.querySelector(".login_button").textContent = "Login"
    document.querySelector("#wrapper").style.backgroundColor = "#a188c5";
}

async function do_request (method, endpoint, body) {
    const options = {
        method: method,
        headers: {"Content-type": "application/json;   charset=UTF-8"},
        body: JSON.stringify(body)
    }

    const response = await fetch("https://teaching.maumt.se/apis/access/" + endpoint, options);
    const data = await response.json();
    return data;
}

function login () {
    document.querySelector(".background_contacting_server").style.display = "flex";
}