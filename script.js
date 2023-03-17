let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  /* DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
   */
const mainTitle = this.getElementById('main-title')
mainTitle.textContent = "Dom Toretto.Welcome"

  // Part 2
  /*Select the bodyand change the background-color to a new color of your choice.
   */
const body = this.querySelector('body')
body.style.backgroundColor = '#B8D4E9'

  // Part 3
  /*Select DOM's Favorite Things list and remove the last list item. */
  const fav = this.getElementById('favorite-things')
  fav.removeChild(fav.lastElementChild)
  // Part 4
  /* Select all .special-titleclass elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
   */
const spTitle = this.querySelectorAll(".special-title")
for(let a of spTitle){
  a.style.fontSize = '2rem'
}


  // Part 5
  /*Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
   */
const paRace = this.getElementById('past-races')
for(let p of paRace.children){
  if(p.textContent==="Chicago"){
    p.textContent=""
  }
}
//Creating New DOM Elements
  // Part 6
/*Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
 */
const nweEl = document.createElement('li')
nweEl.textContent = "Sydney"
paRace.appendChild(nweEl)

  // Part 7
/*Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
 */
const newDiv = document.createElement('div')
newDiv.classList.add('blog-post','purple')
const nweH2 = document.createElement('h2')
nweH2.textContent = "Sydney"
nweH2.style.color = 'white'
const newP = document.createElement('p')
newP.textContent = "I JUMPED MY CAR ACROSS THE HARBOUR BRIDGE"
newDiv.appendChild(nweH2)
newDiv.appendChild(newP)
let newM = document.querySelector('.main')
newM.appendChild(newDiv)

//Event Handlers
// Part 8
/**When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:
 * Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-titleis clicked
 */
// const randomQuote = function() {
//   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
// };
const qTitle = document.querySelector('#quote-title')
qTitle.addEventListener('click',randomQuote)
  // Part 9
/**
 * Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
The mouseouthandler should toggle the class .purple
The mouseenterhandler should toggle the class .red
 */

const newPost = document.querySelectorAll('.blog-post')
for (let i of newPost){
i.addEventListener('mouseout',function(ele){
  if(i!==ele.target){
    return
  }
  ele.target.classList.toggle('purple')
  
})
i.addEventListener('mouseenter',function(e){
  if(i!==e.target){
    return
  }
  e.target.classList.toggle('red')
})
}
});
