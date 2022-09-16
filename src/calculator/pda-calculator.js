export async function calculateProforma(pdaData) {
  // ============================== VARNA EAST FORMULAS ============================== //
  // ===============  Tonnage dues ================= //

  // console.log(pdaData)

  if (pdaData.type === "Tanker") {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.5
    )
  } else if (pdaData.type === "Container") {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55 * 0.6
    )
  } else if (pdaData.type === "Passenger") {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55 * 0.4
    )
  } else if (pdaData.type === "Navy") {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0
    )
  } else if (pdaData.type === "Docking") {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.05
    )
  } else {
    this.computedProforma.varnaEast.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55
    )
  }

  // =============== Berth dues ================= //

  if (pdaData.type === "Docking") {
    this.computedProforma.varnaEast.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1 * 0.5 * 0
    )
  } else if (pdaData.type === "Navy") {
    this.computedProforma.varnaEast.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1 * 0
    )
  } else {
    this.computedProforma.varnaEast.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1
    )
  }

  // =============== Pilotage In dues ================= //

  if (pdaData.type === "Passenger" && pdaData.loa <= 240) {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190 * 0.9
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220 * 0.9
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250 * 0.9
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290 * 0.9
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320 * 0.9
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350 * 0.9
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390 * 0.9
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430 * 0.9
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460 * 0.9
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500 * 0.9
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = (500 + b * 60) * 0.9
    }
  } else if (pdaData.type === "Passenger" && pdaData.loa > 240) {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190 * 0.8
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220 * 0.8
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250 * 0.8
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290 * 0.8
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320 * 0.8
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350 * 0.8
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390 * 0.8
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430 * 0.8
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460 * 0.8
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500 * 0.8
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = (500 + b * 60) * 0.8
    }
  } else if (pdaData.condition == "DG cargo in") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = (500 + b * 60) * 1.2
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190 * 1.5
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220 * 1.5
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250 * 1.5
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290 * 1.5
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320 * 1.5
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350 * 1.5
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390 * 1.5
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430 * 1.5
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460 * 1.5
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500 * 1.5
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = (500 + b * 60) * 1.5
    }
  } else if (pdaData.condition == "DG cargo out") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = (500 + b * 60) * 1.2
    }
  } else {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageIn = 190
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageIn = 220
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageIn = 250
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageIn = 290
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageIn = 320
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageIn = 350
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageIn = 390
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageIn = 430
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageIn = 460
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageIn = 500
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageIn = 500 + b * 60
    }
  }

  // =============== Pilotage Out dues ================= //

  if (pdaData.type === "Passenger" && pdaData.loa <= 240) {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190 * 0.9
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220 * 0.9
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250 * 0.9
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290 * 0.9
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320 * 0.9
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350 * 0.9
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390 * 0.9
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430 * 0.9
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460 * 0.9
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500 * 0.9
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = (500 + b * 60) * 0.9
    }
  } else if (pdaData.type === "Passenger" && pdaData.loa > 240) {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190 * 0.8
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220 * 0.8
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250 * 0.8
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290 * 0.8
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320 * 0.8
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350 * 0.8
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390 * 0.8
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430 * 0.8
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460 * 0.8
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500 * 0.8
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = (500 + b * 60) * 0.8
    }
  } else if (pdaData.condition == "DG cargo out") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = (500 + b * 60) * 1.2
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190 * 1.5
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220 * 1.5
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250 * 1.5
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290 * 1.5
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320 * 1.5
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350 * 1.5
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390 * 1.5
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430 * 1.5
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460 * 1.5
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500 * 1.5
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = (500 + b * 60) * 1.5
    }
  } else if (pdaData.type === "DG cargo in/out") {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = (500 + b * 60) * 1.2
    }
  } else {
    if (pdaData.grt < 1000) {
      this.computedProforma.varnaEast.pilotageOut = 190
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      this.computedProforma.varnaEast.pilotageOut = 220
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      this.computedProforma.varnaEast.pilotageOut = 250
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      this.computedProforma.varnaEast.pilotageOut = 290
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      this.computedProforma.varnaEast.pilotageOut = 320
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      this.computedProforma.varnaEast.pilotageOut = 350
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      this.computedProforma.varnaEast.pilotageOut = 390
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      this.computedProforma.varnaEast.pilotageOut = 430
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      this.computedProforma.varnaEast.pilotageOut = 460
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      this.computedProforma.varnaEast.pilotageOut = 500
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.pilotageOut = 500 + b * 60
    }
  }

  // =============== Towage In dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 420 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 620 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 820 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 1020 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 1220 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 1420 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 1620 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 1820 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 2020 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 2220 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (2200 + d * 55) * 0.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 840 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1240 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 1640 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 2040 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 2440 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 2840 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 3240 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 3640 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 4040 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 4440 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (4440 + d * 110) * 0.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 1260 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1860 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 2460 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 3060 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 3660 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 4260 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 4860 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 5460 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 6060 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 6660 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (6660 + d * 165) * 0.5
      }
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 420 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 620 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 820 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 1020 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 1220 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 1420 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 1620 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 1820 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 2020 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 2220 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (2200 + d * 55) * 1.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 840 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1240 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 1640 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 2040 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 2440 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 2840 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 3240 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 3640 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 4040 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 4440 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (4440 + d * 110) * 1.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 1260 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1860 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 2460 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 3060 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 3660 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 4260 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 4860 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 5460 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 6060 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 6660 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = (6660 + d * 165) * 1.5
      }
    }
  } else {
    if (pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.towageIn = 420
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.towageIn = 620
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.towageIn = 820
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      this.computedProforma.varnaEast.towageIn = 1020
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.towageIn = 1220
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.towageIn = 1420
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      this.computedProforma.varnaEast.towageIn = 1620
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      this.computedProforma.varnaEast.towageIn = 1820
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      this.computedProforma.varnaEast.towageIn = 2020
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.towageIn = 2220
    }
    if (pdaData.grt > 10000) {
      const c = pdaData.grt - 10000
      const d = Math.ceil(c / 1000)
      this.computedProforma.varnaEast.towageIn = 2200 + d * 55
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 840
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1240
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 1640
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 2040
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 2440
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 2840
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 3240
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 3640
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 4040
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 4440
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = 4440 + d * 110
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageIn = 1260
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageIn = 1860
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageIn = 2460
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageIn = 3060
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageIn = 3660
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageIn = 4260
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageIn = 4860
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageIn = 5460
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageIn = 6060
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageIn = 6660
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageIn = 6660 + d * 165
      }
    }
  }

  // =============== Towage Out dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 420 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 620 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 820 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 1020 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 1220 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 1420 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 1620 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 1820 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 2020 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 2220 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (2200 + d * 55) * 0.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 840 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1240 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 1640 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 2040 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 2440 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 2840 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 3240 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 3640 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 4040 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 4440 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (4440 + d * 110) * 0.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 1260 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1860 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 2460 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 3060 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 3660 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 4260 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 4860 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 5460 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 6060 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 6660 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (6660 + d * 165) * 0.5
      }
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 420 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 620 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 820 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 1020 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 1220 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 1420 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 1620 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 1820 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 2020 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 2220 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (2200 + d * 55) * 1.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 840 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1240 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 1640 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 2040 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 2440 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 2840 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 3240 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 3640 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 4040 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 4440 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (4440 + d * 110) * 1.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 1260 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1860 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 2460 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 3060 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 3660 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 4260 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 4860 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 5460 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 6060 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 6660 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = (6660 + d * 165) * 1.5
      }
    }
  } else {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 420
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 620
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 820
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 1020
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 1220
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 1420
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 1620
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 1820
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 2020
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 2220
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = 2200 + d * 55
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 840
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1240
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 1640
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 2040
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 2440
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 2840
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 3240
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 3640
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 4040
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 4440
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = 4440 + d * 110
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        this.computedProforma.varnaEast.towageOut = 1260
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        this.computedProforma.varnaEast.towageOut = 1860
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        this.computedProforma.varnaEast.towageOut = 2460
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        this.computedProforma.varnaEast.towageOut = 3060
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        this.computedProforma.varnaEast.towageOut = 3660
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        this.computedProforma.varnaEast.towageOut = 4260
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        this.computedProforma.varnaEast.towageOut = 4860
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        this.computedProforma.varnaEast.towageOut = 5460
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        this.computedProforma.varnaEast.towageOut = 6060
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        this.computedProforma.varnaEast.towageOut = 6660
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        this.computedProforma.varnaEast.towageOut = 6660 + d * 165
      }
    }
  }

  // =============== Mooring dues ================= //

  if (pdaData.type === "Docking") {
    this.computedProforma.varnaEast.mooring = 0
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.mooring = 60 * 1.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.mooring = 90 * 1.5
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.mooring = 120 * 1.5
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      this.computedProforma.varnaEast.mooring = 140 * 1.5
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.mooring = 160 * 1.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.mooring = 180 * 1.5
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      this.computedProforma.varnaEast.mooring = 200 * 1.5
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      this.computedProforma.varnaEast.mooring = 220 * 1.5
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      this.computedProforma.varnaEast.mooring = 230 * 1.5
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.mooring = 240 * 1.5
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.mooring = (240 + b * 35) * 1.5
    }
  } else {
    if (pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.mooring = 60
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.mooring = 90
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.mooring = 120
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      this.computedProforma.varnaEast.mooring = 140
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.mooring = 160
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.mooring = 180
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      this.computedProforma.varnaEast.mooring = 200
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      this.computedProforma.varnaEast.mooring = 220
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      this.computedProforma.varnaEast.mooring = 230
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.mooring = 240
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.mooring = 240 + b * 35
    }
  }

  // =============== Unmooring dues ================= //

  if (pdaData.type === "Docking") {
    this.computedProforma.varnaEast.unmooring = 0
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.unmooring = 60 * 1.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.unmooring = 90 * 1.5
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.unmooring = 120 * 1.5
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      this.computedProforma.varnaEast.unmooring = 140 * 1.5
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.unmooring = 160 * 1.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.unmooring = 180 * 1.5
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      this.computedProforma.varnaEast.unmooring = 200 * 1.5
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      this.computedProforma.varnaEast.unmooring = 220 * 1.5
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      this.computedProforma.varnaEast.unmooring = 230 * 1.5
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.unmooring = 240 * 1.5
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.unmooring = (240 + b * 35) * 1.5
    }
  } else {
    if (pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.unmooring = 60
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.unmooring = 90
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.unmooring = 120
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      this.computedProforma.varnaEast.unmooring = 140
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.unmooring = 160
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.unmooring = 180
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      this.computedProforma.varnaEast.unmooring = 200
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      this.computedProforma.varnaEast.unmooring = 220
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      this.computedProforma.varnaEast.unmooring = 230
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.unmooring = 240
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      this.computedProforma.varnaEast.unmooring = 240 + b * 35
    }
  }

  // =============== Channel dues ================= //

  if (pdaData.type === "Container") {
    this.computedProforma.varnaEast.channelDues = Math.round(
      pdaData.grt * 0.04 * 0.25
    )
  } else if (pdaData.type === "Passenger") {
    this.computedProforma.varnaEast.channelDues = Math.round(
      pdaData.grt * 0.04 * 0.5
    )
  } else if (pdaData.type === "Navy") {
    this.computedProforma.varnaEast.channelDues = Math.round(
      pdaData.grt * 0.04 * 0
    )
  } else {
    this.computedProforma.varnaEast.channelDues = Math.round(pdaData.grt * 0.04)
  }

  // =============== Light dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt <= 10) {
      this.computedProforma.varnaEast.lightDues = 5 * 0.5
    }
    if (pdaData.grt > 10 && pdaData.grt <= 40) {
      this.computedProforma.varnaEast.lightDues = 10 * 0.5
    }
    if (pdaData.grt > 40 && pdaData.grt <= 500) {
      this.computedProforma.varnaEast.lightDues = 15 * 0.5
    }
    if (pdaData.grt > 500 && pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.lightDues = 40 * 0.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.lightDues = 70 * 0.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.lightDues = 110 * 0.5
    }
    if (pdaData.grt > 10000) {
      this.computedProforma.varnaEast.lightDues = 150 * 0.5
    }
  } else if (pdaData.type === "Navy") {
    this.computedProforma.varnaEast.lightDues = 0
  } else {
    if (pdaData.grt <= 10) {
      this.computedProforma.varnaEast.lightDues = 5
    }
    if (pdaData.grt > 10 && pdaData.grt <= 40) {
      this.computedProforma.varnaEast.lightDues = 10
    }
    if (pdaData.grt > 40 && pdaData.grt <= 500) {
      this.computedProforma.varnaEast.lightDues = 15
    }
    if (pdaData.grt > 500 && pdaData.grt <= 1000) {
      this.computedProforma.varnaEast.lightDues = 40
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 5000) {
      this.computedProforma.varnaEast.lightDues = 70
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.lightDues = 110
    }
    if (pdaData.grt > 10000) {
      this.computedProforma.varnaEast.lightDues = 150
    }
  }

  // =============== Sailing permission dues ================= //

  if (pdaData.type === "navy") {
    this.computedProforma.varnaEast.sailingPermission = 0
  } else {
    this.computedProforma.varnaEast.sailingPermission = 50
  }

  // =============== Garbage/Marpol dues ================= //

  if (pdaData.type === "Docking") {
    this.computedProforma.varnaEast.marpol = 0
  } else {
    if (pdaData.grt <= 2000) {
      this.computedProforma.varnaEast.marpol = 65
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      this.computedProforma.varnaEast.marpol = 160
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 6000) {
      this.computedProforma.varnaEast.marpol = 210
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 10000) {
      this.computedProforma.varnaEast.marpol = 305
    }
    if (pdaData.grt > 10000 && pdaData.grt <= 20000) {
      this.computedProforma.varnaEast.marpol = 365
    }
    if (pdaData.grt > 20000 && pdaData.grt <= 30000) {
      this.computedProforma.varnaEast.marpol = 460
    }
    if (pdaData.grt > 30000 && pdaData.grt <= 40000) {
      this.computedProforma.varnaEast.marpol = 735
    }
    if (pdaData.grt > 40000 && pdaData.grt <= 50000) {
      this.computedProforma.varnaEast.marpol = 1140
    }
    if (pdaData.grt > 50000) {
      this.computedProforma.varnaEast.marpol = 1500
    }
  }

  // =============== Gargo plan dues ================= // For future implementation

  if (pdaData.operation == "Loading" && pdaData.type === "Container") {
    this.computedProforma.varnaEast.cargoPlan = 50
  } else if (pdaData.operation == "Loading" && pdaData.condition == "Other") {
    this.computedProforma.varnaEast.cargoPlan = 500
  } else {
    this.computedProforma.varnaEast.cargoPlan = 0
  }

  // =============== Booming dues ================= // For future implementation

  // this.computedProforma.varnaEast.booming = Math.round(
  //   100 + pdaData.loa * 2.5 * 0.15 * pdaData.hours
  // );

  this.computedProforma.varnaEast.total =
    this.computedProforma.varnaEast.tonnageDues +
    this.computedProforma.varnaEast.berthDues +
    this.computedProforma.varnaEast.pilotageIn +
    this.computedProforma.varnaEast.pilotageOut +
    this.computedProforma.varnaEast.towageIn +
    this.computedProforma.varnaEast.towageOut +
    this.computedProforma.varnaEast.mooring +
    this.computedProforma.varnaEast.unmooring +
    this.computedProforma.varnaEast.channelDues +
    this.computedProforma.varnaEast.lightDues +
    this.computedProforma.varnaEast.sailingPermission +
    this.computedProforma.varnaEast.marpol
}
export const generatedProforma = {
  computedProforma: {
    timestamp: "",
    terminal: "",
    tonnageDues: 0,
    berthDues: 0,
    pilotageIn: 0,
    pilotageOut: 0,
    towageIn: 0,
    towageOut: 0,
    mooring: 0,
    unmooring: 0,
    channelDues: 0,
    lightDues: 0,
    sailingPermission: 0,
    marpol: 0,
    total: 0,
  },
}
