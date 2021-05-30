const loginPage = require('./../page-objects/loginPage');
const menuObject = require('./../page-objects/menuObject');
const {browser} = require("protractor");

describe('Protractor Demo App', function() {
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const goButton = element(by.id('gobutton'));
    const latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://uat2jiaowu.test.xdf.cn/');
        new loginPage('wangdapeng', '0');

    });

    it('create mother class', function() {
        new menuObject("产品管理>集团高端产品管理");
        new menuObject("产品管理>学校高端产品分组属性管理");
        new menuObject("产品管理>集团产品库管理");
        new menuObject("产品管理>学校课程产品管理");
        new menuObject("产品管理>配置本地课程产品");
        new menuObject("产品管理>学校高端产品管理");
        new menuObject("产品管理>学校高端产品价格管理");
        new menuObject("产品管理>待审批");
        new menuObject("产品管理>审批未通过");
        new menuObject("产品管理>修改待提交");
        new menuObject("产品管理>草稿箱(新建数据)");
        new menuObject("产品管理>基础项配置>班容管理");
        new menuObject("产品管理>课时课次管理");
        new menuObject("产品管理>课程介绍管理");
        new menuObject("产品管理>审批节点管理");
        new menuObject("产品管理>课程分类管理");
        new menuObject("班级管理>班级查询");
        new menuObject("班级管理>同步云教室查询");
        new menuObject("班级管理>班级产品标签修改");
        new menuObject("班级管理>住宿班管理>住宿班列表");
        new menuObject("班级管理>报名进度查询");
        new menuObject("班级管理>配课表查询");
        new menuObject("班级管理>新设班级>单个设班");
        new menuObject("班级管理>页面设班");
        new menuObject("班级管理>复制设班");
        new menuObject("班级管理>批量导入");
        new menuObject("班级管理>班级模板管理");
        new menuObject("班级管理>组合班管理");
        new menuObject("班级管理>预设班");
        new menuObject("班级管理>待修改");
        new menuObject("班级管理>待审核");
        new menuObject("班级管理>审核未通过");
        new menuObject("班级管理>业务数据查询");
        new menuObject("班级管理>设班检测");
        new menuObject("班级管理>异常数据工作台");
        new menuObject("班级管理>结课通知单");
        new menuObject("班级管理>班级花名册");
        new menuObject("班级管理>绑定学习管理师");
        // element(by.xpath('//a[text()="设母班"]')).click();
        // $('button').click();
        browser.sleep(30000);
    });
});