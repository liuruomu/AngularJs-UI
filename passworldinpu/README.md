# 密码输入框

一个简单的密码输入框功能，用来作为angularjs directive的学习。


效果展示：

**relate blog articles:**

-
    // in the view
    <csp-password-input conf="passwordConf"></csp-password-input>

    // in the controller
    $scope.passwordConf = {
    password: 1,
    disable:false

    };


conf is a object, it has attributes like below:

*   placeholderText: placeholder text, default '密码输入'
*   password: password
*   maxLength:  max length in your input, default 128
