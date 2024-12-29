const moon = document.getElementById("moon");
const body = document.querySelector("body")
let currMode = "light";
    moon.addEventListener("click",()=>{
        if(currMode==="light"){
            currMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
            moon.querySelector("i").classList.replace("fa-moon", "fa-sun");
        }
        else{
            currMode="light"
            body.classList.add("light");
            body.classList.remove("dark");
            moon.querySelector("i").classList.replace("fa-sun", "fa-moon");
        }
        console.log(currMode)
    });

// DOWNLOAD BUTTON
let download = document.querySelector("#downloadBtn");
let img = document.querySelector("img");
    
download.addEventListener("click", () => {
    let imgpath = img.getAttribute('src');
    let fileName = getFileName(imgpath);
    downloadImage(imgpath, fileName);
});
    
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1);
}
    
function downloadImage(imgpath, fileName) {
    let a = document.createElement('a');
    a.href = imgpath;
    a.download = fileName;
    a.click();
}
    

// TYPE-TEXT : typed js 

var typed = new Typed(".auto-type",{
    strings: ["Web Developer", "JavaScript Enthusiast", "Frontend Engineer",],
    typeSpeed:50,
    backSpeed:50,
    looped:true
})





// loader

