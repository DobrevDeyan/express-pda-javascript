export async function calculateProforma(pdaData) {
  // ============================== VARNA EAST FORMULAS ============================== //
  // ===============  Tonnage dues ================= //

  if ((pdaData.terminal = "Varna East")) {
    generatedVarnaEastProforma.terminal = pdaData.terminal
  }
  generatedVarnaEastProforma.terminal = pdaData.terminal
  generatedVarnaEastProforma.company = pdaData.company
  generatedVarnaEastProforma.type = pdaData.type
  generatedVarnaEastProforma.operation = pdaData.operation
  generatedVarnaEastProforma.condition = pdaData.condition
  generatedVarnaEastProforma.grt = pdaData.grt
  generatedVarnaEastProforma.loa = pdaData.loa
  generatedVarnaEastProforma.hours = pdaData.hours
  generatedVarnaEastProforma.vessel = pdaData.vessel

  // ===============

  if (pdaData.type === "Tanker") {
    generatedVarnaEastProforma.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.5
    )
  } else if (pdaData.type === "Container") {
    generatedVarnaEastProforma.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55 * 0.6
    )
  } else if (pdaData.type === "Passenger") {
    generatedVarnaEastProforma.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55 * 0.4
    )
  } else if (pdaData.type === "Navy") {
    generatedVarnaEastProforma.tonnageDues = Math.round(Number(pdaData.grt) * 0)
  } else if (pdaData.type === "Docking") {
    generatedVarnaEastProforma.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.05
    )
  } else {
    generatedVarnaEastProforma.tonnageDues = Math.round(
      Number(pdaData.grt) * 0.55
    )
  }

  // =============== Berth dues ================= //

  if (pdaData.type === "Docking") {
    generatedVarnaEastProforma.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1 * 0.5 * 0
    )
  } else if (pdaData.type === "Navy") {
    generatedVarnaEastProforma.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1 * 0
    )
  } else {
    generatedVarnaEastProforma.berthDues = Math.round(
      pdaData.loa * pdaData.hours * 0.1
    )
  }

  // =============== Pilotage In dues ================= //

  if (pdaData.type === "Passenger" && pdaData.loa <= 240) {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190 * 0.9
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220 * 0.9
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250 * 0.9
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290 * 0.9
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320 * 0.9
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350 * 0.9
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390 * 0.9
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430 * 0.9
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460 * 0.9
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500 * 0.9
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = (500 + b * 60) * 0.9
    }
  } else if (pdaData.type === "Passenger" && pdaData.loa > 240) {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190 * 0.8
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220 * 0.8
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250 * 0.8
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290 * 0.8
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320 * 0.8
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350 * 0.8
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390 * 0.8
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430 * 0.8
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460 * 0.8
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500 * 0.8
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = (500 + b * 60) * 0.8
    }
  } else if (pdaData.condition == "DG cargo in") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = (500 + b * 60) * 1.2
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190 * 1.5
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220 * 1.5
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250 * 1.5
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290 * 1.5
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320 * 1.5
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350 * 1.5
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390 * 1.5
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430 * 1.5
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460 * 1.5
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500 * 1.5
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = (500 + b * 60) * 1.5
    }
  } else if (pdaData.condition == "DG cargo out") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = (500 + b * 60) * 1.2
    }
  } else {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageInDues = 190
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageInDues = 220
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageInDues = 250
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageInDues = 290
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageInDues = 320
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageInDues = 350
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageInDues = 390
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageInDues = 430
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageInDues = 460
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageInDues = 500
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageInDues = 500 + b * 60
    }
  }

  // =============== Pilotage Out dues ================= //

  if (pdaData.type === "Passenger" && pdaData.loa <= 240) {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190 * 0.9
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220 * 0.9
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250 * 0.9
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290 * 0.9
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320 * 0.9
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350 * 0.9
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390 * 0.9
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430 * 0.9
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460 * 0.9
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500 * 0.9
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = (500 + b * 60) * 0.9
    }
  } else if (pdaData.type === "Passenger" && pdaData.loa > 240) {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190 * 0.8
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220 * 0.8
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250 * 0.8
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290 * 0.8
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320 * 0.8
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350 * 0.8
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390 * 0.8
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430 * 0.8
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460 * 0.8
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500 * 0.8
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = (500 + b * 60) * 0.8
    }
  } else if (pdaData.condition == "DG cargo out") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = (500 + b * 60) * 1.2
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190 * 1.5
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220 * 1.5
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250 * 1.5
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290 * 1.5
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320 * 1.5
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350 * 1.5
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390 * 1.5
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430 * 1.5
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460 * 1.5
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500 * 1.5
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = (500 + b * 60) * 1.5
    }
  } else if (pdaData.type === "DG cargo in/out") {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190 * 1.2
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220 * 1.2
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250 * 1.2
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290 * 1.2
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320 * 1.2
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350 * 1.2
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390 * 1.2
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430 * 1.2
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460 * 1.2
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500 * 1.2
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = (500 + b * 60) * 1.2
    }
  } else {
    if (pdaData.grt < 1000) {
      generatedVarnaEastProforma.pilotageOutDues = 190
    }
    if (pdaData.grt >= 1000 && pdaData.grt < 2000) {
      generatedVarnaEastProforma.pilotageOutDues = 220
    }
    if (pdaData.grt >= 2000 && pdaData.grt < 3000) {
      generatedVarnaEastProforma.pilotageOutDues = 250
    }
    if (pdaData.grt >= 3000 && pdaData.grt < 4000) {
      generatedVarnaEastProforma.pilotageOutDues = 290
    }
    if (pdaData.grt >= 4000 && pdaData.grt < 5000) {
      generatedVarnaEastProforma.pilotageOutDues = 320
    }
    if (pdaData.grt >= 5000 && pdaData.grt < 6000) {
      generatedVarnaEastProforma.pilotageOutDues = 350
    }
    if (pdaData.grt >= 6000 && pdaData.grt < 7000) {
      generatedVarnaEastProforma.pilotageOutDues = 390
    }
    if (pdaData.grt >= 7000 && pdaData.grt < 8000) {
      generatedVarnaEastProforma.pilotageOutDues = 430
    }
    if (pdaData.grt >= 8000 && pdaData.grt < 9000) {
      generatedVarnaEastProforma.pilotageOutDues = 460
    }
    if (pdaData.grt >= 9000 && pdaData.grt < 10000) {
      generatedVarnaEastProforma.pilotageOutDues = 500
    }
    if (pdaData.grt >= 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.pilotageOutDues = 500 + b * 60
    }
  }

  // =============== Towage In dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 420 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 620 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 820 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 1020 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 1220 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 1420 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 1620 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 1820 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 2020 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 2220 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (2200 + d * 55) * 0.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 840 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1240 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 1640 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 2040 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 2440 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 2840 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 3240 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 3640 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 4040 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 4440 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (4440 + d * 110) * 0.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 1260 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1860 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 2460 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 3060 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 3660 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 4260 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 4860 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 5460 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 6060 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 6660 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (6660 + d * 165) * 0.5
      }
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 420 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 620 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 820 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 1020 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 1220 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 1420 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 1620 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 1820 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 2020 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 2220 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (2200 + d * 55) * 1.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 840 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1240 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 1640 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 2040 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 2440 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 2840 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 3240 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 3640 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 4040 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 4440 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (4440 + d * 110) * 1.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 1260 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1860 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 2460 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 3060 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 3660 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 4260 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 4860 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 5460 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 6060 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 6660 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = (6660 + d * 165) * 1.5
      }
    }
  } else {
    if (pdaData.grt <= 1000) {
      generatedVarnaEastProforma.towageInDues = 420
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      generatedVarnaEastProforma.towageInDues = 620
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.towageInDues = 820
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      generatedVarnaEastProforma.towageInDues = 1020
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.towageInDues = 1220
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.towageInDues = 1420
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      generatedVarnaEastProforma.towageInDues = 1620
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      generatedVarnaEastProforma.towageInDues = 1820
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      generatedVarnaEastProforma.towageInDues = 2020
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.towageInDues = 2220
    }
    if (pdaData.grt > 10000) {
      const c = pdaData.grt - 10000
      const d = Math.ceil(c / 1000)
      generatedVarnaEastProforma.towageInDues = 2200 + d * 55
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 840
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1240
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 1640
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 2040
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 2440
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 2840
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 3240
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 3640
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 4040
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 4440
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = 4440 + d * 110
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageInDues = 1260
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageInDues = 1860
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageInDues = 2460
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageInDues = 3060
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageInDues = 3660
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageInDues = 4260
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageInDues = 4860
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageInDues = 5460
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageInDues = 6060
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageInDues = 6660
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageInDues = 6660 + d * 165
      }
    }
  }

  // =============== Towage Out dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 420 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 620 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 820 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 1020 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 1220 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 1420 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 1620 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 1820 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 2020 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 2220 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (2200 + d * 55) * 0.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 840 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1240 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 1640 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 2040 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 2440 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 2840 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 3240 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 3640 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 4040 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 4440 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (4440 + d * 110) * 0.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 1260 * 0.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1860 * 0.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 2460 * 0.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 3060 * 0.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 3660 * 0.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 4260 * 0.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 4860 * 0.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 5460 * 0.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 6060 * 0.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 6660 * 0.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (6660 + d * 165) * 0.5
      }
    }
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 420 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 620 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 820 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 1020 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 1220 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 1420 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 1620 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 1820 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 2020 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 2220 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (2200 + d * 55) * 1.5
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 840 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1240 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 1640 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 2040 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 2440 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 2840 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 3240 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 3640 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 4040 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 4440 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (4440 + d * 110) * 1.5
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 1260 * 1.5
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1860 * 1.5
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 2460 * 1.5
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 3060 * 1.5
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 3660 * 1.5
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 4260 * 1.5
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 4860 * 1.5
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 5460 * 1.5
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 6060 * 1.5
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 6660 * 1.5
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = (6660 + d * 165) * 1.5
      }
    }
  } else {
    if (pdaData.grt >= 1000 && pdaData.grt <= 4500) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 420
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 620
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 820
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 1020
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 1220
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 1420
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 1620
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 1820
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 2020
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 2220
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = 2200 + d * 55
      }
    }
    if (pdaData.grt > 4500 && pdaData.grt <= 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 840
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1240
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 1640
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 2040
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 2440
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 2840
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 3240
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 3640
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 4040
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 4440
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = 4440 + d * 110
      }
    }
    if (pdaData.grt > 18000) {
      if (pdaData.grt <= 1000) {
        generatedVarnaEastProforma.towageOutDues = 1260
      }
      if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
        generatedVarnaEastProforma.towageOutDues = 1860
      }
      if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
        generatedVarnaEastProforma.towageOutDues = 2460
      }
      if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
        generatedVarnaEastProforma.towageOutDues = 3060
      }
      if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
        generatedVarnaEastProforma.towageOutDues = 3660
      }
      if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
        generatedVarnaEastProforma.towageOutDues = 4260
      }
      if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
        generatedVarnaEastProforma.towageOutDues = 4860
      }
      if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
        generatedVarnaEastProforma.towageOutDues = 5460
      }
      if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
        generatedVarnaEastProforma.towageOutDues = 6060
      }
      if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
        generatedVarnaEastProforma.towageOutDues = 6660
      }
      if (pdaData.grt > 10000) {
        const c = pdaData.grt - 10000
        const d = Math.ceil(c / 1000)
        generatedVarnaEastProforma.towageOutDues = 6660 + d * 165
      }
    }
  }

  // =============== mooringDues dues ================= //

  if (pdaData.type === "Docking") {
    generatedVarnaEastProforma.mooringDues = 0
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt <= 1000) {
      generatedVarnaEastProforma.mooringDues = 60 * 1.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      generatedVarnaEastProforma.mooringDues = 90 * 1.5
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.mooringDues = 120 * 1.5
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      generatedVarnaEastProforma.mooringDues = 140 * 1.5
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.mooringDues = 160 * 1.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.mooringDues = 180 * 1.5
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      generatedVarnaEastProforma.mooringDues = 200 * 1.5
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      generatedVarnaEastProforma.mooringDues = 220 * 1.5
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      generatedVarnaEastProforma.mooringDues = 230 * 1.5
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.mooringDues = 240 * 1.5
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.mooringDues = (240 + b * 35) * 1.5
    }
  } else {
    if (pdaData.grt <= 1000) {
      generatedVarnaEastProforma.mooringDues = 60
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      generatedVarnaEastProforma.mooringDues = 90
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.mooringDues = 120
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      generatedVarnaEastProforma.mooringDues = 140
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.mooringDues = 160
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.mooringDues = 180
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      generatedVarnaEastProforma.mooringDues = 200
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      generatedVarnaEastProforma.mooringDues = 220
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      generatedVarnaEastProforma.mooringDues = 230
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.mooringDues = 240
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.mooringDues = 240 + b * 35
    }
  }

  // =============== unmooringDues dues ================= //

  if (pdaData.type === "Docking") {
    generatedVarnaEastProforma.unmooringDues = 0
  } else if (pdaData.condition == "Overtime") {
    if (pdaData.grt <= 1000) {
      generatedVarnaEastProforma.unmooringDues = 60 * 1.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      generatedVarnaEastProforma.unmooringDues = 90 * 1.5
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.unmooringDues = 120 * 1.5
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      generatedVarnaEastProforma.unmooringDues = 140 * 1.5
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.unmooringDues = 160 * 1.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.unmooringDues = 180 * 1.5
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      generatedVarnaEastProforma.unmooringDues = 200 * 1.5
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      generatedVarnaEastProforma.unmooringDues = 220 * 1.5
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      generatedVarnaEastProforma.unmooringDues = 230 * 1.5
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.unmooringDues = 240 * 1.5
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.unmooringDues = (240 + b * 35) * 1.5
    }
  } else {
    if (pdaData.grt <= 1000) {
      generatedVarnaEastProforma.unmooringDues = 60
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 2000) {
      generatedVarnaEastProforma.unmooringDues = 90
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.unmooringDues = 120
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 4000) {
      generatedVarnaEastProforma.unmooringDues = 140
    }
    if (pdaData.grt > 4000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.unmooringDues = 160
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.unmooringDues = 180
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 7000) {
      generatedVarnaEastProforma.unmooringDues = 200
    }
    if (pdaData.grt > 7000 && pdaData.grt <= 8000) {
      generatedVarnaEastProforma.unmooringDues = 220
    }
    if (pdaData.grt > 8000 && pdaData.grt <= 9000) {
      generatedVarnaEastProforma.unmooringDues = 230
    }
    if (pdaData.grt > 9000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.unmooringDues = 240
    }
    if (pdaData.grt > 10000) {
      const a = pdaData.grt - 10000
      const b = Math.ceil(a / 1000)
      generatedVarnaEastProforma.unmooringDues = 240 + b * 35
    }
  }

  // =============== Channel dues ================= //

  if (pdaData.type === "Container") {
    generatedVarnaEastProforma.channelDues = Math.round(
      pdaData.grt * 0.04 * 0.25
    )
  } else if (pdaData.type === "Passenger") {
    generatedVarnaEastProforma.channelDues = Math.round(
      pdaData.grt * 0.04 * 0.5
    )
  } else if (pdaData.type === "Navy") {
    generatedVarnaEastProforma.channelDues = Math.round(pdaData.grt * 0.04 * 0)
  } else {
    generatedVarnaEastProforma.channelDues = Math.round(pdaData.grt * 0.04)
  }

  // =============== Light dues ================= //

  if (pdaData.type === "Passenger") {
    if (pdaData.grt <= 10) {
      generatedVarnaEastProforma.lightDues = 5 * 0.5
    }
    if (pdaData.grt > 10 && pdaData.grt <= 40) {
      generatedVarnaEastProforma.lightDues = 10 * 0.5
    }
    if (pdaData.grt > 40 && pdaData.grt <= 500) {
      generatedVarnaEastProforma.lightDues = 15 * 0.5
    }
    if (pdaData.grt > 500 && pdaData.grt <= 1000) {
      generatedVarnaEastProforma.lightDues = 40 * 0.5
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.lightDues = 70 * 0.5
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.lightDues = 110 * 0.5
    }
    if (pdaData.grt > 10000) {
      generatedVarnaEastProforma.lightDues = 150 * 0.5
    }
  } else if (pdaData.type === "Navy") {
    generatedVarnaEastProforma.lightDues = 0
  } else {
    if (pdaData.grt <= 10) {
      generatedVarnaEastProforma.lightDues = 5
    }
    if (pdaData.grt > 10 && pdaData.grt <= 40) {
      generatedVarnaEastProforma.lightDues = 10
    }
    if (pdaData.grt > 40 && pdaData.grt <= 500) {
      generatedVarnaEastProforma.lightDues = 15
    }
    if (pdaData.grt > 500 && pdaData.grt <= 1000) {
      generatedVarnaEastProforma.lightDues = 40
    }
    if (pdaData.grt > 1000 && pdaData.grt <= 5000) {
      generatedVarnaEastProforma.lightDues = 70
    }
    if (pdaData.grt > 5000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.lightDues = 110
    }
    if (pdaData.grt > 10000) {
      generatedVarnaEastProforma.lightDues = 150
    }
  }

  // =============== Sailing permission dues ================= //

  if (pdaData.type === "Navy") {
    generatedVarnaEastProforma.sailingPermissionDues = 0
  } else {
    generatedVarnaEastProforma.sailingPermissionDues = 50
  }

  // =============== Garbage/marpolDues dues ================= //

  if (pdaData.type === "Docking") {
    generatedVarnaEastProforma.marpolDues = 0
  } else {
    if (pdaData.grt <= 2000) {
      generatedVarnaEastProforma.marpolDues = 65
    }
    if (pdaData.grt > 2000 && pdaData.grt <= 3000) {
      generatedVarnaEastProforma.marpolDues = 160
    }
    if (pdaData.grt > 3000 && pdaData.grt <= 6000) {
      generatedVarnaEastProforma.marpolDues = 210
    }
    if (pdaData.grt > 6000 && pdaData.grt <= 10000) {
      generatedVarnaEastProforma.marpolDues = 305
    }
    if (pdaData.grt > 10000 && pdaData.grt <= 20000) {
      generatedVarnaEastProforma.marpolDues = 365
    }
    if (pdaData.grt > 20000 && pdaData.grt <= 30000) {
      generatedVarnaEastProforma.marpolDues = 460
    }
    if (pdaData.grt > 30000 && pdaData.grt <= 40000) {
      generatedVarnaEastProforma.marpolDues = 735
    }
    if (pdaData.grt > 40000 && pdaData.grt <= 50000) {
      generatedVarnaEastProforma.marpolDues = 1140
    }
    if (pdaData.grt > 50000) {
      generatedVarnaEastProforma.marpolDues = 1500
    }
  }

  // =============== Gargo plan dues ================= // For future implementation

  if (pdaData.operation == "Loading" && pdaData.type === "Container") {
    generatedVarnaEastProforma.cargoPlanDues = 50
  } else if (pdaData.operation == "Loading") {
    generatedVarnaEastProforma.cargoPlanDues = 500
  } else {
    generatedVarnaEastProforma.cargoPlanDues = 0
  }

  // =============== Booming dues ================= // For future implementation

  generatedVarnaEastProforma.oilBoomingDues = Math.round(
    100 + pdaData.loa * 2.5 * 0.15 * pdaData.hours
  )

  generatedVarnaEastProforma.totalDues =
    generatedVarnaEastProforma.tonnageDues +
    generatedVarnaEastProforma.berthDues +
    generatedVarnaEastProforma.pilotageInDues +
    generatedVarnaEastProforma.pilotageOutDues +
    generatedVarnaEastProforma.towageInDues +
    generatedVarnaEastProforma.towageOutDues +
    generatedVarnaEastProforma.mooringDues +
    generatedVarnaEastProforma.unmooringDues +
    generatedVarnaEastProforma.channelDues +
    generatedVarnaEastProforma.lightDues +
    generatedVarnaEastProforma.cargoPlanDues +
    generatedVarnaEastProforma.oilBoomingDues +
    generatedVarnaEastProforma.sailingPermissionDues +
    generatedVarnaEastProforma.marpolDues
}

export const generatedVarnaEastProforma = {
  vessel: "",
  company: "",
  terminal: "",
  type: "",
  operation: "",
  condition: "",
  grt: 0,
  loa: 0,
  hours: 0,
  terminal: "",
  tonnageDues: 0,
  berthDues: 0,
  pilotageInDues: 0,
  pilotageOutDues: 0,
  towageInDues: 0,
  towageOutDues: 0,
  mooringDues: 0,
  unmooringDues: 0,
  channelDues: 0,
  lightDues: 0,
  cargoPlanDues: 0,
  oilBoomingDues: 0,
  sailingPermissionDues: 0,
  marpolDues: 0,
  totalDues: 0,
}
