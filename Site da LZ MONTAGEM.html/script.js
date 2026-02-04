const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
    reveals.forEach(r=>{
        if(r.getBoundingClientRect().top < window.innerHeight - 100){
            r.classList.add("active");
        }
    });
});

const vidro = document.getElementById("vidro");
const info = document.getElementById("infoVidro");

vidro.addEventListener("change",()=>{
    if(vidro.value==="") info.innerText="";
    else info.innerText="O vidro "+vidro.value+" oferece elegância, modernidade e excelente acabamento para móveis de alto padrão.";
});

