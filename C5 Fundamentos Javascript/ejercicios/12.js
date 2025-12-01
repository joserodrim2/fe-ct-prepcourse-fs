function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  return str1.length === str2.length;
}
str1 = "Hola";
str2 = "Chau";

console.log(tienenMismaLongitud(str1, str2));

module.exports = tienenMismaLongitud;