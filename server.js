// server.js
const { exec } = require('child_process');
const port = 8080;

// 使用 http-server 启动服务器
exec(`http-server dist -p ${port}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error.message}`);
        if (error.signal) {
            console.error(`Process terminated by signal: ${error.signal}`);
        } else if (error.code) {
            console.error(`Process exited with code: ${error.code}`);
        }
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

let openCommand;
if (process.platform === 'darwin') {  // macOS
    openCommand = 'open';
} else if (process.platform === 'win32') {  // Windows
    openCommand = 'start';
} else { // Linux
    openCommand = 'xdg-open';
}

// 打开浏览器
exec(`${openCommand} http://127.0.0.1:${port}`, (openError) => {
    if (openError) {
        console.error(`Error opening browser: ${openError.message}`);
        if (openError.signal) {
            console.error(`Browser open process terminated by signal: ${openError.signal}`);
        } else if (openError.code) {
            console.error(`Browser open process exited with code: ${openError.code}`);
        }
    }
});

console.log("服务已经在 8080 端口启动，如果没有自动打开浏览器，请手动打开浏览器并输入以下网址:")
console.log("http://localhost:8080");
