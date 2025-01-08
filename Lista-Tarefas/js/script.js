let data = [
    {
        id: 1,
        title: 'Estudar HTML5'
    }, {
        id: 2,
        title: 'Estudar CSS3'
    }, {
        id: 3,
        title: 'Estudar JS'
    }, {
        id: 4,
        title: 'Estudar PHP'
    }
]

data.forEach(task => {
    let li = document.createElement('li')
    
    li.innerHTML = `
        <input type="checkbox" id="task-${task.id}"><label for="${task.id}">${task.title}</label></input>
    `

    li.querySelector('input').addEventListener('change', e => {
        if (e.target.checked) li.classList.add('complete')
        else li.classList.add('remove')
    })
    
    document.querySelector('.to-do').append(li)
})

document.getElementById('new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter') console.log(e.target.value)
})