const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      +{ text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// task 1.0

//ANSWER
let mainEl = document.querySelector("main");
console.log(mainEl);

// task 1.1

//ANSWER
mainEl.style.backgroundColor = "#4a4e4d";

//task 1.2

//ANSWER
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
console.log(mainEl);

//TASK 1.3

//ANSWER
mainEl.classList.add("flex-ctr");

//TASK 2.0

//ANSWER
let topMenuEl = document.querySelector("nav");
console.log(topMenuEl);

// TASK 2.1

//ANSWER
topMenuEl.style.height = "100%";

//TASK 2.2

//ANSWER
topMenuEl.style.backgroundColor = "#0e9aa7";

// TASK 2.3

//ANSWER
topMenuEl.classList.add("flex-around");

//TASK 3.0

//ANSWER
// Menu data structure
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

//TASK 3.1

// FINAL ANSWER FOR 3.1 below
let aEl;
// let a = 0 <------ wrong declartion correct one bellow
const a = document.createElement("a");
for (let count = 0; count < menuLinks.length; count++) {
  aEl = document.createElement("a");

  a.setAttribute("href", menuLinks[count].href);

  aEl.textContent = menuLinks[count].text;

  topMenuEl.append(aEl);
}

console.log(menuLinks);
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

// PART 2 =============================================================================================

// TASK 4.0
const subMenuEl = document.getElementById("sub-menu");

// TASK 4.1
subMenuEl.style.height = "100%";

//TASK 4.2

subMenuEl.style.backgroundColor = "#3da4ab";

//TASK 4.3
subMenuEl.classList.add("flex-around");

//TASK 4.4
subMenuEl.style.position = "absolute";

//TASK 4.5
subMenuEl.style.top = 0;

//TASK 5.0

// TASK 5.1
const topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

let showingSubMenu = false; // ANSWER 5.2

//TASK 5.2
topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  let link = evt.target;
  console.log(evt.target.tagName);
  // return a == false
  if (evt.target.tagName !== "A") {
    console.log("still in event listener");
    return;
  } else {
  }
  if (evt.className === "active") {
    evt.classList.remove("active"); // ANSWER 5.3a
    showingSubMenu = false; // ANSWER 5.6
    subMenuEl.style.top = "0"; //ANSWER 5.3c
    return; // ANSWER 5.3d
  }
  topMenuLinks.forEach((arg) => {
    arg.classList.remove("active"); // ANSWER 5.4
    console.log(arg);
  });

  let text = evt.target.textContent;
  let currentLink = {};
  for (let i = 0; i < menuLinks.length; i++) {
    if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty("subLinks");
      currentLink = menuLinks[i];
      console.log(menuLinks[i]);
    } else if (link.textContent === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty("subLinks");
      console.log(menuLinks[i]);
    }

    // console.log("menuLinks")
    // console.log(menuLinks[i].hasOwnProperty('subLinks'))
    // showingSubMenu = menuLinks[i].hasOwnProperty('subLinks');

    // showingSubMenu = menuLinks[i].hasOwnProperty('subLinks');

    topMenuEl.classList.remove("active");
    evt.target.classList.add("active"); //  ANSWER 5.5
  }

  // 5.7 ===================================================================================================================================================================================
  //      (showingSubMenu === true)  is the first  way i had
  if (showingSubMenu) {
    subMenuEl.style.top = "100%";
    buildSubMenu(currentLink);
  } else {
    subMenuEl.style.top = "0%";
  }

  // 5.8 ================================================================================================================================================================================

  function buildSubMenu(currentLink) {
    subMenuEl.innerHTML = ""; //clears it
    // console.log(menuLinks);
    currentLink.subLinks.forEach((subLinks) => {
      let a = document.createElement("A");
      a.setAttribute(`href`, subLinks.href);
      a.textContent = subLinks.text;
      subMenuEl.append(a);
    });
  }
  if(evt.target.text === "about"){
    mainEl.innerHTML = `<h1>${evt.target.text}<h1>`; // <------- 6.4
  }
  
});


//6.0 , 6.1 , 6.2 , 6.3 , 6.4 ================================================================================================================================================================================

//ANSWER 6.0
subMenuEl.addEventListener("click", (evt2) => {
  evt2.preventDefault();
  console.log(a);
  if (evt2.target.tagName !== "A") {
    console.log("element clicked was not <a> element");
    return;
  }
  showingSubMenu = false; // 6.1a
  subMenuEl.style.top = 0; // 6.1b
  if (topMenuLinks.className === "active") { // <--- 6.2 
    topMenuLinks.classList.remove("active");
  }
  mainEl.innerHTML = `<h1>${evt2.target.text}<h1>`; // <----- 6.3 
});

// ==!! Helped me get my answer !!==
// subMenuEl.addEventListener("click",(evt2) => {
//   evt.preventDefault()
//   let link = evt.target
//     console.log(evt.target.tagName)
//   // return a == false
//       if (evt.target.tagName !== 'A'){
//         console.log('still in event listener')
//           return

//             }else {


// First thought
// 6
//    mainEl === a.contains()
//   a.setAttribute(`href`, subMenuEl.href)
// }
// )
