let url = document.URL;
function runCode(value) {
    let code = value.value;
    let a = code.split('\n');
    console.log(a);
    let str = a.toString();
    if (str.indexOf('if') != -1) {
        document.write(`<script>${code}` + '<' + '/script>');
        location.reload(url);
    } else {
        let a = code.split('\n');
        for (let i = 0; i <= a.length; i++) {
            eval(a[i]);
        }
    }
}
function consoleRunCode(values) {
    let code = values.value;
    let data = code.split('\n');
    data.pop();
    console.info('输出结果为：');
    for (const value of data) {
        eval(value);
    }
}

function historyGo() {
    window.history.go(-1);
}
