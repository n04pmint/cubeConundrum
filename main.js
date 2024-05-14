/* 
// PART 1 

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input', 'input.txt')
const input = fs.readFileSync(filePath, 'utf8')

let total = 0;

const lines = input.split('\r\n')

lines.forEach((line, index) => {
    console.log(`Line: ${line}`);
    console.log(`Index: ${index + 1}`);
    const group = line.split(': ')[1].split('; ');
    
    let haveBreak = false;
    group.forEach((g) => {
        let totalMap = {red: 0, green: 0, blue: 0};
        if (!haveBreak) {
            g.split(', ').forEach((colors) => {
                let splitColors = colors.split(' ');
                let number = splitColors[0]
                let color = splitColors[1]
                totalMap[color] = parseInt(number)
                if (totalMap['red'] > 12 || totalMap['green'] > 13 || totalMap['blue'] > 14) {
                    haveBreak = true
                }
            });
        };
        
    });
if (!haveBreak) {
    total += index + 1
}    

});
console.log(total)

*/

//PART 2


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input', 'input.txt')
const input = fs.readFileSync(filePath, 'utf8')

let total = 0;

const lines = input.split('\r\n')

lines.forEach((line, index) => {
    console.log(`Line: ${line}`);
    console.log(`Index: ${index + 1}`);
    const group = line.split(': ')[1].split('; ');

    let totalMap = {red: 0, green: 0, blue: 0};
    group.forEach((g) => {
        let inputMap = {red: 0, green: 0, blue: 0};
        let c = []
        g.split(', ').forEach((colors) => {
            let splitColors = colors.split(' ');
            let number = splitColors[0];
            let color = splitColors[1];
            c.push(color)
            inputMap[color] = parseInt(number);
            
        })

        for (index in c) {
            let color = c[index];
            console.log(color);
            totalMap[color] = Math.max(totalMap[color], inputMap[color])
        }
        
    })
    total += totalMap['red'] * totalMap['green'] * totalMap['blue']
    
})

console.log(total)








