//# Contribution by Krishna Desai - desaikri
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.textContent = '🙈';  // or '👁️‍🗨️' for open eye
  } else {
    passwordInput.type = 'password';
    toggleIcon.textContent = '👁️';
  }
}
