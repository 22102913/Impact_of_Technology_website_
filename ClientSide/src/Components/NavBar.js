export default function NavBar() {

    const UrlPagePairs = { '': 'Home', 'about-us': 'About us', 'computers-in-the-work-force': 'Computers in the work force'}

    const currentPage = UrlPagePairs[ window.location.href.split('/')[3]];  
        

    return <nav id="nav">

        <ul id="navbar-container" onMouseLeave={(e) => {ReSetunderlinePos(e) } }>
            <li><a href="/" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Home</a></li>
            <li><a href="/about-us" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>About us</a></li>
            <li><a href="/computers-in-the-work-force" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Computers in the work force</a></li>
            <li><a href="/about-us" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Automated Decision Making</a></li>
            <li><a href="/artificial-intelligence" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Artificial Intelligence</a></li>
            <li><a href="/environmental-effects" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Environmental Effects</a></li>
            <li><a href="/ethical-issues" onMouseEnter={(e) => { SetUnderlinePos(e.target) }}>Ethical issues</a></li>
        </ul>
        <div id="nav-underline" />
        <div id="nav-highlight" />
    </nav>
}

function SetUnderlinePos(e) {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = e.offsetLeft + "px";
    document.cookie = e.offsetLeft + "px";
    underline.style.width = e.offsetWidth + "px";
}
function ReSetunderlinePos() {
    var underline = document.querySelector('#nav-underline');
    underline.style.left = "0px";
    underline.style.width = "100%";console.log("-");
}

