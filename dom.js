//------------------------RELATÓRIO IMPRESSO NO CONSOLE E MÉDIA DE IDADE DOS ANIMAIS--------------------//
console.log("RELATÓRIO IMPRESSO NO CONSOLE!")

const leao = "Leão" 
const mediaIdade1 = 15
const estaEmExtincao1 = false
const alimentacao1 = [`zebras, gnus, girafas, antílopes.`]

const lobo = "Lobo-guará"
const mediaIdade2 = 15
const estaEmExtincao2 = true
const alimentacao2 = [`frutos, roedores, aves, insetos, répteis.`]

const baleia = "Baleia-Azul"
const mediaIdade3 = 90
const estaEmExtincao3 = true
const alimentacao3 = [`Crustáceos, peixes, moluscos, zooplâncton.`] 

const mediaValores = ((mediaIdade1 + mediaIdade2 + mediaIdade3)/3)

console.log(`${leao.toUpperCase()}
Expectativa de Vida: ${mediaIdade1} anos
Esse animal está em extinção? ${estaEmExtincao1}
Do que se alimentam? ${alimentacao1}`)

console.log(`${lobo.toUpperCase()}
Expectativa de Vida: ${mediaIdade2} anos
Esse animal está em extinção? ${estaEmExtincao2}
Do que se alimentam? ${alimentacao2}`)

console.log(`${baleia.toUpperCase()}
Expectativa de Vida: ${mediaIdade3} anos
Esse Animal está em extinção? ${estaEmExtincao3}
Do que se alimentam? ${alimentacao3}`)

console.log("MÉDIA DE IDADE DOS ANIMAIS:")
console.log(`A média de idades dos animais são dê: ${mediaValores} anos.`)

//------------------------------------BOOLEANOS-----------------------------------//

animal1 = {
    animal: "Leão",
    mediaIdade: 20,
    estaEmExtincao: false,
    alimentacao: ['zebra', 'gnus', 'girafas', 'antílopes']
}
animal2 = {
    animal:"Lobo-Guará",
    mediaIdade: 15,
    estaEmExtincao: true,
    alimentacao: ['frutos', 'roedores', 'aves', 'insetos', 'répteis']
}
animal3 = {
    animal: "Baleia-Azul",
    mediaIdade: 90,
    estaEmExtincao: true,
    alimentacao: ['Crustáceos', 'peixes', 'moluscos', 'zooplâncton']
}
let animais = []

console.log("VERIFICAÇÃO BOOLEANA!")

 if (animal1.estaEmExtincao === true){
     animais.push(animal1)
}else {
     alert('Leão não está em extinção')
}
if (animal2.estaEmExtincao === true){
    animais.push(animal2)
}else {
    alert("Lobo-Guará está em extinção")
}
if (animal3.estaEmExtincao === true){
    animais.push(animal3)
}else {
    alert("Baleia-Azul está em extinção")
}

console.log(animais)

//------------------------------------DOM-------------------------------------//

function todosAnimais() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName("animalGeral");

    for (i = 0; i < x.length; i++) { 
        if  (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";
        }
    }
if(input === "")
alert("Digite o nome de algum animal!")
}