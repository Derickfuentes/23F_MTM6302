/*** DOM ***/
// Use the console to print the document title and the URL
console.log(document.title)
console.log(document.URL)


/*** Finding HTML Elements ***/
//Select the element with the id = main. Store the returned value in a variable.
const $main = document.getElementById('main')
console.log($main)


//Select an element by CSS selector. Target the first link inside the 'nav' element.
const $navFirstOption = document.querySelector('nav a')
console.log($navFirstOption)

//Target all links in the nav element
const $navOptions = document.querySelectorAll('nav a')
console.log($navOptions)

//Pattern CSS selectors
//select all elements in the document whose href attribute value starts with "https"
console.log( document.querySelectorAll('[href^="https"]')  )

//select all elements in the document whose href attribute value contains the string "cdn"



console.log( document.querySelectorAll('[href*=cdn]')  )
/*** Traversing the DOM  ***/
//Return a HTMLCollection with the child elements of the main node
console.log( $main.children )

// Returns the first child node(that is an element node) of main
console.log( $main.firstElementChild )
// Returns the next sibling element of main
console.log( $main.nextElementSibling )


/*** Manipulating attributes */
//getAttribute()
//Obtain the href attribute of $navFirstOption
console.log($navFirstOption.getAttribute('href') )
console.log( $navFirstOption.href )

//exception calling attributes as properties
console.log( $main.className )
console.log( $main.style);
console.log( $main.getAttribute('style'));

//setAttribute()
//Set the ID 'hero' on the first 'div' element inside the 'main' element.
$main.firstElementChild.setAttribute('id', 'hero')

//Add 'text-bg-dark' class to the element with id hero; warning!
//document.getElementById('hero').setAttribute('class', 'text-bg-dark')


//Add the 'href' attribute to the 'continue reading...' hero link; https://imdac.github.io/mtm6302/
document.querySelector('main a').setAttribute('href' , 'https://imdac.github.io/mtm6302/')

//set the 'target' attribute of the her link to '_blank'
document.querySelector('main a').setAttribute('target', '_blank')



//removeAttribute()
//Remove the attribute 'target' from the 'continue reading...' link




/*** Manipulating classes ***/
const $hero = document.getElementById('hero')
console.log(   $hero.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' to the element with id 'hero'
$hero.classList.add('text-bg-dark')

console.log($hero.classList)
// console.log($hero.classList)         // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]

// Remove class
// Remove the class 'text-bg-dark' from the element with id 'hero
$hero.classList.remove('text-bg-dark')

console.log($hero.classList)
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]

//Toggle class
//Retreive the 'dark mode' button, and save it to $darkModeBtn const
const $darkModeBtn = document.getElementById('darkModeBtn')
$darkModeBtn.addEventListener('click', function() {
    // toggle class here
    $hero.classList.toggle('text-bg-dark')
})


//contains() and boolean condition
console.log($hero.classList.contains('position-relative')) // true
console.log($hero.classList.contains('text-bg-dark'))      // false

//blog data
const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: 'https://imdac.github.io/'
    },
    {
        category: 'Design',
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    }
]
// Set the first post title using textContent
document.querySelector('.post-title').textContent = 'New title'


// Set the first post using innerHTML
document.querySelector('.post').innerHTML = `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
<div class="col p-4 d-flex flex-column position-static">
  <strong class="d-inline-block mb-2 text-primary">${blogs[0].category}</strong>
  <h3 class="post-title mb-0">${blogs[0].title}</h3>
  <div class="mb-1 text-muted">${blogs[0].date}</div>
  <p class="card-text mb-auto">${blogs[0].description}</p>
  <a href="#">${blogs[0].link}</a>
</div>`