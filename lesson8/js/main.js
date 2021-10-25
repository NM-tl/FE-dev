const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];

let rainbow = hero.concat(native, destination).reverse();

rainbow.splice(1,1)

const In = rainbow.shift()

rainbow.pop()
rainbow.unshift('Richard')

rainbow = rainbow.concat(['Gave','Battle', In, 'Vain'])

colors = ['red', 'orange', 'yellow', 'lightblue', 'darkblue', 'purple']

rainbow2 = []

for(let i=0; i<colors.length; i++) {
    rainbow2.push(`<div class="info"><div class="circle" style="background: ${colors[i]}"></div><span>${rainbow[i]}</span></div>`)
}

// rainbow = rainbow.map((item, index) => `<span class="circle" style="background: ${colors[index]}"></span><span>${item}</span>`).join('')

document.write(`<div class="wrapper">${rainbow2.join('')}</div>`)
