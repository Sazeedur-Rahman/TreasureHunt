// ============================================
// Treasure Hunt — Landing Page (UI Only)
// No hunt logic, no validation — visuals only.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const clubLogo = document.getElementById('clubLogo');
  const form = document.getElementById('clueForm');
  const pinInput = document.getElementById('pinInput');
  const unlockBtn = document.getElementById('unlockBtn');
  const messageArea = document.getElementById('messageArea');


   if (clubLogo) {
    clubLogo.addEventListener('error', () => {
      clubLogo.classList.add('logo-fallback');
      clubLogo.removeAttribute('src');
      clubLogo.alt = '';
      clubLogo.textContent = 'CN'; // placeholder initials — replace as needed

      // Since <img> can't hold text content, swap it for a <div>
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'club-logo logo-fallback';
      fallbackDiv.textContent = 'CN';
      clubLogo.replaceWith(fallbackDiv);
    });
  }
  // Allow only letters and digits in the 5-character PIN field (UI convenience only)
  pinInput.addEventListener('input', () => {
    pinInput.value = pinInput.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5);
  });

  // Button ripple / press feedback
  unlockBtn.addEventListener('click', () => {
    unlockBtn.classList.remove('ripple');
    void unlockBtn.offsetWidth; // restart animation
    unlockBtn.classList.add('ripple');
  });

  // Placeholder submit handler (UI feedback only, no real logic)
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pinValue = pinInput.value.trim();

    messageArea.textContent = '';
    messageArea.classList.remove('success', 'error');

    if (!pinValue) {
      messageArea.textContent = 'Please enter a PIN to continue.';
      messageArea.classList.add('error');
      pinInput.focus();
      return;
    }

    if (pinValue.length !== 5 || !/^[A-Za-z0-9]{5}$/.test(pinValue)) {
      messageArea.textContent = 'Please enter a 5-character alphanumeric PIN.';
      messageArea.classList.add('error');
      pinInput.focus();
      return;
    }

    // Placeholder success message — replace with real logic later
    messageArea.textContent = 'Checking PIN…';
  });
});