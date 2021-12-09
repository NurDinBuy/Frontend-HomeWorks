const innInput = document.querySelector('#innInput'),
    innBtn = document.querySelector('#innBtn'),
    innResult = document.querySelector('#innResult')

const innRegExp = /^012\d{13}$/

innBtn.addEventListener('click', () =>{
    if (innRegExp.test(innInput.value)){
        innResult.innerText = 'Success!';
        innResult.style.color = 'green'
    } else {
        innResult.innerText = 'Failed!'
        innResult.style.color = 'red'
    }
})