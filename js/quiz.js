"use strict";

async function quiz (user_name) {

    document.querySelector(".login_register").style.display = "none";
    document.querySelector(".sticky_logout").textContent = user_name;
    document.querySelector(".standby_image").style.display = "none";
    document.querySelector(".standby_image").style.display = "flex";
    document.querySelector("#wrapper").style.backgroundColor = "#8f7dba";
    document.querySelector(".quiz").style.display = "flex";

    let four_dogs = [];
    for (let i = 0; i < 4; i++) {
        const dog = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)];
        four_dogs.push(dog);
    }
    const correct_dog = four_dogs[Math.floor(Math.random() * four_dogs.length)];

    const four_options = document.querySelectorAll(".quiz_button");
    for (let i = 0; i < four_options.length; i++) {
        four_options[i].textContent = four_dogs[i].name;
    }

    const image_request = new Request(`https://dog.ceo/api/breed/${correct_dog.url}/images/random`);
    const response =  await send_request(image_request);

    const data = await response.json();

    document.querySelector(".response_answer").style.display = "flex";
    document.querySelector(".standby_image").src = data.message; 
    document.querySelector("#bottom_right").addEventListener("click", check_answer);
    document.querySelector("#bottom_left").addEventListener("click", check_answer);
    document.querySelector("#top_right").addEventListener("click", check_answer);
    document.querySelector("#top_left").addEventListener("click", check_answer);

    function check_answer (event) {
        if (event.target.textContent === correct_dog.name) {
            document.querySelector(".background_quiz_response").style.display = "flex";
            document.querySelector(".response_answer").textContent = "Correct!"
            document.querySelector(".quiz_response").style.display = "flex";
            document.querySelector(".quiz_response").style.backgroundColor = "#a9e8bf";
            document.querySelector(".close_display").style.display = "flex";
            document.querySelector("#wrapper").style.overflow = "hidden";
            document.querySelector("#wrapper").style.height = "100vh";
            
        } else {
            document.querySelector(".background_quiz_response").style.display = "flex";
            document.querySelector(".response_answer").textContent = "I'm afraid not!"
            document.querySelector(".quiz_response").style.display = "flex";
            document.querySelector(".close_display").style.display = "flex";
            document.querySelector(".quiz_response").style.backgroundColor = "#e69753";
            document.querySelector("#wrapper").style.overflow = "hidden";
            document.querySelector("#wrapper").style.height = "100vh";
        }
    }
}

function logout () {
    document.querySelector(".background_contacting_server").style.display = "none";
    document.querySelector(".contacting_server").style.display = "none";
    document.querySelector(".login_register").style.display = "flex";
    document.querySelector(".status_code").style.display = "none";
    document.querySelector("#paragraph").textContent = "Let the magic start!"
    document.querySelector("#paragraph").style.backgroundColor = "transparent";
    document.querySelector("#wrapper").style.backgroundColor = "#438a9b";
    document.querySelector(".quiz").style.display = "none";

    document.querySelector(".user_name").value = "";
    document.querySelector(".password").value = "";

    localStorage.removeItem("username");
}

function close_answer_display () {
    document.querySelector(".background_quiz_response").style.display = "none";
    document.querySelector(".close_display").style.display = "none";
    document.querySelector(".quiz_response").style.display = "none";
    document.querySelector("#wrapper").style.overflow = "scroll";
    document.querySelector("#wrapper").style.height = "";

    const user_name = document.querySelector(".sticky_logout").textContent;
    quiz(user_name);
}
