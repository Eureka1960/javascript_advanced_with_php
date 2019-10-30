//Function to keep the ajax page on DOM
keep_current_page();

//Home page link from logo or the name of the app in navbar
document.getElementById('nav_link_page').addEventListener('click', function(e) {
    e.preventDefault();
    load_page(this['href']);
});

//Query selector of all a link in list of unordered list
const elements = document.querySelectorAll('ul li a');
elements.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        load_page(this['href']);
    });
});

//The function that allows us to load the according the link URL
function load_page(url) {
    //Parsing of the link
    const http_url = url.split('#')[0];
    const url_path = url.split('#').length > 1 ? url.split('#')[1].split('/')[1] + '.php' : 'home.php';
    const new_url = http_url + url_path;
    //Initialize the ajax request
    const xhr = new XMLHttpRequest();
    url = url.split('#').length > 1 == false ? '#/' : url;
    xhr.open('GET', new_url);
    xhr.setRequestHeader('Content-Type', 'text/html');
    xhr.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            window.history.pushState('about', 'Title', url);
            document.querySelector('.main-content').innerHTML = this.responseText;
        }
    }
    xhr.send();
}

//Allowing to keep current page in DOM even if after reloading or refreshing the page
function keep_current_page() {
    if (document.baseURI) {
        const url = document.baseURI;
        return load_page(url);
    }
}