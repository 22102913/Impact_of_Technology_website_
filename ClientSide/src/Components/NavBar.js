var underline = document.querySelector('#nav-underline');
var item = document.querySelectorAll('a');
var nav = document.querySelectorAll('#navbar-container');

export default function NavBar() {

    const UrlPagePairs = { '': 'Home', 'about-us': 'About us', 'computers-in-the-work-force': 'Computers in the work force'}

    const currentPage = UrlPagePairs[ window.location.href.split('/')[3]];

    item.forEach(link => {
        link.addEventListener('mouseover', (e) => { SetUnderlinePos(e.target) })
        link.addEventListener('mouseout', (e) => {
            underline.style.left = "0px";
            underline.style.width = "100%";
        })
    })     
        

    return <nav id="nav">

        <ul id="navbar-container">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/computers-in-the-work-force">Computers in the work force</a></li>
            <li><a href="/about-us">About us</a></li>
        </ul>
        <div id="nav-underline"/>
    </nav>
}

function SetUnderlinePos(e) {
    underline.style.left = e.offsetLeft + "px";
    document.cookie = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth + "px";
}

