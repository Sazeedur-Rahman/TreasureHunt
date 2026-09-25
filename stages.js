// This file stores ALL treasure hunt stage data
// in one place — PINs and the next clue PDF path
// for every stage of the hunt.
//
// Structure:
// "stageNumber": {
//     pin: "THE_PIN_FOR_THIS_STAGE",
//     nextClue: "path/to/next-clue.pdf"
// }
//
// The final stage uses `completed: true` instead
// of `nextClue`, since there is no next PDF.
// ============================================

const stages = {
//------------------1st route-------------------//
  "bcjpn1": {
    stage: "01",
    pin: "EDC99",
    nextClue: "clues/nath.pdf"
  },

  "cdkqo2": {
    stage: "02",
    pin: "EDC03",
    nextClue: "clues/teepeecee.pdf"
  },

  "efmsq3": {
    stage: "03",
    pin: "EDC00",
    nextClue: "clues/basukeball.pdf"
  },

  "hipvt4": {
    stage: "04",
    pin: "EDC07",
    nextClue: "clues/phylab.pdf"
  },

  "jkrxv5": {
    stage: "05",
    pin: "EDC15",
    nextClue: "clues/mistry.pdf"
  },

  "klsyw6": {
    stage: "Final",
    pin: "EDC37",
    nextClue: "clues/aaaoudii.pdf"
  },
//------------------2nd route-------------------//
  "lmtzx7": {
    stage: "07",
    pin: "EDC09",
    nextClue: "clues/stage08.pdf"
  },

  "pqxdb8": {
    stage: "08",
    pin: "EDC03",
    nextClue: "clues/stage09.pdf"
  },

  "rszfd9": {
    stage: "09",
    pin: "EDC05",
    nextClue: "clues/stage10.pdf"
  },

  "uvcig0": {
    stage: "10",
    pin: "EDC08",
    nextClue: "clues/stage11.pdf"
  },

  "uvcig1": {
    stage: "11",
    pin: "EDC02",
    nextClue: "clues/stage12.pdf"
  },

  "vwdjh2": {
    stage: "12",
    pin: "EDC77",
    nextClue: "clues/stage13.pdf"
  },

  "wxeki3": {
    stage: "13",
    pin: "EDC14",
    nextClue: "clues/stage14.pdf"
  },

  "yzgmk4": {
    stage: "14",
    pin: "EDC06",
    nextClue: "clues/stage15.pdf"
  },

  // ---------- FINAL STAGE ----------
  // No nextClue here — the hunt ends at Stage 15.
};