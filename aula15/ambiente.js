let num = [5,8,3,4]
num[4] = 6 // adiciona valores ao elemento indicado 
num.push(9) //adiciona valor criando um último elemento
num.length // número de elementos 
num.sort() // coloca os valores em ordem 
console.log(`Nosso vetor é o ${num}`)
console.log(`O Array tem ${num.length} elementos.`)
console.log(`O primeiro valor do Array é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

