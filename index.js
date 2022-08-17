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
function searchMessage () {
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

messageSearch.addEventListener('keyup',searchMessage)

// hightlight messages card when message notification is clicked

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000)
})



