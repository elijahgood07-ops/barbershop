const backdrop = document.querySelector(".backdrop")
const close = document.querySelector(".menu__close")
const openref = document.querySelector(".header__btn")


openref.addEventListener("click", ()=>{
    backdrop.classList.remove("ishiden")
})


close.addEventListener("click", ()=>{
    backdrop.classList.add("ishiden")
})


backdrop.addEventListener("click", (evt) =>{
if(evt.target===evt.currentTarget){
    backdrop.classList.add("ishiden")
}
})


window.addEventListener("keydown", (evt)=>{
    if(evt.code==="Escape"){
        backdrop.classList.add("ishiden")
    }
})