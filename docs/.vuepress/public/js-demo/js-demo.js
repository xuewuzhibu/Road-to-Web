let url = document.URL;
function runCode(value) {
    let code = value.value;
    document.write(`<script>${code}` + '<' + '/script>');
    location.reload(url);
}
function historyGo() {
    window.history.go(-1);
}
