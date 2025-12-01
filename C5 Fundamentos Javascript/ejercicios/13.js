function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  return num < 90;  
}
num = 45;

console.log(menosQueNoventa(num));
module.exports = menosQueNoventa;