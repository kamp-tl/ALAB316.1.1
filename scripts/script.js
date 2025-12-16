//import '../styles/style.css'

const mains = document.getElementsByTagName("main");
const mainEl = mains[0]

const root = document.documentElement; 
const CSSstyles = window.getComputedStyle(root);

mainEl.style.backgroundColor = CSSstyles.getPropertyValue('--main-bg')
let h1 = document.createElement('h1')
h1.textContent = "DOM Manipulation"
mainEl.append(h1)
mainEl.classList.add("flex-ctr")

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = CSSstyles.getPropertyValue('--top-menu-bg')
topMenuEl.classList.add("flex-around")

