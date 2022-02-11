function runCode(value) {
    let code = value.value;
    let url = document.URL;
    document.write(`<script>${code}` + '<' + '/script>');
    location.reload(url);
}
