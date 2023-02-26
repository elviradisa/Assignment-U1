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

        console.log(response);

         if(response.ok) {
            const resource = await response.json();
            status_code_display("Registration complete. Please proceed to login!")
        } else if (response.status === 409) {
            status_code_display("Sorry, that name is taken. Please try another one!");
        } else if (response.status === 400) {
            status_code_display("You need a username and password to register")
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
        document.querySelector(".quiz_response").style.display = "none";

        const user_name = document.querySelector(".user_name").value;
        const password = document.querySelector(".password").value;

        const options = {
            headers: {"Content-type": "application/json; charset=UTF-8"},
        };

        const login_request = new Request(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_name}&password=${password}`, options);
        const response =  await send_request(login_request);

        contacing_server.style.display = "none";

        if(response.ok) {
            const resource = await response.json();
            document.querySelector(".login_register").style.display = "none";
            document.querySelector(".quiz").style.display = "flex";
            document.querySelector(".sticky_logout").textContent = user_name;
            get_breeds_from_URL();
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
