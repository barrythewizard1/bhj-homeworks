document.addEventListener('DOMContentLoaded', function () {
    var editor = document.getElementById('editor');
    var savedText = localStorage.getItem('editorText');

    if (savedText) {
        editor.value = savedText;
    }

    editor.addEventListener('input', function () {
        var currentText = editor.value;
        localStorage.setItem('editorText', currentText);
    });
});
