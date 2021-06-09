
function somar(a, b) {
    var a = document.getElementById("txtn1")
    var b = document.getElementById("txtn2")
    var res = document.getElementById("resultado")
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    res.innerHTML = `A operação de soma é ${n1} + ${n2} = ${n1+n2}`
}

function subtrair(a, b) {
    var d = document.getElementById("txtn3")
    var e = document.getElementById("txtn4")
    var res2 = document.getElementById("resultado2")
    var n3 = Number(d.value)
    var n4 = Number(e.value)
    res2.innerHTML = `A operação de soma é ${n3} - ${n4} = ${n3-n4}`
}

