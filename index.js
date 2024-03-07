console.log('bobbyhadz.com');

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', event => {
  const files = event.target.files;

  const file = files[0];

  console.log(`filename: ${file.name}`);
  console.log(`file size: ${file.size} bytes`);
  console.log(`file type: ${file.type}`);
});

fileInput.addEventListener('click', () => {
  fileInput.value = null;
});
