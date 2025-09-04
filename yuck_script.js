window.onload = (e) => {
    load_list();
}

function load_list(){
    let list = document.getElementById('grid_list');
    for(let i=0;i<yuck.length;i++){
        let ratings ="";
        for(let j=0;j<yuck[i][1];j++){
            ratings+=`<img src="assets/no.svg">`;
        }

        let newdiv = `
            <div class="list_item" data-id=${i} onclick="showpopup(${i})">
                    <img class="restaurant_image" src="${yuck[i][5]}">
                        <div class="list_content">
                            <div class="rating">
                                ${ratings}
                            </div>
                    <h2 class="name">${yuck[i][0]}</h2>
                    <p class="location">${yuck[i][4]}</p>
                </div>
            </div>
        `;
       // console.log(newdiv);
        list.innerHTML += newdiv;
    }
}

function showpopup(parameter){
    console.log(parameter);
    document.getElementById('popup_restaurant_name').textContent = yuck[parameter][0];
    document.getElementById('popup_content_restaurant_image').setAttribute('src',yuck[parameter][5]);
    document.getElementById('popup_content_body').textContent = yuck[parameter][3];
    document.getElementById('popup_content_address').textContent = yuck[parameter][4];
    let rating = '';
    document.getElementById('popup_header_rating').innerHTML = '';
    for(let i=0;i<yuck[parameter][1];i++){
        rating += `<img src="assets/no.svg">`;
    }
    document.getElementById('popup_header_rating').innerHTML += rating;
    let popup= document.getElementById('popup_container');
    popup.style.display="block"; 
}

document.querySelector('.popup_close').addEventListener('click',()=>{
    let popup= document.getElementById('popup_container'); 
    popup.style.display = "none";
})
