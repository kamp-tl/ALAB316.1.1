//import '../styles/style.css'

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


//const mainEl = document.querySelector('main')  
const mains = document.getElementsByTagName("main");
const mainEl = mains[0]

const root = document.documentElement; 
const CSSstyles = window.getComputedStyle(root);

mainEl.style.backgroundColor = CSSstyles.getPropertyValue('--main-bg')
// mainEl.style.backgroundColor = 'var(--main-bg)'
let h1 = document.createElement('h1')
h1.textContent = "DOM Manipulation"
mainEl.append(h1)
mainEl.classList.add("flex-ctr")

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = CSSstyles.getPropertyValue('--top-menu-bg')
// topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add("flex-around")

for (let link of menuLinks){
    let a = document.createElement('a')
    a.setAttribute('href',link.href)
    a.textContent = link.text
    topMenuEl.append(a)
}

