/*** If...else conditional statements ***/

//Create the variables 'userName' string; and 'userIsLoggedIn' boolean
const userName = 'Roe'
const userIsLoggedIn = true

// Display the mesage 'Welcome, username' only if the user is logged in; output the 'message' using the HTML element with id 'loginMessage'
if(userIsLoggedIn == true) {
    const message = 'Welcome, ' + userName
    document.getElementById('loginMessage').textContent = message
}


/*** Switch conditional statements ***/
//create the variable 'loginResult' integer; 'icon' without value
const loginResult = 0; 
let icon

//create a switch to compare values from 0 to 3
const $loginResult = document.getElementById('loginResult')

switch(loginResult) {
//asign, to the 'icon' variable, the string value of the name of an image... for every case. For example   case 0: icon = 'pass.png'
case 0:
    icon = 'pass.png' 
    break
case 1:
    icon = 'info.png' 
    break
case 2:
    icon = 'warning.png' 
    break
case 3:
    icon = 'error.png' 
    break
default:
icon = 'unknown.png'
}

//reasign the 'source attribute', of the HTML element with the id 'loginResult', with the concatenation of the string 'img/' and the avriable 'icon'
$loginResult.src = 'img/' + icon;




/*** Practice  ***/

//variable declaration
const $firstBlog  = document.getElementById('firstBlog')
const $secondBlog = document.getElementById('secondBlog')
const $jumbotron  = document.getElementById('jumbotron')
const $blogsContainer = document.getElementById('blogsContainer')

//Toggle functionnality using conditional statements
function toggleDarkMode(){
    if ($jumbotron.classList.contains('text-bg-dark')){
        $jumbotron.classList.remove('text-bg-dark')
    }else {
        $jumbotron.classList.add('text-bg-dark')
    }

}

//Display blogs
function selectBlogCategory(category){
//clear the HTML content of $secondBlog every time the function is called
$secondBlog.innerHTML = ""

// A. Through conditional statement 
   if ( category.textContent == "Web Dev I") {
        // the variable 'wdI_blog_html' and 'wdII_blog_html' comes from the script.js file
        $firstBlog.innerHTML = wdI_blog_html
   
   } else if ( category.textContent == "Web Dev II" ) {
        $firstBlog.innerHTML = wdII_blog_html
   } else {
        $firstBlog.innerHTML = wdI_blog_html
        $secondBlog.innerHTML = wdII_blog_html
   }

// B. Through Switch statement
    // switch(category.textContent){
    // case 'Wed Dev I':
    //     $firstBlog.innerHTML = wdI_blog_html
    //     break
    // case 'Wed Dev II': 
    //     $firstBlog.innerHTML = wdII_blog_html
    //     break
    // default: 
    //     $firstBlog.innerHTML = wdI_blog_html
    //     $secondBlog.innerHTML = wdII_blog_html
    // }

}



/*** Functions ***/

//String functions
console.log(userName.length)
console.log(userName.substring(0,3))
console.log(userName.replace('R', 'Roe'))
console.log(userName.toUpperCase())


//Write a function that prints in the console 'firstName' 'lastName' and 'age'
function printPersonInformation(firstName, lastName, age) 
{ 
console.log(`First name: ${firstName}` ) 
console.log( `Last name: ${lastName}` ) 
console.log( `Age: ${age}` )
document.getElementById('loginMessage').textContent = `Hi ${firstName} ${lastName}`
}
//execute the function
printPersonInformation('John', 'Doe', '20')



//Write a function that prints a new blog in the document

//variable declaration
let blogIndex = 0
let blogCategory 
let blogTitle 

// Function that receives two parameters. Those parameters are going to be used to displaye the title and category blog
function addBlog(parameter1, parameter2){
// Insert HTML code
$blogsContainer.innerHTML += 
`<div  class="col-md-6">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${parameter1}</strong>
            <h3 class="mb-0">${parameter2}</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
    </div>
</div>`

}

// retrieve the variable that contains the Button that allows the user to print a new blog
const $addBlogBtn = document.getElementById("addBlogBtn")

//addEventListener is used to listen any click on the $addBlogBtn, and when it happens... execute the anonymous function.
$addBlogBtn.addEventListener('click', function () {
    //Body of the anonymous function
    if(blogIndex < 4){
    blogCategory = blogs[blogIndex].category
    blogTitle = blogs[blogIndex].title

    // call the function to insert the HTML blog code
    addBlog(blogCategory, blogTitle)
    
    //Conditional statement to print something different when there is no more blogs to show. Note: this only works with 4 blogs in the array, later we will use a more dynamic approach
    }else if(blogIndex == 4){
        $blogsContainer.innerHTML += "<div>No more Blogs</div>"
    }
    // shorthand to add 1 to the index variable
    blogIndex++
})

//Write the login function
// function login () {
//     const message = 'Welcome, ' + userName
//     return message
// }