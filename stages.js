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
    stage: "I",
    pin: "EDC09",
    nextClue: "clues/bcr.pdf"
  },

  "pqxdb8": {
    stage: "II",
    pin: "EDC77",
    nextClue: "clues/chemylaby.pdf"
  },

  "rszfd9": {
    stage: "III",
    pin: "EDC11",
    nextClue: "clues/mjp.pdf"
  },

  "uvcig0": {
    stage: "IV",
    pin: "EDC17",
    nextClue: "clues/park.pdf"
  },

  "uvcig1": {
    stage: "FINAL",
    pin: "EDC16",
    nextClue: "clues/audi.pdf"
  },

  "vwdjh2": {
    stage: "Rik",
    pin: "EDC17",
    nextClue: "clues/stage04.mp4"
  },

  // ---------- FINAL STAGE ----------
  // No nextClue here — the hunt ends at Stage 15.
};