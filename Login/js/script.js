const email = 'wesleyanjosfullstack@gmail.com'
console.log(`Seu endereço de e-mail é ${email}`)

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('Clique no botão !')
})

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('Mouse sobre o formulário !')
})

document.getElementById('form-login').addEventListener('mouseleave', e => {
    console.log('Mouse saiu do formulário !')
})

document.getElementById('form-login').addEventListener('submit', e => {
    e.preventDefault()
    console.log('Formulário enviado ! Aqui vai o AJAX !')
})