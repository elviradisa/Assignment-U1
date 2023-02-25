function go_to_register_page () {
    document.querySelector("#title_login").textContent = "REGISTER";
    document.querySelector("#paragraph").textContent = "Ready when you are..."
    document.querySelector(".go_to_register_text").style.display = "none";
    document.querySelector(".register_button").style.display = "block";
    document.querySelector(".login_button").style.display = "none"
    document.querySelector(".go_to_login_text").style.display = "block";
    document.querySelector("#wrapper").style.backgroundColor = "#664e85";
}

function go_to_login_page () {
    document.querySelector(".go_to_register_text").style.display = "block";
    document.querySelector(".go_to_login_text").style.display = "none";
    document.querySelector(".register_button").style.display = "none";
    document.querySelector(".login_button").style.display= "block";
    document.querySelector("#title_login").textContent = "LOGIN";
    document.querySelector("#paragraph").textContent = "Let the magic start!"
    document.querySelector("#wrapper").style.backgroundColor = "#a188c5";
}

async function do_request (method, endpoint, body) {
    const options = {
        method: method,
        headers: {"Content-type": "application/json;   charset=UTF-8"},
        body: JSON.stringify(body)
    }
    //skrev såhär istället, fick 404
    const request = new Request("https://teaching.maumt.se/apis/access");

    //const response = await fetch("https://teaching.maumt.se/apis/access" + endpoint, options);
    const response = await fetch(request + endpoint, options);
    const data = await response.json();
    return data;
}

function login () {
    document.querySelector(".background_contacting_server").style.display = "flex";

    const user_name = document.querySelector(".user_name").value;
    const password = document.querySelector(".password").value;

    do_request('GET', `?action=check_credentials&user_name=${user_name}&password=${password}`);
}

function register () {
    document.querySelector(".background_contacting_server").style.display = "flex";

    const user_name = document.querySelector(".user_name").value;
    const password = document.querySelector(".password").value;

    do_request('POST',"/", {action: "register", user_name: user_name, password: password,});
}
