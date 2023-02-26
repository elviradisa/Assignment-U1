async function get_breeds_from_URL () {
    document.querySelector(".background_contacting_server").style.display = "flex";
    document.querySelector(".quiz_response").style.display = "flex";

    const image_request = new Request("https://teaching.maumt.se/apis/access/");
    const response =  await send_request(image_request);
}

function logout () {
    document.querySelector(".background_contacting_server").style.display = "none";
    document.querySelector(".contacting_server").style.display = "none";
    document.querySelector(".login_register").style.display = "flex";
    document.querySelector(".status_code").style.display = "none";
    document.querySelector(".quiz").style.display = "none";
}

function stay_when_refresh () {
    const my_content = document.querySelector(".quiz").value;
    localStorage.setItem("my_content", my_content);
}








