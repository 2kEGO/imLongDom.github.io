const img = document.getElementById('avatar-img');
let isZoomed = false;
let dropDown = document.getElementsByClassName("exp_info_dropdown");

function toggleZoom() {
    if (isZoomed) {
        img.style.transform = 'scale(1)';
        
    } else {
        img.style.transform ='scale(1.5)';
    }
    img.style.transition = 'transform 0.5s ease';
    isZoomed = !isZoomed;
}

function expandExperience(){
    document.getElementById('dropDown').classList.toggle("show");
};

function expandExperience2(){    
    document.getElementById('dropDown2').classList.toggle("show");
};