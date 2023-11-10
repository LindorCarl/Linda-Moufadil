const images = [...document.querySelectorAll('.image')];
const text = [...document.querySelectorAll('.article_data')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

const largeImage = document.querySelector('.large-image');
const textImage = document.querySelector('.text-largeImg');
//const descriptionTitle = document.querySelector('.descriptionTitle');
//const descriptionText = document.querySelector('.descriptionText');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');



//const gallery  = document.querySelectorAll(".image");
//previewBox = document.querySelector(".preview-box"), //popup
//previewImg = previewBox.querySelector("img"),  //popup
//closeIcon = previewBox.querySelector(".icon"),
currentImg = document.querySelector(".popup .index .current-img"),
totalImg = document.querySelector(".popup .index .total-img"),
//shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < images.length; i++) {
        //imageIndex.textContent = images.length; //passing total img length to totalImg variable
        totalImg.textContent = images.length;
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        images[i].onclick = () =>{
          
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
              currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = images[newIndex].getAttribute('src');
                largeImage.src = imageURL; //passing user clicked img url in previewImg src
                
                let txt = text[newIndex];
                textImage.innerHTML = txt.innerHTML;
                
            }
            preview(); //calling above function
    
            //const prevBtn = document.querySelector(".prev");
            //const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
              leftArrow.style.display = "none"; 
            }
            if(newIndex >= images.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
              rightArrow.style.display = "none"; 
            }
            leftArrow.onclick = ()=>{ 
                newIndex--; //decrement index
                
                if(newIndex == 0){
                    preview(); 
                    leftArrow.style.display = "none"; 
                    
                }else{
                    preview();
                    rightArrow.style.display = "block";
                    
                } 
            }
            rightArrow.onclick = ()=>{ 
                newIndex++; //increment index
                
                if(newIndex >= images.length - 1){
                    preview(); 
                    rightArrow.style.display = "none";
                }else{
                    preview(); 
                    leftArrow.style.display = "block";
                }
            }

            popup.classList.toggle('active');
        }
    } 
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active')
})

