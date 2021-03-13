vscode 安装 Eslint 插件之后 File -> Preferences -> settings -> 搜索 settings.json
将下面的内容添加进去
{
// 默认使用 prettier 格式化支持的文件
"editor.defaultFormatter": "esbenp.prettier-vscode",
// 自动设定 eslint 工作区
"eslint.workingDirectories": [
{
"mode": "auto"
}
],
"eslint.run": "onType",
"eslint.validate": ["javascript", "javascriptreact", "vue", "html"],
"editor.codeActionsOnSave": {
"source.fixAll": true
},
"eslint.alwaysShowStatus": true,
"editor.formatOnSave": true,
"[json]": {
"editor.quickSuggestions": {
"strings": true
},
"editor.suggest.insertMode": "replace"
},
"editor.formatOnPaste": true,
"eslint.format.enable": true,
"explorer.confirmDelete": false // 开启保存格式化
}
