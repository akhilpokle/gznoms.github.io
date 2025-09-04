// new code

//tabs 
function showtab(evt, tabName) {
    console.log(evt);
    //hiding all tab content
    let tab_content = document.getElementsByClassName("tab_content");
    for (let i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    // hiding all button styles.
    let tab_button = document.getElementsByClassName("tab_button");
    for (let i = 0; i < tab_button.length; i++) {
        tab_button[i].className = tab_button[i].className.replace(" active", "");
    }

    // connecting button with the tab.
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = (e) => {
    loader();
    document.querySelector(".tab_button").click();
    load_list();
}

//pop up triggers
document.querySelector('.beans_button').addEventListener('click',(e)=>{
    //showpopup("random");
    let k=0;
        while(k<6){
            animate_face(k);
            k++;
        }
        function animate_face(k){
            setTimeout(function(){
               if(k==0 || k==3){
                    document.getElementById('intro_image').src = 'assets/gz_hmph.svg';
               }else if(k==1||k==4){
                    document.getElementById('intro_image').src = 'assets/gz_gasp.svg';
               }else{
                    document.getElementById('intro_image').src = 'assets/gz_duck.svg';
               }
            },500*k);
        }
        setTimeout(()=>{
            let popup= document.getElementById('popup_container');
            popup.style.display="block"; 
            showpopup(Math.floor(Math.random() * (details.length)));
        },3000);
})

function showpopup(parameter){
    console.log(parameter);
    document.getElementById('popup_restaurant_name').textContent = details[parameter][0];
    document.getElementById('popup_content_restaurant_image').setAttribute('src',details[parameter][5]);
    document.getElementById('popup_content_body').textContent = details[parameter][2];
    document.getElementById('popup_content_address').textContent = details[parameter][4];
    let rating = '';
    let cost ='';
    document.getElementById('popup_header_rating').innerHTML = '';
    document.getElementById('popup_header_cost').innerHTML = '';
    for(let i=0;i<details[parameter][1];i++){
        rating += `<img src="assets/cup_red.svg">`;
    }
    for(let i=0;i<details[parameter][3];i++){
        cost += `<img src="assets/bag_black.svg">`;
    }
    document.getElementById('popup_header_rating').innerHTML += rating;
    document.getElementById('popup_header_cost').innerHTML += cost;
    let popup= document.getElementById('popup_container');
    popup.style.display="block"; 
}

document.querySelector('.popup_close').addEventListener('click',()=>{
    let popup= document.getElementById('popup_container'); 
    popup.style.display = "none";
})

// cards 
function load_list(){
    let list = document.getElementById('grid_list');
    for(let i=0;i<details.length;i++){
        let ratings ="";
        for(let j=0;j<details[i][1];j++){
            ratings+=`<img src="assets/cup_red.svg">`;
        }

        let newdiv = `
            <div class="list_item" data-id=${i} onclick="showpopup(${i})">
                    <img class="restaurant_image" src="${details[i][5]}">
                        <div class="list_content">
                            <div class="rating">
                                ${ratings}
                            </div>
                    <h2 class="name">${details[i][0]}</h2>
                    <p class="location">${details[i][4]}</p>
                </div>
            </div>
        `;
       // console.log(newdiv);
        list.innerHTML += newdiv;
    }
    list.innerHTML += `
            <div class="list_item" onclick="redirect_yuck()">
                    <img class="restaurant_image" src="${yuck[2][5]}">
                        <div class="list_content">
                            <div class="rating">
                                <img src="assets/no.svg">
                                <img src="assets/no.svg">
                                <img src="assets/no.svg">
                            </div>
                    <h2 class="name">${yuck[2][0]}</h2>
                    <p class="location">${yuck[2][4]}</p>
                </div>
            </div>
        `;
}


function loader(){
    let k=0;
    while(k<10){
        animate_face(k);
        k++;
    }
    function animate_face(k){
        setTimeout(function(){
            if(k==0 || k==3 || k==6 || k==9){
                //document.getElementById('intro_image').src = 'assets/gz_hmph.svg';
               swapimage('2');
            }else if(k==1||k==4 || k== 7){
                swapimage('3');
                //document.getElementById('intro_image').src = 'assets/gz_gasp.svg';
            }else{
                swapimage('1')
                //document.getElementById('intro_image').src = 'assets/gz_duck.svg';
            }
        },300*k);
    }
    setTimeout(()=>{
        let loader= document.getElementById('loader');
        loader.style.display = 'none'; 
    },3000);
}

function swapimage(x){
    let images = document.getElementsByClassName('loader_image');
    for(i=0;i<images.length;i++){
        images[i].src=`assets/load${x}.svg`;
    }
}

function redirect_yuck(){
    window.location.href = 'yuck.html';
}

























// old code


/*
function showAnimation(){
    let fetch = details[Math.floor(Math.random() * (details.length))];
    document.getElementById('restaurant_name').innerText=fetch[0];
    document.getElementById('restaurant_rating').innerText=fetch[1];
    document.getElementById('restaurant_review').innerText=fetch[2];
    document.getElementById('restaurant_location').href=fetch[3];
    document.getElementById('restaurant_image').src=fetch[4];
}

function showDetails(){
    let fetch = details[Math.floor(Math.random() * (details.length))];
    document.getElementById('restaurant_name').innerText=fetch[0];
    document.getElementById('restaurant_rating').innerText=fetch[1];
    document.getElementById('restaurant_review').innerText=fetch[2];
    document.getElementById('restaurant_location').href=fetch[3];
    document.getElementById('restaurant_image').src=fetch[4];
}
*/

/*
let refresh = document.getElementsByClassName('refresh')[0].addEventListener("click",(e)=>{

    //const intervalId = setInterval(showAnimation, 1000);

    setTimeout(() => {
            clearInterval(intervalId);
            console.log("Interval stopped.");
        }, 5000);
    for(i=0;i<20;i++){
        setTimeout(showAnimation,i*100);    
    }
    showDetails();
});




function load_list(){
    console.log("yo");
    let list = document.getElementById('list_wrapper');
    for(let i=0;i<details.length;i++){

        // creating a list element
        let newitem = document.createElement("li");

        //creating required children for content.
        let restaurant_name = document.createElement("p");
        restaurant_name.textContent = details[i][0];

        let restaurant_rating = document.createElement("p");
        restaurant_rating.textContent = details[i][1]

        let restaurant_review = document.createElement("p");
        restaurant_review.textContent = details[i][2];
        
        let restaurant_location = document.createElement("a");
        restaurant_location.href = details[i][3]

        let restaurant_image = document.createElement("img");
        restaurant_image.src = details[i][4]


        //creating required div blocks for styling.
        let horizontal_wrapper = document.createElement("div");
        
        //adding name and rating on one line. 
        horizontal_wrapper.appendChild(restaurant_name);
        horizontal_wrapper.appendChild(restaurant_rating);

        newitem.appendChild(restaurant_image);
        newitem.appendChild(horizontal_wrapper);
        newitem.appendChild(restaurant_review);
        newitem.appendChild(restaurant_location);
        list.appendChild(newitem);

    }
}
    */

/*
important stuff : 
calculateImageCount() {
        // Calculate how many images we need to fill the screen
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        // Add some overlap to ensure full coverage
        const imagesHorizontal = Math.ceil(screenWidth / this.imageWidth) + 1;
        const imagesVertical = Math.ceil(screenHeight / this.imageHeight) + 1;
        this.totalImages = Math.max(15, imagesHorizontal * imagesVertical);
        this.imageDelay = this.animationDuration / this.totalImages;
    }

createRandomPosition() {
        // Calculate safe boundaries to ensure images don't go completely off-screen
        const maxX = window.innerWidth - 50; // Allow some overflow
        const maxY = window.innerHeight - 50;
        const x = Math.random() * (maxX + this.imageWidth) - this.imageWidth * 0.5;
        const y = Math.random() * (maxY + this.imageHeight) - this.imageHeight * 0.5;
        return { x, y };
    }


createImage() {
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.className = 'loading-image';
        const position = this.createRandomPosition();
        img.style.left = `${position.x}px`;
        img.style.top = `${position.y}px`;
        // Prevent image selection and dragging
        img.style.userSelect = 'none';
        img.style.pointerEvents = 'none';
        img.draggable = false;
        this.container.appendChild(img);
        this.images.push(img);
    }


class LoadingAnimation {
    constructor() {
        this.container = document.getElementById('loading-container');
        this.mainContent = document.getElementById('main-content');
        this.imageUrl = 'your-image.jpg'; // Replace with your actual image path
        this.animationDuration = 3000; // 3 seconds
        this.imageWidth = 323;
        this.imageHeight = 437;
        this.images = [];
        this.animationInterval = null;
        this.init();
    }
    init() {
        this.calculateImageCount();
        this.startAnimation();
    }
    calculateImageCount() {
        // Calculate how many images we need to fill the screen
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        // Add some overlap to ensure full coverage
        const imagesHorizontal = Math.ceil(screenWidth / this.imageWidth) + 1;
        const imagesVertical = Math.ceil(screenHeight / this.imageHeight) + 1;
        this.totalImages = Math.max(15, imagesHorizontal * imagesVertical);
        this.imageDelay = this.animationDuration / this.totalImages;
    }
    createRandomPosition() {
        // Calculate safe boundaries to ensure images don't go completely off-screen
        const maxX = window.innerWidth - 50; // Allow some overflow
        const maxY = window.innerHeight - 50;
        const x = Math.random() * (maxX + this.imageWidth) - this.imageWidth * 0.5;
        const y = Math.random() * (maxY + this.imageHeight) - this.imageHeight * 0.5;
        return { x, y };
    }
    createImage() {
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.className = 'loading-image';
        const position = this.createRandomPosition();
        img.style.left = `${position.x}px`;
        img.style.top = `${position.y}px`;
        // Prevent image selection and dragging
        img.style.userSelect = 'none';
        img.style.pointerEvents = 'none';
        img.draggable = false;
        this.container.appendChild(img);
        this.images.push(img);
    }
    startAnimation() {
        let imageCount = 0;
        this.animationInterval = setInterval(() => {
            if (imageCount < this.totalImages) {
                this.createImage();
                imageCount++;
            } else {
                this.completeAnimation();
            }
        }, this.imageDelay);
    }
    completeAnimation() {
        clearInterval(this.animationInterval);
        // Wait a bit after the last image appears, then hide loading screen
        setTimeout(() => {
            this.hideLoading();
        }, 500);
    }
    hideLoading() {
        // Hide the loading container
        this.container.classList.add('hidden');
        // Show main content
        this.mainContent.classList.add('visible');
        // Re-enable scrolling
        document.body.style.overflow = 'auto';
    }
    // Handle window resize during animation
    handleResize() {
        this.calculateImageCount();
    }
}
// Initialize the loading animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const loadingAnimation = new LoadingAnimation();
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            loadingAnimation.handleResize();
        }, 250);
    });
});
// Preload the image to ensure smooth animation
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}
// Optional: Preload image before starting animation
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await preloadImage('loader_image.png'); // Replace with your image path
        new LoadingAnimation();
    } catch (error) {
        console.error('Failed to load image:', error);
        // Start animation anyway or show error message
        new LoadingAnimation();
    }
});




*/







