# 密码输入框

一个简单的密码输入框功能，用来作为angularjs directive的学习。


效果展示：
[显示密码](https://github.com/xixi880928/AngularJs-UI/blob/master/passworldinpu/app/%E7%9D%81%E7%9C%BC.png)
[隐藏密码](https://github.com/xixi880928/AngularJs-UI/blob/master/passworldinpu/app/%E9%97%AD%E7%9C%BC.png)

**relate blog articles:**
[angular.element](http://www.jb51.net/article/59544.htm)
-

```
    // in the view
    <csp-password-input conf="passwordConf"></csp-password-input>

    // in the controller
    $scope.passwordConf = {
    password: 1,
    disable:false

    };
```

conf is a object, it has attributes like below:

*   placeholderText: placeholder text, default '密码输入'
*   password: password
*   maxLength:  max length in your input, default 128
