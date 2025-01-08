let data = []

function renderTodo() {
    document.querySelector('.to-do').innerHTML = ''

    data.forEach(task => {
        let li = document.createElement('li')
        
        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="${task.id}">${task.title}</label>
            <button type="button">x</button></input>
        `
    
        li.querySelector('input').addEventListener('change', e => {
            if (e.target.checked) li.classList.add('complete')
            else li.classList.remove('complete')
        })

        li.querySelector('button').addEventListener('click', e => {
            let todoId = e.target.parentNode.querySelector('input').id.split('-')[1]
            let title = e.target.parentNode.querySelector('label').innerHTML
            
            if (confirm(`Deseja realmente excluir a tarefa ${title} ?`)) {
                data = data.filter(task => task.id !== parseInt(todoId))
                renderTodo()
            }
        })
        
        document.querySelector('.to-do').append(li)
    })
}

document.getElementById('new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        data.push({
            id: data.length + 1,
            title: e.target.value
        })

        e.target.value = ''
        renderTodo()
    }
})

renderTodo()