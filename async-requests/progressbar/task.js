document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const sendButton = document.getElementById('send');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const xhr = new XMLHttpRequest();
  
      xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          progress.value = percentComplete;
        }
      });
  
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          alert('Файл успешно загружен!');
        } else {
          alert('Произошла ошибка при загрузке файла. Пожалуйста, попробуйте еще раз.');
        }
      });
  
      xhr.addEventListener('error', function () {
        alert('Произошла ошибка при загрузке файла. Пожалуйста, попробуйте еще раз.');
      });
  
      const formData = new FormData(form);
      xhr.open('POST', form.action, true);
      xhr.send(formData);
      sendButton.disabled = true;
    });
  });
  