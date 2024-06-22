function run(){
    let htmlCode = document.getElementById("html-text");
    let cssCode = document.getElementById("css-text");
    let jsCode = document.getElementById("js-text");

    let output = document.getElementById("output-section");
    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode);
}