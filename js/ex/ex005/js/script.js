let num = document.getElementById('txtn')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}
function add() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor adicinado: ${num.value}`
    list.appendChild(item)

    // let n = Number(num.value)
    // let c = 1
    // while(c <= 100){
      //   item.value = `list${c}`
      // }
    } else {
      window.alert('Número digitado encontrasse na lista ou é inválido!')
    }
    num.value = ''
    num.fu
}
