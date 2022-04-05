
function loadScript(url, type = 'module') {
    let script = document.createElement('script');
    script.setAttribute('type', type);
    script.setAttribute('src', url);
    document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js");