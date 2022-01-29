// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome: "Larissa",
    idade:"22",
    altura: 1.47
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.artistaPreferida = "Beyoncé"
// Remova uma propriedade desse objeto.
delete eu.altura  
//Mostre no console todas as propriedades desse objeto.
console.log(eu)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
 let cadastro = [
  {
     nome: "Larissa",
     idade:22,
     telefone:11930048111,
     amigos: ["Andreina", "Bianca", "Barbara", "Ghislain"],
 },
 {
     nome: "Andreina",
     idade:20,
     telefone:14930048123,
     amigos:["Bianca", "Barbara", "Ghislain", "Larissa"],
 },
 {
     nome: "Bianca",
     idade:21,
     telefone:17930048321,
     amigos:["Andreina", "Larissa", "Barbara", "Ghislain"],
 },
 {
     nome: "Barbara",
     idade:26,
     telefone:14930048134,
     amigos:["Larissa", "Bianca", "Andreina", "Ghislain"],
 },
 {
     nome: "Ghislain",
     idade:24,
     telefone:11930048555,
     amigos:["Andreina", "Bianca", "Barbara", "Larissa"],
 }]
 console.log(cadastro)
 console.log(cadastro[1].amigos[1], cadastro[2].amigos[2],cadastro[3].amigos[3],cadastro[0].amigos[0])
