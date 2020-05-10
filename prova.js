/*var totalDivida = 1400; 


function atualizarDivida(valorRecebido) { 
totalDivida -= valorRecebido; 
return totalDivida; 
} 

for (var i = 0; i < 12; i++) { 
atualizarDivida(70); 
console.log(totalDivida);
} */
var p1 = 7; 

function somaSubtrai(p1, p2){ 
p1++; 
p2--; 
return p1 + p2; 
} 

document.getElementById('paragrafo').innerHTML = somaSubtrai(3,5); 
