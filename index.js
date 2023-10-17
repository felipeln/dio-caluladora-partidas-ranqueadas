function matchBalanceCalculator(winQtd,loseQtd) {
  const result = winQtd - loseQtd
  return result
}

const player = {
  win: 120,
  lose: 30,
}

function rakingCalculator(number) {
  let ranking
  switch (true) {
    case number <= 10:
      ranking = 'Ferro'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 11 && number <= 20:
      ranking = 'Bronze'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 21 && number <= 50:
      ranking = 'Prata'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 51 && number <= 80:
      ranking = 'Ouro'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 81 && number <= 90:
      ranking = 'Diamante'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 91 && number <= 100:
      ranking = 'Lendário'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
    case number >= 101:
      ranking = 'Imortal'
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
  
    default:
      console.log(
        `O Herói tem de saldo de ${number} está no nível de ${ranking}`
      )
      break;
  }
}


rakingCalculator(matchBalanceCalculator(player.win,player.lose))