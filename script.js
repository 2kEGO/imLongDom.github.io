const img = document.getElementById('avatar-img');
let isZoomed = false;
let dropDown = document.getElementsByClassName("exp_info_dropdown");
const nameInsert = document.getElementById('name_insert');
const insertSection = document.getElementById('name-insert-section');
let guestName = document.getElementById('guest_name');
const submitButtonHover = document.getElementById('hover-submit-button');

// TOGGLE ZOOM AVATAR
function toggleZoom() {
    if (isZoomed) {
        img.style.transform = 'scale(1)';
        
    } else {
        img.style.transform ='scale(1.5)';
    }
    img.style.transition = 'transform 0.5s ease';
    isZoomed = !isZoomed;
}

// EXPERIENCE SHOW TOGGLE
function expandExperience(){
    document.getElementById('dropDown').classList.toggle("show");
};

function expandExperience2(){    
    document.getElementById('dropDown2').classList.toggle("show");
};

// SUBMIT NAME welcome page
function submitName () {
    const name = nameInsert.value;
    if (name !== ""){
        guestName.innerText = `Hi ${name}, Welcome to my page!`;
        insertSection.style.display = 'none';
    }else{
        document.getElementById('userWarning').classList.toggle("show");
        console.log('clicked')
    }
    
}


// Change button background

function toggleColorChange() {
    submitButtonHover.style.backgroundColor = 'Red';
}

function toggleColorChange2() {
    submitButtonHover.style.backgroundColor = 'Yellow'
}

// GET CONTACT SECTION

// STOP THE FORM FROM SUBMITTING 
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

// GET ALL ID VALUES
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
const phone = document.getElementById('phone').value;
const preferContact = document.getElementById('prefer-contact').value;

// SAVE FORM DATA TO LOCAL STORAGE
localStorage.setItem('contactFormData', JSON.stringify({
    name, email, message, phone, preferContact
}));

// SHOW ALERT FOR SAVED DATA
alert('Form data saved!');
});

// CLEAR FORM DATA ON RESET
document.getElementById('form').addEventListener('reset', function() {
    alert('Form cleared');
  });
