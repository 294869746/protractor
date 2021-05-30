# protractor

添加一个protractor 自动化测试框架

## 安装依赖包
npm install -g protractor

npm install protractor-jasmine2-html-reporter

npm install jasmine-spec-reporter

## 更新webdriver
webdriver-manager update

## 执行命令
protractor protractor.conf.js


目录结构
compontent  组件目录，各个组件分装，例如：输入框，选择框，下拉框，多选，单选等等
page-objects   页面对象，每个页面封装
page-specs  测试类或流程串联