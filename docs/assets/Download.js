let fileSpan = document.getElementById("file-span");
let dlText = document.getElementById("download-text");
let descText = document.getElementById("description-text");
let sizeText = document.getElementById("size-text");

const hash = window.location.hash.substr(1);

if (!hash || hash === "" || hash.length !== 64) redirect404();

fetch("/api/getFile?id=" + hash).then(function(response) {
    return response.json();
  }).then(function(data) {setupPage(data)});

function setupPage(data) {
    if (data["Error"]) redirect404();
    if (data["Author"])
    {
        showElement(document.getElementById("author-div"));
        document.getElementById("author-text").innerText = data["Author"];
    }

    dlText.innerText = `Download '${data["Name"]}'`;
    descText.innerText = data["Description"];
    document.title = "Download " + data["Name"] + " - ROBLOX Reverse Engineering";

    sizeText.innerText = FileSize(data["Size"])

    let btn = document.createElement("button");
    btn.className = "md-button md-button--primary downloadIcon";
    btn.onclick = downloadFile;
    btn.innerText = "Download File";
    fileSpan.appendChild(btn);

    showElement(fileSpan);
}


function redirect404() {
    window.location.replace("/404");
    throw new Error("404");
}

function downloadFile() {
    window.location.href = "/api/dlFile?id=" + hash;
}

function showElement(element) {
    element.style.display = "block";
}

function FileSize(size) {
    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}