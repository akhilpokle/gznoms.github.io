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
                    <img class="restaurant_image" src="${yuck[1][5]}">
                        <div class="list_content">
                            <div class="rating">
                                <img src="assets/no.svg">
                                <img src="assets/no.svg">
                                <img src="assets/no.svg">
                            </div>
                    <h2 class="name">${yuck[1][0]}</h2>
                    <p class="location">${yuck[1][4]}</p>
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
