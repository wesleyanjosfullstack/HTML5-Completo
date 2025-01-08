let data = []

function renderTodo() {
    document.querySelector('.to-do').innerHTML = ''

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
}

document.getElementById('new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        data.push({
            id: data.length++,
            title: e.target.value
        })

        e.target.value = ''
        renderTodo()
    }
})

renderTodo()