//==================================================== SEMANA 1 ========================================================//

// console.log("RELATÓRIO IMPRESSO NO CONSOLE!")

// const leao = "Leão" 
// const mediaIdade1 = 15
// const estaEmExtincao1 = false
// const alimentacao1 = [`zebras, gnus, girafas, antílopes.`]

// const lobo = "Lobo-guará"
// const mediaIdade2 = 15
// const estaEmExtincao2 = true
// const alimentacao2 = [`frutos, roedores, aves, insetos, répteis.`]

// const baleia = "Baleia-Azul"
// const mediaIdade3 = 90
// const estaEmExtincao3 = true
// const alimentacao3 = [`Crustáceos, peixes, moluscos, zooplâncton.`] 

// const mediaValores = ((mediaIdade1 + mediaIdade2 + mediaIdade3)/3)

// console.log(`${leao.toUpperCase()}
// Expectativa de Vida: ${mediaIdade1} anos
// Esse animal está em extinção? ${estaEmExtincao1}
// Do que se alimentam? ${alimentacao1}`)

// console.log(`${lobo.toUpperCase()}
// Expectativa de Vida: ${mediaIdade2} anos
// Esse animal está em extinção? ${estaEmExtincao2}
// Do que se alimentam? ${alimentacao2}`)

// console.log(`${baleia.toUpperCase()}
// Expectativa de Vida: ${mediaIdade3} anos
// Esse Animal está em extinção? ${estaEmExtincao3}
// Do que se alimentam? ${alimentacao3}`)

// console.log("MÉDIA DE IDADE DOS ANIMAIS:")
// console.log(`A média de idades dos animais são dê: ${mediaValores} anos.`)

//==================================================== SEMANA 2 ========================================================//

// animal1 = {
//     animal: "Leão",
//     mediaIdade: 20,
//     estaEmExtincao: false,
//     alimentacao: ['zebra', 'gnus', 'girafas', 'antílopes']
// }
// animal2 = {
//     animal:"Lobo-Guará",
//     mediaIdade: 15,
//     estaEmExtincao: true,
//     alimentacao: ['frutos', 'roedores', 'aves', 'insetos', 'répteis']
// }
// animal3 = {
//     animal: "Baleia-Azul",
//     mediaIdade: 90,
//     estaEmExtincao: true,
//     alimentacao: ['Crustáceos', 'peixes', 'moluscos', 'zooplâncton']
// }
// let animais = []

// console.log("VERIFICAÇÃO BOOLEANA!")

//  if (animal1.estaEmExtincao === true){
//      animais.push(animal1)
// }else {
//      alert('Leão não está em extinção')
// }
// if (animal2.estaEmExtincao === true){
//     animais.push(animal2)
// }else {
//     alert("Lobo-Guará está em extinção")
// }
// if (animal3.estaEmExtincao === true){
//     animais.push(animal3)
// }else {
//     alert("Baleia-Azul está em extinção")
// }

// console.log(animais)

//==================================================== SEMANA 3 ========================================================//
// console.log(`-----------------EXERCÍCIO 1------------------------`) 

// for (let i in animal1.alimentacao) {
//     animalString1 = animal1.alimentacao.join(" ,")
//     console.log(animalString1)
// }
// console.log(`Animal: ${animal1.animal} \nMédia de anos de sobrevivência: ${animal1.mediaIdade} \nEstá em Extinção? ${animal1.estaEmExtincao} \nDo que se alimenta? "${animal1.alimentacao}"`)

// for (let i in animal2.alimentacao) {
//     animalString2 = animal2.alimentacao.join(" ,")
//     console.log(animalString2)
// }
// console.log(`Animal: ${animal2.animal} \nMédia de anos de sobrevivência: ${animal2.mediaIdade} \nEstá em Extinção? ${animal2.estaEmExtincao} \nDo que se alimenta? "${animal2.alimentacao}"`)

// for (let i in animal3.alimentacao) {
//     animalString3 = animal3.alimentacao.join(" ,")
//     console.log(animalString3)
// }
// console.log(`Animal: ${animal3.animal} \nMédia de anos de sobrevivência: ${animal3.mediaIdade} \nEstá em Extinção? ${animal3.estaEmExtincao} \nDo que se alimenta? "${animal3.alimentacao}"`)

// console.log(`-----------------EXERCÍCIO 2------------------------`) 

// let animais = [
//     {
//         animal: "Leão",
//         mediaIdade: 15,
//         estaemExtincao: false,
//         alimentacao: ['zebra', 'gnus', 'girafas', 'antílopes']
//     },{
//         animal:"Lobo-Guará",
//         mediaIdade: 15,
//         estaemExtincao: true,
//         alimentacao: ['frutos', 'roedores', 'aves', 'insetos', 'répteis']
//     },{
//         animal: "Baleia-Azul",
//         mediaIdade: 90,
//         estaemExtincao: false,
//         alimentacao: ['Crustáceos', 'peixes', 'moluscos', 'zooplâncton']
    
//     },]

// for(bichos of animais){   
//     for (propriedade in bichos){        
//        console.log(`${propriedade}: ${bichos[propriedade]}`)   
//         }
//       }

// console.log(`-----------------EXERCÍCIO 3------------------------`)      

// stringAnimais = ((parametro) =>{
//     for(i in parametro) {
//         console.log(`${i}:${parametro[i]}`)
//     }
// })
// stringAnimais(animal1)
// console.log(`----------------------------------------------------`)
// stringAnimais(animal2)
// console.log(`----------------------------------------------------`)
// stringAnimais(animal3)

// console.log(`-----------------EXERCÍCIO 4------------------------`)  

// verificacaoAnimais = ((animais, nome)=> {
//     let itensEncontrados = 0
//     for (i of animais){
//         if (i.animal.toLowerCase() === nome.toLowerCase()){
//             console.log(i)
//             itensEncontrados++
//         }
//     }
//     if (itensEncontrados === 0) {
//         alert (`Animal não encontrado!`)
//     }
// })
// let verificacaoSeTemAnimal = prompt ("Digite o nome de um animal:")
// verificacaoAnimais (animais, verificacaoSeTemAnimal)

//==========================================================================================//
