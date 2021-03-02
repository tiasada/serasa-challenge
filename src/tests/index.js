function User(score, hasBoost = true) {
  const history = []

  this.setScore = function (score) {
    this.score = score
  }

  this.setDebts = function (debts) {
    this.debts = debts
  }

  this.acceptOffer = () => {
    // Pagou sua negociação
    this.debts -= 1
    history.push({
      status: 'accept'
    })
  }

  this.brokenOffer = () => {
    // Quebrou algum acordo por nao ter pago a dívida ou apareceu mais uma negativaçāo no seu CPF
    this.debts += 1
    history.push({
      status: 'broken'
    })
  }

  this.getScore = function () {
    let boost = this.statusBoost()

    let boostMessage = ''
    let boostValue = null
    if (boost[1] != null) {
      boostValue = Math.round(boost[1])
    }

    if (boost[0] == 5) {
      boostMessage = 'Você não possui turbo disponível'
    } else if (boost[0] === 1) {
      boostMessage = 'Você pode aumentar seu Score em até'
    } else if (boost[0] === 2) {
      boostMessage = 'Você perdeu o turbo do seu Score'
    } else if (boost[0] === 3) {
      boostMessage = 'Você pode aumentar seu Score'
    } else if (boost[0] === 4) {
      boostMessage = 'Você ativou o turbo do seu Score'
    }

    return {
      score,
      boost: {
        status: boost[0],
        value: boostValue,
        message: boostMessage,
      },
    }
  }

  this.checkBoost = function () {
    if (!hasBoost) {
      // Verifica se ele possui o Turbo
      return undefined
    }

    let maxBoost = score < 500 ? score * 0.2 : score < 800 ? score * 0.05 : score * 0.03
    let available = maxBoost
    let lost = 0
    let pending = 0
    let complete = 0

    if (history.find(h => h.status === 'broken')) {
      // Caso o consumidor tenha alguma quebra de acordo / alguma divida ele perde o Turbo do Score
      available = null
      lost = maxBoost
    } else if (history.find(h => h.status === 'accept')) {
      let debtsPaid = history.filter(h => h.status === 'accept').length
      if (0 === this.debts) {
        // Caso o consumidor tenha pago todas suas dividas, ele tem um boost completo e ativo!
        available = 0
        complete = maxBoost
      } else {
        // O consumidor não terminou de pagar suas contas é não quebrou nenhum acordo
        available = maxBoost / (this.debts + debtsPaid)
        pending = maxBoost - available
      }
    }

    return {
      available,
      lost,
      pending,
      complete,
    }
  }

  this.statusBoost = function () {
    let boost = this.checkBoost()
    /*
    1 = Disponivel
    2 = Perdido
    3 = Pendente
    4 = Completo
    5 = Indisponível
    */
    if (boost == null) {
      return [5, null]
    } else if (boost.lost) {
      return [2, boost.lost]
    } else if (boost.pending) {
      return [3, boost.pending]
    } else if (boost.available) {
      return [1, boost.available]
    } else if (!boost.available && !boost.pending) {
      return [4, boost.complete]
    } else {
      return null
    }
  }
}


module.exports = User
