const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document
    .querySelector('#username-input-login')
    .value.trim();
  const password = document
    .querySelector('#password-input-login')
    .value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // Redirect to homepage after successful login
    document.location.replace('/');
  } else {
    alert('Failed to login. Please check your credentials.');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);