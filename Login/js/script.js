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
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log(`Seu e-mail ${email}`)
    console.log(`Seu e-mail ${password}`)

    let json = {
        email,
        password
    }

    // console.log(json);

    // let stringJSON = JSON.stringify(json)
    // console.log(stringJSON)

    // let jsonParse = JSON.parse(stringJSON)
    // console.log(jsonParse)

    if (!json.email) console.error('O campo email deve ser preenchido !')
    else if (!json.password) console.error('O campo password dese ser preenchido !')
    else console.info('Dados inseridos com sucesso!')
})