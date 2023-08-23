function primo(num) {
  var div = 0;
  for (var count = 1; count <= num; count++) if (num % count == 0) div++;

  if (div == 2) console.log("primo");
  else console.log("não primo");
}
primo(6);
