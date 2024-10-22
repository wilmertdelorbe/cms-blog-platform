const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-entry-title"]').value;
  const content = document.querySelector('textarea[name="blog-entry-content"]').value;

  await fetch(`/api/blogs`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  // Redirect to dashboard after creating a new blog entry
  document.location.replace('/dashboard');
};

document
  .querySelector('#new-blog-entry-form')
  .addEventListener('submit', newFormHandler);