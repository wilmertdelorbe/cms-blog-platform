const feedbackFormHandler = async function (event) {
  event.preventDefault();

  const blogEntryId = document.querySelector('input[name="blog-entry-id"]').value;
  const content = document.querySelector('textarea[name="feedback-content"]').value;

  if (content) {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        blogEntryId,
        content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Reload the page to show the new feedback
      document.location.reload();
    } else {
      // If not logged in, redirect to login page
      document.location.replace('/login');
    }
  }
};

document
  .querySelector('#new-feedback-form')
  .addEventListener('submit', feedbackFormHandler);