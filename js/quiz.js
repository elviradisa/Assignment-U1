"use strict";

let i = 0;

async function check_answer (button_id) {

    const get_breed = ALL_BREEDS[i];
    const random_number = Math.floor(Math.random() * ALL_BREEDS.length);
    const random_number2 = Math.floor(Math.random() * ALL_BREEDS.length);
    const random_number3 = Math.floor(Math.random() * ALL_BREEDS.length);
    
    const get_breed2 = ALL_BREEDS[random_number];
    const get_breed3 = ALL_BREEDS[random_number2];
    const get_breed4 = ALL_BREEDS[random_number3];
    
    const image_request = new Request(`https://dog.ceo/api/breed/${get_breed.url}/images/random`);
    const response =  await send_request(image_request);

    const data = await response.json();

    document.querySelector(".standby_image").src = data.message; 
    document.querySelector("#top_left").textContent = get_breed.name;
    document.querySelector("#top_right").textContent = get_breed2.name;
    document.querySelector("#bottom_left").textContent = get_breed3.name;
    document.querySelector("#bottom_right").textContent = get_breed4.name;
    document.querySelector(".response_answer").style.display = "flex";

    if (button_id) {
        if (document.querySelector(`#${button_id}`).textContent === get_breed.name) {
            document.querySelector(".quiz_response").style.display = "flex";
            document.querySelector(".response_answer").textContent = "Correct!"
            document.querySelector(".quiz_response").style.backgroundColor = "#a9e8bf";
            document.querySelector(".close_display").style.display = "flex";
            document.querySelector(".background_quiz_response").style.display = "flex";
            document.querySelector("#wrapper").style.overflow = "hidden";
            document.querySelector("#wrapper").style.height = "100vh";
            
        } else {
            document.querySelector(".quiz_response").style.display = "flex";
            document.querySelector(".close_display").style.display = "flex";
            document.querySelector(".response_answer").textContent = "I'm afraid not!"
            document.querySelector(".quiz_response").style.backgroundColor = "#e69753";
            document.querySelector(".background_quiz_response").style.display = "flex";
            document.querySelector("#wrapper").style.overflow = "hidden";
            document.querySelector("#wrapper").style.height = "100vh";
        }

    }
    i += 1;
}
check_answer();


function logout () {
    document.querySelector(".background_contacting_server").style.display = "none";
    document.querySelector(".contacting_server").style.display = "none";
    document.querySelector(".login_register").style.display = "flex";
    document.querySelector(".status_code").style.display = "none";
    document.querySelector(".quiz").style.display = "none";
    document.querySelector("#paragraph").textContent = "Let the magic start!"
    document.querySelector("#paragraph").style.backgroundColor = "transparent";
    document.querySelector("#wrapper").style.backgroundColor = "#438a9b";

    localStorage.removeItem("username");
}

function close_answer_display () {
    document.querySelector(".background_quiz_response").style.display = "none";
    document.querySelector(".close_display").style.display = "none";
    document.querySelector(".quiz_response").style.display = "none";
    document.querySelector("#wrapper").style.overflow = "scroll";
    document.querySelector("#wrapper").style.height = "";
}
