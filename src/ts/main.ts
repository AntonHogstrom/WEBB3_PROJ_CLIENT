const courses_div = document.querySelector('#courses_div');
const works_div = document.querySelector('#works_div');
const websites_div = document.querySelector('#websites_div');





let api : {courses : string, works : string, websites : string};
let imgPath : string;

//localhost for private, devnoe.com for public
if(window.location.hostname == "localhost") {
    api = {
        courses: "http://localhost/portfolio_api/api/courses",
        works: "http://localhost/portfolio_api/api/works",
        websites: "http://localhost/portfolio_api/api/website"
    };
    imgPath = "http://localhost/portfolio_admin/pub/img/";
} else {
    api = {
        courses: "https://devnoe.com/MIUN/WEBB3PROJ/portfolio_api/API/courses.php",
        works: "https://devnoe.com/MIUN/WEBB3PROJ/portfolio_api/API/works.php",
        websites: "https://devnoe.com/MIUN/WEBB3PROJ/portfolio_api/API/website.php"
    };
    imgPath = "https://devnoe.com/MIUN/WEBB3PROJ/portfolio_admin/img/";
}


//EVENTLISTENERS

//Get all courses, works, websites on window load
window.addEventListener('load', () => {
    getCourses();
    getWorks();
    getWebsites();
});





//FUNCTIONS

//Function for getting all courses
function getCourses() {


    fetch(api.courses)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to fetch");
        }
    })
    .then(data => {
        if(!data.message) {
            //for each course, print html
            data.forEach((course : {code: string, courseName: string, startDate: string, endDate: string, university: string}) => {
                courses_div.insertAdjacentHTML("beforeend", 
                            `
                        <div class="courses">
                            <ul>
                                <li><span class="bold">Code: </span><span class="liData">${course.code}</span></li>
                                <li><span class="bold">Name: </span><span class="liData">${course.courseName}</span></li>
                                <li><span class="bold">University: </span><span class="liData">${course.university}</span></li>
                                <li><span class="bold">Start: </span><span class="liData">${course.startDate}</span></li>
                                <li><span class="bold">End: </span><span class="liData">${course.endDate}</span></li>
                            </ul>
                        </div>`)
            })
        } else {
            console.log("API: " + data.message);
        }
    })
    .catch(err => console.log(err));
}

//Function for getting all courses
function getWorks() {

    
    fetch(api.works)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to fetch");
        }
    })
    .then(data => {
        if(!data.message) {
            //for each works, print html

            data.forEach((works : {company: string, title: string, startDate: string, endDate: string}) => {
                works_div.insertAdjacentHTML("beforeend", 
                            `
                            <div class="works">
                                <ul>
                                    <li><span class="bold">Company: </span><span class="liData">${works.company}</span></li>
                                    <li><span class="bold">Title: </span><span class="liData">${works.title}</span></li>
                                    <li><span class="bold">Start Date: </span><span class="liData">${works.startDate}</span></li>
                                    <li><span class="bold">End Date: </span><span class="liData">${works.endDate}</span></li>
                                </ul>
                            </div>`)
            })
        } else {
            console.log("API: " + data.message);
        }
    })
    .catch(err => console.log(err));
}



//Function for getting all websites
function getWebsites() {

    
    fetch(api.websites)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to fetch");
        }
    })
    .then(data => {
        if(!data.message) {
            //for each website, print html
            data.forEach((websites : {title: string, img: string, website_url: string, created: string, about: string}) => {
                websites_div.insertAdjacentHTML("beforeend", 
                `
                <div class="websites"><a href="${websites.website_url}">
                    <picture>
                    <img src="${imgPath}${websites.img}" alt="${websites.title}">
                    </picture>
                    <div>
                        <h3>${websites.title}</h3>
                        <i>${websites.created}</i>
                        <p>${websites.about}</p>
                    </div></a>
                </div>`)
            })
        } else {
            console.log("API: " + data.message);
        }
    })
    .catch(err => console.log(err));
}