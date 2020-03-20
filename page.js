var current_url = window.location.href
var url_end = current_url.match(/([a-z]+)(.html)/)


window.addEventListener('DOMContentLoaded', function() {
    console.log(url_end[1]);
    document.getElementById(url_end['1']).style.color = 'hotpink';
});
