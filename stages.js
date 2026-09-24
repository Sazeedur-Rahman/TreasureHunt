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

  "01": {
    pin: "EDC99",
    nextClue: "clues/stage02.pdf"
  },

  "02": {
    pin: "EDC07",
    nextClue: "clues/stage03.pdf"
  },

  "03": {
    pin: "EDC22",
    nextClue: "clues/stage04.pdf"
  },

  "04": {
    pin: "EDC45",
    nextClue: "clues/stage05.pdf"
  },

  "05": {
    pin: "EDC18",
    nextClue: "clues/stage06.pdf"
  },

  "06": {
    pin: "EDC63",
    nextClue: "clues/stage07.pdf"
  },

  "07": {
    pin: "EDC09",
    nextClue: "clues/stage08.pdf"
  },

  "08": {
    pin: "EDC03",
    nextClue: "clues/stage09.pdf"
  },

  "09": {
    pin: "EDC05",
    nextClue: "clues/stage10.pdf"
  },

  "10": {
    pin: "EDC08",
    nextClue: "clues/stage11.pdf"
  },

  "11": {
    pin: "EDC02",
    nextClue: "clues/stage12.pdf"
  },

  "12": {
    pin: "EDC77",
    nextClue: "clues/stage13.pdf"
  },

  "13": {
    pin: "EDC14",
    nextClue: "clues/stage14.pdf"
  },

  "14": {
    pin: "EDC6",
    nextClue: "clues/stage15.pdf"
  },

  // ---------- FINAL STAGE ----------
  // No nextClue here — the hunt ends at Stage 15.
  "15": {
    pin: "FINAL01",
    completed: true
  }

};
