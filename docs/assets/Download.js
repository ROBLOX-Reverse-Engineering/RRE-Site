let dlText = document.getElementById("download-text");
let descText = document.getElementById("description-text");

const hash = window.location.hash.substr(1);

if (!hash || hash === "" || hash.length !== 64) redirect404();

fetch("/api/getFile?id=" + hash).then(function(response) {
    return response.json();
  }).then(function(data) {setupPage(data)});

function setupPage(data) {
    if (data["Error"]) redirect404();

    dlText.innerText = `Download '${data["Name"]}'`;
    descText.innerText = data["Description"];
}


function redirect404() {
    window.location.replace("/404");
    throw new Error("404");
}

function downloadFile() {
    window.location.href = "/api/dlFile?id=" + hash;
}