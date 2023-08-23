function palindromo(str) {
  let reverso = str.split("").reverse().join("");
  return str === reverso;
}

console.log(palindromo("121"));
