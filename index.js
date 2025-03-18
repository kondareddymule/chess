const chess = document.getElementById('chess');
const conflict = document.getElementById('conflict');

const queen = document.getElementById('queen')
const elephant = document.getElementById('elephant')
const horse = document.getElementById('horse')
const cross = document.getElementById('cross')

const reset = document.getElementById('reset')

let message = false;

let shape = 'queen'

reset.addEventListener('click', function() {
    message = false
    conflict.textContent = ""
    const elements = document.querySelectorAll('.green')
    for (let i=0; i < elements.length; i++) {
        elements[i].classList.remove('green')
        elements[i].textContent = ""
    }
})


let items = [] 

function handleclass(e, shape) {
    const target = e.target.id;
    const element = document.getElementById(target);
    if (!items.includes(element)) {
        items.push(element)
    }
    

    switch (shape) {
        case 'queen':
            if (element.classList.contains("green")) {
                element.classList.remove('green');
                element.textContent = ""
                let index = items.indexOf(element)
                items.splice(index,1)
            } else {
                element.classList.add('green');
                element.textContent = "♕"
            }

            grid = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });
            if(grid.length === 3) {
                let shift = grid.shift()
                const get = document.getElementById(shift.id)
                let index = items.indexOf(get)
                items.splice(index,1)
                get.classList.remove('green')
                get.textContent = ""
            }

            message = false;
            for (let i = 0; i < grid.length; i++) {
                for (let j = i + 1; j < grid.length; j++) {
                    if (grid[i].row === grid[j].row || grid[i].col === grid[j].col || Math.abs(grid[i].row - grid[j].row) === Math.abs(grid[i].col - grid[j].col))  {
                        message = true;
                        break;
                    }
                }
                if (message) {
                    break;
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break
        case 'elephant':
            if (element.classList.contains("green")) {
                element.classList.remove('green');
                element.textContent = ""
                let index = items.indexOf(element)
                items.splice(index,1)
            } else {
                element.classList.add('green');
                element.textContent = "♖"
            }

            grid = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });
            if(grid.length === 3) {
                let shift = grid.shift()
                const get = document.getElementById(shift.id)
                let index = items.indexOf(get)
                items.splice(index,1)
                get.classList.remove('green')
                get.textContent = ""
            }

            message = false;
            for (let i = 0; i < grid.length; i++) {
                for (let j = i + 1; j < grid.length; j++) {
                    if (grid[i].row === grid[j].row || grid[i].col === grid[j].col)  {
                        message = true;
                        break;
                    }
                }
                if (message) {
                    break;
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break

        case 'horse':
            if (element.classList.contains("green")) {
                element.classList.remove('green');
                element.textContent = ""
                let index = items.indexOf(element)
                items.splice(index,1)
            } else {
                element.classList.add('green');
                element.textContent = "♘"
            }

            grid = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });
            if(grid.length === 3) {
                let shift = grid.shift()
                const get = document.getElementById(shift.id)
                let index = items.indexOf(get)
                items.splice(index,1)
                get.classList.remove('green')
                get.textContent = ""
            }

            message = false;
            for (let i = 0; i < grid.length; i++) {
                for (let j = i + 1; j < grid.length; j++) {
                    if(grid[i].row === grid[j].row - 1 && grid[i].col === grid[j].col - 2 ||  
                        grid[i].row === grid[j].row + 1 && grid[i].col === grid[j].col + 2 || 
                        grid[i].row === grid[j].row - 1 && grid[i].col === grid[j].col + 2 || 
                        grid[i].row === grid[j].row + 1 && grid[i].col === grid[j].col - 2 || 
                        grid[i].row === grid[j].row + 2 && grid[i].col === grid[j].col - 1 || 
                        grid[i].row === grid[j].row - 2 && grid[i].col === grid[j].col + 1 ||
                        grid[i].row === grid[j].row - 2 && grid[i].col === grid[j].col - 1 || 
                        grid[i].row === grid[j].row + 2 && grid[i].col === grid[j].col + 1)  {
                        message = true;
                        break;
                    }
                }
                if (message) {
                    break;
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break

        case 'cross':
            if (element.classList.contains("green")) {
                element.classList.remove('green');
                element.textContent = ""
                let index = items.indexOf(element)
                items.splice(index,1)
            } else {
                element.classList.add('green');
                element.textContent = "♗"
            }

            grid = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });
            if(grid.length === 3) {
                let shift = grid.shift()
                const get = document.getElementById(shift.id)
                let index = items.indexOf(get)
                items.splice(index,1)
                get.classList.remove('green')
                get.textContent = ""
            }

            message = false;
            for (let i = 0; i < grid.length; i++) {
                for (let j = i + 1; j < grid.length; j++) {
                    if (Math.abs(grid[i].row - grid[j].row) === Math.abs(grid[i].col - grid[j].col))  {
                        message = true;
                        break;
                    }
                }
                if (message) {
                    break;
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break
        default:
            break

    }
}

let count = 0;

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const box = document.createElement('div');
        box.id = count;
        box.classList.add("box");
        if ((i + j) % 2 === 0) {
            box.classList.add('light');
        } else {
            box.classList.add('dark');
        }
        box.addEventListener('click', (e) => handleclass(e,shape))
        chess.append(box);
        count++;
    }
}


function userselect(button) {
    switch (button) {
        case 'queen':
            shape = 'queen'
            const elementsqueen = document.querySelectorAll('.green')
            for (let i=0; i < elementsqueen.length; i++) {
                elementsqueen[i].classList.remove('green')
                elementsqueen[i].textContent = ""
                items = []
                conflict.textContent = "";
            }
            break
        case 'elephant':
            shape = 'elephant'
            const elementsele = document.querySelectorAll('.green')
            for (let i=0; i < elementsele.length; i++) {
                elementsele[i].classList.remove('green')
                elementsele[i].textContent = ""
                items = []
                conflict.textContent = "";
            }
            break;
        case 'horse':
            shape = 'horse'
            const elementsh = document.querySelectorAll('.green')
            for (let i=0; i < elementsh.length; i++) {
                elementsh[i].classList.remove('green')
                elementsh[i].textContent = ""
                items = []
                conflict.textContent = "";
            }
            break;
        case 'cross':
            shape = 'cross'
            const elementscross = document.querySelectorAll('.green')
            for (let i=0; i < elementscross.length; i++) {
                elementscross[i].classList.remove('green')
                elementscross[i].textContent = ""
                items = []
                conflict.textContent = "";
            }
            break;
        default:
            break
    }
}

queen.addEventListener('click', () => userselect('queen'))
elephant.addEventListener('click', () => userselect('elephant'))
horse.addEventListener('click', () => userselect('horse'))
cross.addEventListener('click', () => userselect('cross'))

