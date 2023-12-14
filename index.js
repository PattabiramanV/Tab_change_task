"use strict"



// Three_btn[1].addEventListener("click",()=>{my_Fun(this)});
// Three_btn[2].addEventListener("click",()=>{my_Fun(this)});

let Card_obj=[
    {
    src:"River_1.jpg",
    h2_heading:"History:",
    Content:"Lorem ipsum, or lipsum as it is sometimes known, is dummy"+
   " text used in laying out print, graphic or web designs."+
   "  The passage is attributed to an unknown typesetter in "+
    " the 15th century who is thought to have scrambled parts. "

    },

    {
        src:"river2.webp",
        h2_heading:"Vision:",
        Content:"In particular, the garbled words of lorem ipsum bear an "+
       " unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with"+
       " the most notable passage excerpted below:"
    },

    {
        src:"river3.jpeg",
        h2_heading:"Goals:",
        Content:"So how did the classical Latin become so incoherent? According "+
        "to McClintock, a 15th century typesetter likely scrambled part of "+
        "Cicero's De Finibus in order to provide placeholder text to mockup "+
        "various fonts for a type specimen book."



    }




]

// let Three_btn=document.getElementsByTagName("button")
// Three_btn[0].addEventListener("click",function(){my_Fun(this)});
// Three_btn[1].addEventListener("click",function(){my_Fun(this)});
// Three_btn[2].addEventListener("click",function(){my_Fun(this)});

// Three_btn[0].classList.add("History_btn");
// let left_img=document.getElementById("left_img");
// let para_content=document.querySelector("#para");
// let h2_Title=document.querySelector("#h2_Title");

// function my_Fun(x){

// x.focus();
//     if(x == Three_btn[0]){
// left_img.src=Card_obj[0].src;
// para_content.innerHTML=Card_obj[0].Content;
// h2_Title.innerHTML=Card_obj[0].h2_heading;

      
//     }
//   else if(x==Three_btn[1]){


//     left_img.src=Card_obj[1].src;
//     para_content.innerHTML=Card_obj[1].Content;
//     h2_Title.innerHTML=Card_obj[1].h2_heading; 
//     Three_btn[0].classList.remove("History_btn");

//   }

//   else{
   
//     left_img.src=Card_obj[2].src;
//     para_content.innerHTML=Card_obj[2].Content;
//     h2_Title.innerHTML=Card_obj[2].h2_heading;
//     Three_btn[0].classList.remove("History_btn");
//     console.log(x);
//   }

// }

//.....................Another Method.....................//

let Three_btn = document.querySelectorAll("button");


let left_img = document.getElementById("left_img");
let para_content = document.querySelector("#para");
let h2_Title = document.querySelector("#h2_Title");

let firstClick = true;
let hov_none = Three_btn[0];
hov_none.classList.add("hover_none");
hov_none.classList.add("white_back");


Three_btn.forEach((main,index) => {
    main.addEventListener("click", () => {

        hov_none.classList.remove("hover_none");
        hov_none.classList.remove("white_back");

        // main.focus();

        hov_none = main;
    
        console.log(main);
        hov_none.classList.add("hover_none");
        hov_none.classList.add("white_back")

        left_img.src = Card_obj[index].src;
        para_content.innerHTML = Card_obj[index].Content;
        h2_Title.innerHTML = Card_obj[index].h2_heading;
      
    })
});

