const someForm = document.forms.someForm;

// const sendButton = someForm.sendButton;
// console.log(sendButton);
// sendButton.addEventListener('click', () => {
//     const nameValue = someForm.name.value;
//     const surnameValue = someForm.surname.value;
//     const ageValue = someForm.surname.age;
//     let obj = {nameValue,surnameValue,ageValue}
//     console.log(obj);
//
// });

// someForm.onsubmit = function () {};
const target = document.getElementById('target');

someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = +someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue}
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
});