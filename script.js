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
const mainTitle = this.getElementById('main-title')
mainTitle.textContent = "Dom Toretto.Welcome"

  // Part 2
const body = this.querySelector('body')
body.style.backgroundColor = '#B8D4E9'

  // Part 3
  const fav = this.getElementById('favorite-things')
  fav.removeChild(fav.lastElementChild)
  // Part 4
const spTitle = this.querySelectorAll(".special-title")
for(let a of spTitle){
  a.style.fontSize = '2rem'
}


  // Part 5
const paRace = this.getElementById('past-races')
for(let p of paRace.children){
  if(p.textContent==="Chicago"){
    p.textContent=""
  }
}

  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
