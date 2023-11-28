var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
  console.log('Você ainda não vota!')
}else if (idade < 18 || idade > 65){
  console.log('o seu voto é opcinal!')
}else{
  console.log('o seu voto é obrigatório!')
}