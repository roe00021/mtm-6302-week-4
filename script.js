//data
const blogs = [
    {
        category: 'Web dev I',
        title: 'HTML & CSS',
        date: 'Nov 12',
        description: 'HTML is the foundation for creating web pages and sharing information on the internet. Use CSS to style the webpages created in HTML for building pleasing and engaging sites & applications.',
        link: 'https://imdac.github.io/mtm6130/'
    },
    {
        category: 'Web Dev II',
        title: 'Responsive Design',
        date: 'Nov 11',
        description: 'Continue learning techniques to make web pages and images adapt to any size display and explore options for enhancing page performance.',
        link: 'https://imdac.github.io/mtm6201/'
    },
    {
        category: 'Web Dev I',
        title: 'HTML attributes',
        date: 'Nov 11',
        description: 'Continue learning techniques to make web pages and images adapt to any size display and explore options for enhancing page performance.',
        link: 'https://imdac.github.io/mtm6201/'
    },
    {
        category: 'Web Dev III',
        title: 'JS functions',
        date: 'Nov 11',
        description: 'Continue learning techniques to make web pages and images adapt to any size display and explore options for enhancing page performance.',
        link: 'https://imdac.github.io/mtm6201/'
    }
]



// HTML blog
const wdI_blog_html = 
   `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${blogs[0].category}</strong>
            <h3 class="mb-0">${blogs[0].title}</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
    </div>`

    const wdII_blog_html = 
    `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
         <div class="col p-4 d-flex flex-column position-static">
             <strong class="d-inline-block mb-2 text-primary">${blogs[1].category}</strong>
             <h3 class="mb-0">${blogs[1].title}</h3>
             <div class="mb-1 text-muted">Nov 12</div>
             <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
             <a href="#" class="stretched-link">Continue reading</a>
         </div>
         <div class="col-auto d-none d-lg-block">
             <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
         </div>
     </div>`


//functions
//Add event
const $list = document.getElementById('list')
$list.addEventListener('click', function (e) {
    if (e.target.classList.contains('item')) {
      e.target.classList.toggle('active')
      selectBlogCategory(e.target)
    }
})

//toggle a class
const $darkModeBtn = document.getElementById('darkModeBtn')
$darkModeBtn.addEventListener('click', 
    function(event) {
        toggleDarkMode(event.target)
    }
)