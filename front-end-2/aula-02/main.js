let pontoUsuario = 0
let maoMaquina = parseInt(Math.random() * 3 + 1)
switch (maoUsuario) {
        case "1":
            if (maoMaquina == 1) {
                pontoUniverso += 1
            }
            else if (maoMaquina == 2) {
            }
            else if (maoMaquina == 3) {
                pontoUsuario += 1
            }
            break;
        case "2":
            if (maoMaquina == 2) {
                pontoUniverso += 1
            }
            else if (maoMaquina == 3) {
            }
            else if (maoMaquina == 1) {
                pontoUsuario += 1
            }
            break;

        case "3":
            if (maoMaquina == 3) {
                pontoUniverso += 1
            }
            else if (maoMaquina == 1) {
            }
            else if (maoMaquina == 2) {
                pontoUsuario += 1
            }
            break;
    }
let res
switch (pontoUniverso) {
    case 3:
        alert("Você não ganho e nem perdeu!")
        break;
    case 2:
        res = pontoUsuario == 1 ? "Você ganhou o jogo!" : "Você perdeu o jogo!";
        alert(res)
        break;
    case 1:
        res = pontoUsuario == 2 ? "Você ganhou o jogo!" : pontoUsuario == 1 ? "Você não ganho e nem perdeu!" : "Você perdeu o jogo!";;
        alert(res)
        break;
    case 0:
        res = pontoUsuario > 1 ? "Você ganhou o jogo!" : "Você perdeu o jogo!";
        alert(res)
        break;
}
console.log(soma);