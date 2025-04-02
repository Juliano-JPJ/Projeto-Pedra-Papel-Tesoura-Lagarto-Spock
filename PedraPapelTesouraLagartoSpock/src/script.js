function jogar() {
  let escolhaUsuario = parseInt(
    prompt("Escolha:\n1: Pedra\n2: Papel\n3: Tesoura\n4: Lagarto\n5: Spock")
  );

  if (isNaN(escolhaUsuario) || escolhaUsuario < 1 || escolhaUsuario > 5) {
    alert("Escolha inválida! Digite um número de 1 a 5.");
    return;
  }

  let escolhaComputador = Math.floor(Math.random() * 5) + 1;

  let opcoes = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];
  alert("Você escolheu: " + opcoes[escolhaUsuario - 1]);
  alert("O computador escolheu: " + opcoes[escolhaComputador - 1]);

  if (escolhaUsuario === escolhaComputador) {
    alert("Empate!");
  } else if (
    (escolhaUsuario === 1 &&
      (escolhaComputador === 3 || escolhaComputador === 4)) ||
    (escolhaUsuario === 2 &&
      (escolhaComputador === 1 || escolhaComputador === 5)) ||
    (escolhaUsuario === 3 &&
      (escolhaComputador === 2 || escolhaComputador === 4)) ||
    (escolhaUsuario === 4 &&
      (escolhaComputador === 2 || escolhaComputador === 5)) ||
    (escolhaUsuario === 5 &&
      (escolhaComputador === 1 || escolhaComputador === 3))
  ) {
    alert("Você ganhou!");
  } else {
    alert("Você perdeu!");
  }
}
