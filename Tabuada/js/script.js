let tabuada = document.querySelector('#tabuada tbody')
let valueA = 100
tabuada.innerHTML = ''

for (let valueB = 0; valueB <= 10; valueB++) {
    let result = valueA * valueB
    let template = `
                <tr>
                    <td>${valueA}</td>
                    <td>X</td>
                    <td>${valueB}</td>
                    <td>=</td>
                    <td>${result}</td>
                </tr>
    `
    let tr = document.createElement('tr')
    tr.innerHTML = template
    tabuada.append(tr)
}