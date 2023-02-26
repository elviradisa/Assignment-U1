"use strict";

async function send_request (request) {
    const response_promise = await fetch(request);
    return response_promise;
};