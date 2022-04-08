function onClick() {
    const nav = document.querySelector('.navigation')
    if( nav.classList.contains("open") ) {
        nav.classList.remove("open")
    }
    else {
        nav.classList.add("open")
    }
}

function onLoad() {
    const btn = document.querySelector('.nav-button')
    btn.addEventListener("click", onClick )
}


window.addEventListener("load", onLoad )