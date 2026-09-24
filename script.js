document.addEventListener('DOMContentLoaded', () => {

  const form            = document.getElementById('clueForm');
  const pinInput         = document.getElementById('pinInput');
  const unlockBtn        = document.getElementById('unlockBtn');
  const messageArea      = document.getElementById('messageArea');
  const stageNumberText  = document.getElementById('stageNumberText');
  const clubLogo         = document.getElementById('clubLogo');

  if (clubLogo) {
    clubLogo.addEventListener('error', () => {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'club-logo logo-fallback';
      fallbackDiv.textContent = 'CN'; // TODO: replace with real club initials
      clubLogo.replaceWith(fallbackDiv);
    });
  }

  unlockBtn.addEventListener('click', () => {
    unlockBtn.classList.remove('ripple');
    void unlockBtn.offsetWidth; // restart animation
    unlockBtn.classList.add('ripple');
  });

  const urlParams = new URLSearchParams(window.location.search);
  let stageParam = urlParams.get('stage');

  // Normalize the stage number to always be 2 digits.
  // This means "1" and "01" both work correctly.
  if (stageParam) {
    stageParam = stageParam.trim().padStart(2, '0');
  }

  // =========================================================
  // STEP 2: Look up this stage inside stages.js
  // =========================================================
  const currentStage = stageParam ? stages[stageParam] : undefined;

  // =========================================================
  // STEP 3: Handle an invalid or missing stage
  // (e.g. someone visits the page without scanning a QR code,
  // or the QR code points to a stage that doesn't exist)
  // =========================================================
  if (!currentStage) {
    showMessage('Invalid QR Code', 'error');
    disableForm();
    return; // Stop here — no valid stage to process
  }

  // =========================================================
  // STEP 4: Valid stage — update the "Stage XX" badge on screen
  // =========================================================
  if (stageNumberText) {
    stageNumberText.textContent = stageParam;
  }

  // =========================================================
  // STEP 5: Handle the PIN form submission
  // =========================================================
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessage();

    // Clean up user input: trim spaces, remove gaps, and compare case-insensitively.
    const enteredPin = pinInput.value.trim().replace(/\s+/g, '').toLowerCase();

    // Guard: empty input
    if (!enteredPin) {
      showMessage('Please enter a PIN to continue.', 'error');
      pinInput.focus();
      return;
    }

    // Validate the entered value matches the game's alphanumeric PIN format.
    if (!/^[a-z0-9]+$/i.test(enteredPin)) {
      showMessage('PIN must contain only letters and numbers.', 'error');
      pinInput.focus();
      pinInput.select();
      return;
    }

    // Clean up the correct PIN the same way, so comparison is fair.
    const correctPin = currentStage.pin.trim().replace(/\s+/g, '').toLowerCase();

    if (enteredPin === correctPin) {
      handleCorrectPin();
    } else {
      showMessage('Incorrect PIN. Please try again.', 'error');
      pinInput.focus();
      pinInput.select();
    }
  });

  // =========================================================
  // Runs when the user enters the correct PIN
  // =========================================================
  function handleCorrectPin() {
    if (currentStage.completed) {
      // ----- Final stage of the hunt -----
      showMessage(
        'Congratulations! You have completed the Treasure Hunt.',
        'success'
      );
      disableForm();
    } else {
      // ----- Regular stage: unlock the next clue -----
      showMessage('Correct! Unlocking next clue…', 'success');
      disableForm();

      // Small delay so the user sees the success message
      // before the PDF opens in a new tab.
      setTimeout(() => {
        window.open(currentStage.nextClue, '_blank');
      }, 900);
    }
  }

  // =========================================================
  // Helper: Show a message in the message area
  // type = 'success' or 'error'
  // =========================================================
  function showMessage(text, type) {
    messageArea.textContent = text;
    messageArea.classList.remove('success', 'error');
    messageArea.classList.add(type);
  }

  // =========================================================
  // Helper: Clear any existing message
  // =========================================================
  function clearMessage() {
    messageArea.textContent = '';
    messageArea.classList.remove('success', 'error');
  }

  // =========================================================
  // Helper: Disable the PIN form
  // (used after success, or when the stage is invalid)
  // =========================================================
  function disableForm() {
    pinInput.disabled = true;
    unlockBtn.disabled = true;
    unlockBtn.style.opacity = '0.6';
    unlockBtn.style.cursor = 'not-allowed';
  }

});