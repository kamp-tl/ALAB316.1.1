//import '../styles/style.css'

const mains = document.getElementsByTagName("main");
const mainEl = mains[0]
console.log(`This is my mainEl: ${mainEl}`)

const root = document.documentElement; 
const styles = window.getComputedStyle(root);
const color = styles.getPropertyValue('--main-bg')


mainEl.style.backgroundColor = color
let h1 = document.createElement('h1')
h1.textContent = "DOM Manipulation"
mainEl.append(h1)
mainEl.classList.add("flex-ctr")