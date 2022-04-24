window.theme = {};

window.theme.loadScript = function (src, type = 'module', async = false, defer = false) {
	let script = document.createElement('script');
	if (type) script.setAttribute('type', type);
	if (async) script.setAttribute('async', true);
	if (defer) script.setAttribute('defer', true);
	script.setAttribute('src', src);
	document.head.appendChild(script);
};

// 加载看板娘资源
window.theme.loadScript('appearance/themes/CityInDark/app_module/live2d-widget/autoload.js');
// 加载窗口资源
window.theme.loadScript('appearance/themes/CityInDark/js_module/module/window.js');
window.theme.loadScript('appearance/themes/CityInDark/js_module/module/html.js', 'text/javascript');
// 加载打字机功能
window.theme.loadScript('/appearance/themes/CItyInDark/js_module/module/typewriter.js');
