//import '../styles/style.css'

const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


const mainEl = document.querySelector('main')  
const root = document.documentElement; 



mainEl.style.backgroundColor = 'var(--main-bg)'
let h1 = document.createElement('h1')
h1.textContent = "DOM Manipulation"
mainEl.append(h1)
mainEl.classList.add("flex-ctr")

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add("flex-around")

for (let link of menuLinks){
    let a = document.createElement('a')
    a.setAttribute('href',link.href)
    a.textContent = link.text
    topMenuEl.append(a)
}

// submenu
const subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 0

//interaction 
const topMenuLinks = topMenuEl.querySelectorAll('a')
topMenuEl.addEventListener('click', (e) =>{
e.preventDefault()
console.log(e.target.textContent)

if(!e.target.classList.contains('active')){
  console.log('inactive')
  // loop through the menuLinks to check for subLinks 
  // if(){ 
  //   subMenuEl.style.top = '100%'
  // }
  // else {
  //   subMenuEl.style.top = '0'
  // }
}

for(let a of topMenuLinks){
  a.classList.remove('active')
  if (a===e.target){continue}
}
e.target.classList.toggle('active')


})

