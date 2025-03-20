const chess = document.getElementById('chess');
const conflict = document.getElementById('conflict');

const queen = document.getElementById('queen')
const elephant = document.getElementById('elephant')
const horse = document.getElementById('horse')
const cross = document.getElementById('cross')

const reset = document.getElementById('reset')

let shape = 'queen'

reset.addEventListener('click', function() {
    message = false
    conflict.textContent = ""
    const elements = document.querySelectorAll('.green')
    const black = document.querySelectorAll('.black')
    for (let i=0; i < black.length; i++) {
        black[i].classList.remove('black')
        black[i].textContent = ""
    }

    for (let i=0; i < elements.length; i++) {
        elements[i].classList.remove('green')
        elements[i].textContent = ""
    }
    shape = 'queen'
})


let items = []

let grid = []

let shapecount = {}

function handleclass(e, shape) {
    const target = e.target.id;
    const element = document.getElementById(target)
    current = []
    let id = element.id
    let row = Math.floor(id/8)
    let col = id % 8
    current.push({row, col, id})

    switch (shape) {
        case 'queen':
            if (shapecount[shape] >= 2) {
                return;
            }
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }


            if (shapecount[shape] === 1) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                } else {
                    element.classList.add('green');
                    element.textContent = "♕"
                }
            }

            if (shapecount[shape] === 2) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                } else {
                    element.classList.add('black');
                    element.textContent = "♕"
                }
            }

            grid = []
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });



            message = false;
            if (grid.length > 1 ) {
                let current = grid[grid.length - 1]
                for (let i = 0; i < grid.length - 1; i++) {
                    if (current.row === grid[i].row || current.col === grid[i].col || 
                        Math.abs(current.row - grid[i].row) === Math.abs(current.col - grid[i].col))  {
                        message = true;
                        break;
                    }
                    if (message) {
                        break;
                    }
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break
        case 'elephant':
            if (shapecount[shape] >= 2) {
                return;
            }
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }
            if (shapecount[shape] === 1) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                    
                } else {
                    element.classList.add('green');
                    element.textContent = "♖"
                }
            }

            if (shapecount[shape] === 2) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                } else {
                    element.classList.add('black');
                    element.textContent = "♖"
                }
            }
            grid = []
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });

            console.log(items)
            console.log(grid)
            message = false;
            if (grid.length > 1 ) {
                let current = grid[grid.length - 1]
                for (let i = 0; i < grid.length - 1; i++) {
                    if (current.row === grid[i].row || current.col === grid[i].col)  {
                        message = true;
                        break;
                    }
                    if (message) {
                        break;
                    }
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break

        case 'horse':
            if (shapecount[shape] >= 2) {
                return;
            }
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] === 1) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                } else {
                    element.classList.add('green');
                    element.textContent = "♘"
                }
            }

            if (shapecount[shape] === 2) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                } else {
                    element.classList.add('black');
                    element.textContent = "♘"
                }
            }

            grid = [] 
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });

            console.log(items)
            console.log(grid)

            message = false;

            if (grid.length > 1 ) {
                let current = grid[grid.length - 1]
                for (let i = 0; i < grid.length - 1; i++) {
                    if(current.row === grid[i].row - 1 && current.col === grid[i].col - 2 ||  
                        current.row === grid[i].row + 1 && current.col === grid[i].col + 2 || 
                        current.row === grid[i].row - 1 && current.col === grid[i].col + 2 || 
                        current.row === grid[i].row + 1 && current.col === grid[i].col - 2 || 
                        current.row === grid[i].row + 2 && current.col === grid[i].col - 1 || 
                        current.row === grid[i].row - 2 && current.col === grid[i].col + 1 ||
                        current.row === grid[i].row - 2 && current.col === grid[i].col - 1 || 
                        current.row === grid[i].row + 2 && current.col === grid[i].col + 1)  {
                        message = true
                        break;
                    }
                    if (message) {
                        break;
                    }
                }
            }

            if (message) {
                conflict.textContent = "Conflict occurs";
            } else {
                conflict.textContent = ""
            }
            break;

        case 'cross':
            if (shapecount[shape] >= 2) {
                return;
            }
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] === 1) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                } else {
                    element.classList.add('green');
                    element.textContent = "♗"
                }
            }

            if (shapecount[shape] === 2) {
                if (!items.includes(element)) {
                    items.push(element)
                }
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""

                } else {
                    element.classList.add('black');
                    element.textContent = "♗"
                }
            }

            grid = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                grid.push({ row, col, id });
            });

            console.log(items)
            console.log(grid)

            message = false;
            if (grid.length > 1 ) {
                let current = grid[grid.length - 1]
                for (let i = 0; i < grid.length - 1; i++) {
                    if (Math.abs(current.row - grid[i].row) === Math.abs(current.col - grid[i].col)) {
                        message = true;
                        break;
                    }
                    if (message) {
                        break;
                    }
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
            conflict.textContent = ""
            break
        case 'elephant':
            shape = 'elephant'
            conflict.textContent = ""
            break;
        case 'horse':
            shape = 'horse'
            conflict.textContent = ""
            break;
        case 'cross':
            shape = 'cross'
            conflict.textContent = ""
            break;
        default:
            break
    }
}

queen.addEventListener('click', () => userselect('queen'))
elephant.addEventListener('click', () => userselect('elephant'))
horse.addEventListener('click', () => userselect('horse'))
cross.addEventListener('click', () => userselect('cross'))
