// 获取当前网页地址
// let url = document.URL;
function runCode(id, type, title) {
    let values = document.getElementById(`textarea${id}`);
    let code = values.value;
    if (title === true) {
        let preCode = document.getElementById(`code${id}`).innerHTML;
        if (code.indexOf('if') != -1 || code.indexOf('`') != -1 || code.indexOf('function') != -1 || type === true) {
            eval(preCode + code);
        } else {
            let data = code.split('\n');
            data.pop();
            for (const value of data) {
                eval(preCode + value);
            }
        }
    } else {
        if (code.indexOf('if') != -1 || code.indexOf('`') != -1 || code.indexOf('function') != -1 || type === true) {
            eval(code);
        } else {
            let data = code.split('\n');
            data.pop();
            for (const value of data) {
                eval(value);
            }
        }
    }
}
function consoleRunCode(id, type, title) {
    let values = document.getElementById(`textarea${id}`);
    let code = values.value;
    if (title === true) {
        let preCode = document.getElementById(`code${id}`).innerHTML;
        if (code.indexOf('if') != -1 || code.indexOf('`') != -1 || code.indexOf('function') != -1 || type === true) {
            console.info(`第${id}个例子输出结果为：`);
            eval(preCode + code);
        } else {
            let data = code.split('\n');
            data.pop();
            console.info(`第${id}个例子输出结果为：`);
            for (const value of data) {
                eval(preCode + value);
            }
        }
    } else {
        if (code.indexOf('if') != -1 || code.indexOf('`') != -1 || code.indexOf('function') != -1 || type === true) {
            console.info(`第${id}个例子输出结果为：`);
            eval(code);
        } else {
            let data = code.split('\n');
            data.pop();
            console.info(`第${id}个例子输出结果为：`);
            for (const value of data) {
                eval(value);
            }
        }
    }
    let log = document.getElementById(`log${id}`);
    log.classList.add('log');
    log.innerHTML = '请在本页面点击F12 -> 控制台(Console)中查看输出结果！';
}

// 返回上一页
// function historyGo() {
//     window.history.go(-1);
// }
