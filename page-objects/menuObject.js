function menuObject(name) {
    var menuString = name.split(">");
    var menuList = $('html');
    menuList.click();
    for(var menu in  menuString){
            menuList = menuList.element(by.xpath('//li[contains(@class,\'el-submenu\')]//span[contains(text(), "'+menuString[menu]+'")]'));
            menuList.click();
    }
}

module.exports = menuObject;