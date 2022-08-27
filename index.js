

// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//Remove active class from all the menuItems 
const changeActiveClass = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })    
}

menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveClass();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').
           style.display = 'none';
        }
        else{
         document.querySelector('.notification-popup').
            style.display = 'block';
        document.querySelector('#notification .notification-count').
            style.display = 'none';

        }
    })
})

// =========================Messages=======================
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search'); 



// search for messages in the search bar 
 // get message box 

// function for search
/*function searchMessage () {
    const val =  messageSearch.value.toLowerCase();
   // console.log(val)
    message.forEach(chat => {
    let name = chat.querySelectorAll('h5').textContent.toLowerCase();
    if(name.indexOf(val) != 1){
        chat.style.display = 'flex';
    }
    else{
        chat.style.display = 'none';
    }
    })
}

//messageSearch.addEventListener('keyup',searchMessage)
*/
// hightlight messages card when message notification is clicked

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000)
})
// Theme customization
const theme = document.querySelector('#theme');
const modalTheme = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// open modal
const openThemeModal = () => {
    modalTheme.style.display = "grid";
}

theme.addEventListener('click', openThemeModal);

// close modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        modalTheme.style.display = "none";
    }
    
}
modalTheme.addEventListener('click', closeThemeModal);

//============================FONTS===============
const removeActiveSelector = ()=>{
    fontSizes.forEach(size =>{
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    removeActiveSelector();
    let fontSize;
    size.classList.toggle('.active');
    size.addEventListener('click', () =>{
        if(size.classList.contains('font-size-1')){
            fontSize = "10px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = "13px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = "16px";
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize="19px";
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = "22px";
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        // changing the font size of the html root element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// removeActiveColor

const removeActiveColor = () =>{
    colorPalette.forEach(colorpicker =>{
        colorpicker.classList.remove('active');
    })
}

colorPalette.forEach(color =>{
    color.addEventListener('click', ()=>{
        let primary;
        removeActiveColor();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
// theme background
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness );
}

Bg1.addEventListener('click', ()=>{
    // add active class
    Bg1.classList.add('active');
    // remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    lightColorLightness = '15%';
    whiteColorLightness = '20%';

    // add active class
    Bg2.classList.add('active');
    // remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    lightColorLightness = '0%';
    whiteColorLightness = '10%';

    // add active class
    Bg3.classList.add('active');
    // remove active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})



