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

let shapecount = {}

function handleclass(e, shape) {
    const target = e.target.id;
    const element = document.getElementById(target);
    if (!items.includes(element)) {
        items.push(element)
    }

    console.log(items)
    

    switch (shape) {
        case 'queen':
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] > 2) {
                return;
            }
            if (shapecount[shape] === 1) {
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                    let gridIndex = grid.indexOf(element)
                    grid.splice(gridIndex,1)
                } else {
                    element.classList.add('green');
                    element.textContent = "♕"
                    return;
                }
            }

            if (shapecount[shape] === 2) {
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                    let gridIndex = grid.indexOf(element)
                    grid.splice(gridIndex,1)
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
            console.log(grid)


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
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] > 2) {
                return;
            }
            if (shapecount[shape] === 1) {
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                    
                } else {
                    element.classList.add('green');
                    element.textContent = "♖"
                    return;
                }
            }

            if (shapecount[shape] === 2) {
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                } else {
                    element.classList.add('black');
                    element.textContent = "♖"
                }
            }
            gridele = []
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                gridele.push({ row, col, id });
            });

            console.log(gridele)
            message = false;
            for (let i = 0; i < gridele.length; i++) {
                for (let j = i + 1; j < gridele.length; j++) {
                    if (gridele[i].row === gridele[j].row || gridele[i].col === gridele[j].col)  {
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
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] > 2) {
                return;
            }
            if (shapecount[shape] === 1) {
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                    let gridIndex = grid.indexOf(element)
                    grid.splice(gridIndex,1)
                } else {
                    element.classList.add('green');
                    element.textContent = "♘"
                    return;
                }
            }

            if (shapecount[shape] === 2) {
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                } else {
                    element.classList.add('black');
                    element.textContent = "♘"
                }
            }

            gridhorse = []
            
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                gridhorse.push({ row, col, id });
            });

            message = false;
            for (let i = 0; i < gridhorse.length; i++) {
                for (let j = i + 1; j < gridhorse.length; j++) {
                    if(gridhorse[i].row === gridhorse[j].row - 1 && gridhorse[i].col === gridhorse[j].col - 2 ||  
                        gridhorse[i].row === gridhorse[j].row + 1 && gridhorse[i].col === gridhorse[j].col + 2 || 
                        gridhorse[i].row === gridhorse[j].row - 1 && gridhorse[i].col === gridhorse[j].col + 2 || 
                        gridhorse[i].row === gridhorse[j].row + 1 && gridhorse[i].col === gridhorse[j].col - 2 || 
                        gridhorse[i].row === gridhorse[j].row + 2 && gridhorse[i].col === gridhorse[j].col - 1 || 
                        gridhorse[i].row === gridhorse[j].row - 2 && gridhorse[i].col === gridhorse[j].col + 1 ||
                        gridhorse[i].row === gridhorse[j].row - 2 && gridhorse[i].col === gridhorse[j].col - 1 || 
                        gridhorse[i].row === gridhorse[j].row + 2 && gridhorse[i].col === gridhorse[j].col + 1)  {
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
            if(shapecount[shape]) {
                shapecount[shape] += 1
            } else {
                shapecount[shape] = 1
            }

            if (shapecount[shape] > 2) {
                return;
            }
            if (shapecount[shape] === 1) {
                if (element.classList.contains("green")) {
                    element.classList.remove('green');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                } else {
                    element.classList.add('green');
                    element.textContent = "♗"
                    return;
                }
            }

            if (shapecount[shape] === 2) {
                if (element.classList.contains("black")) {
                    element.classList.remove('black');
                    element.textContent = ""
                    let index = items.indexOf(element)
                    items.splice(index,1)
                } else {
                    element.classList.add('black');
                    element.textContent = "♗"
                }
            }

            gridcross = [];
            items.forEach((item) => {
                const id = item.id;
                const row = Math.floor(id / 8);
                const col = id % 8;
                gridcross.push({ row, col, id });
            });

            message = false;
            for (let i = 0; i < gridcross.length; i++) {
                for (let j = i + 1; j < gridcross.length; j++) {
                    if (Math.abs(gridcross[i].row - gridcross[j].row) === Math.abs(gridcross[i].col - gridcross[j].col))  {
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
            items = []
            conflict.textContent = ""
            break
        case 'elephant':
            shape = 'elephant'
            items = []
            conflict.textContent = ""
            break;
        case 'horse':
            shape = 'horse'
            items = []
            conflict.textContent = ""
            break;
        case 'cross':
            shape = 'cross'
            items = []
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

