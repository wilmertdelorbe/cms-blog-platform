const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document
    .querySelector('#username-input-signup')
    .value.trim();
  const password = document
    .querySelector('#password-input-signup')
    .value.trim();

  if (password.length >= 8 && username) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to homepage after successful signup
      document.location.replace('/');
    } else {
      alert('Failed to sign up. Please try again.');
    }
  } else {
    alert(
      'Please provide a valid username and ensure your password is at least 8 characters long.'
    );
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);