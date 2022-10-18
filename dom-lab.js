// task 1.0

//ANSWER 
let mainEl = document.querySelector("main")
console.log(mainEl)

// task 1.1

//ANSWER
mainEl.style.backgroundColor = "#4a4e4d"

//task 1.2

//ANSWER
mainEl.innerHTML = ("<h1>SEI Rocks!</h1>") 
console.log(mainEl)

//TASK 1.3

//ANSWER
mainEl.classList.add('flex-ctr')

//TASK 2.0

//ANSWER
let topMenuEl = document.querySelector("nav")
console.log(topMenuEl)

// TASK 2.1

//ANSWER
topMenuEl.style.height = "100%"

//TASK 2.2 

//ANSWER
topMenuEl.style.backgroundColor = "#0e9aa7"

// TASK 2.3 

//ANSWER
topMenuEl.classList.add('flex-around')

//TASK 3.0

//ANSWER
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//TASK 3.1

// FINAL ANSWER FOR 3.1 below
let aEl;
// let a = 0 <------ wrong declartion correct one bellow
const a = document.createElement('a');
for(let count = 0; count < menuLinks.length;count++){
  aEl = document.createElement('a');

  a.setAttribute("href", menuLinks[count].href);

  aEl.textContent = menuLinks[count].text;

  topMenuEl.append(aEl)
}


// second thought 

// a.innerHTML = text;
// // apend the anchor to the body
// // of course you can append it almost to any other dom element
// document.getElementsByTagName('body')[0].appendChild(topMenuEl);
// document.getElementsByTagName('body')[0].innerHTML += '<a href="'+ link +'">' +text+'</a>';




// First thought

// let fontSize = 10


// mainEls.forEach((menuLinks)=> { 
//     mainEls.style.fontSize + "px"
//     fontSize += 10 
// })