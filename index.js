// const button = document.getElementById('simple-button');
// const inputName = document.getElementById('name');
// const box = document.getElementById('box');


// // button.addEventListener('click', ()=> console.log('you clicked'));
// box.addEventListener('mouseover', () => console.log('you hover the mouse'));
// button.addEventListener('mousedown', () => console.log('you down the mouse'));
// button.addEventListener('mouseup', () => console.log('you up the mouse'));

const number = document.getElementById('number');

let counter = 0;
number.innerText = counter;

function increaseByOne() {
    counter++;
    number.innerText = counter;
}

button.addEventListener('click', increaseByOne)

// const show = document.getElementById('show-key');
// document.addEventListener('keydown', (event) => {
//     // console.log('how')

//     const key = event.key;
//     const isShift = event.shiftKey;

//     if (isShift) {
//         show.innerText += key.toUpperCase();
//     } else {
//         show.innerText += key;
//     }
// });

// document.addEventListener('keyup', (event) => {
//     show.innerText = " ";
// })
// console.log('hey')

// console.log('Mohd')
// document.addEventListener('keydown', (event) => {

//     console.log(event)

// }
// );

// const nameFocus = document.getElementById('name-focus');
// whatFocus = document.getElementById('what-focus');




const name1 = document.getElementById('input-name');
const email1 = document.getElementById('input-email');
const nameFocus = document.getElementById('name-focus')
const emailFocus = document.getElementById('email-focus')
const whatFocus = document.getElementById('what-focus')
const userName = document.getElementById('user-name');
const userForm = document.getElementById('user-name');


name1.addEventListener('click', () => {
    name1.focus();
})
emailFocus.addEventListener('click', () => {
    email1.focus();
})

name1.addEventListener('focus', () => {
    whatFocus.innerText = "Name";
})
email1.addEventListener('focus', ( )=>{
    whatFocus.innerText ="Email";
})


name1.addEventListener('blur', (event) => {
    if (event.target.value === '') {
        name1.style.border = '1px solid red';
    }
})
email1.addEventListener('blur', () => {
        if (event.target.value === '') {
        email1.style.border = '1px solid red';
    }
});

name1.addEventListener('change', ()=> {
    const valu = event.target.value;
    userName.innerText= valu;
})

const user =[
    {
        name: 'musharraf panwar',
        email : "musharrafpanwar@gmail.com",
    }
]

userForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const nameVal = event.target.title.value;
    const emailVal = event.target.content.value;
    user.push( {nameVal, emailVal});
    console.log(user);
});
    
