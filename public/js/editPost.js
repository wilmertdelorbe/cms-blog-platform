const blogEntryId = document.querySelector('input[name="blog-entry-id"]').value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blog-entry-title"]').value;
  const content = document.querySelector('textarea[name="blog-entry-content"]').value;

  await fetch(`/api/blogs/${blogEntryId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // After successful edit, redirect to the dashboard
  document.location.replace('/dashboard');
};

const deleteClickHandler = async function () {
  await fetch(`/api/blogs/${blogEntryId}`, {
    method: 'DELETE',
  });

  // After successful deletion, redirect to the dashboard
  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-blog-entry-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);