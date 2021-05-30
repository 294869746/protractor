function loginPage(user, password){
    this.userElement = $('#txtUser').sendKeys(user);
    this.passwordElement = $('#txtPwd').sendKeys(password);
    this.loginElement = $('#btnLogin').click();
}

module.exports = loginPage;
