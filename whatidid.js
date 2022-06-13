const headerTag = document.querySelector("header");
const navTag = document.querySelectorAll("header .navButton a");
const bodyTag = document.querySelector("body");
const containerTag = document.querySelector(".container");
 
console.log(navTag);




document.addEventListener("scroll", function(){

  const pixeled = window.scrollY;

  if(pixeled >= headerTag.getBoundingClientRect().height){

    headerTag.classList.add("down");
  }  else{
    headerTag.classList.remove("down");
  }
})


const animatedTags = document.querySelectorAll(".aroimg img")
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})
console.log(animatedTags)
document.addEventListener("scroll", function () {

    let delay = 0.25;
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadeIn .5s ${delay}s both`;
            delay += 0.25;
        } else {
            tag.style.animation = "0";
        }
    })
})
