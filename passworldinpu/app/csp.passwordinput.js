angular.module('csp.passwordinput', []) .directive('cspPasswordInput', [function () {
        return {
            restrict: 'EA',
            templateUrl: './passwordInput.html',
            replace: true,
            scope: {
                conf: '='
            },
            link: function (scope, elem, attrs) {
                scope.conf.maxLength = scope.conf.maxLength || 128;
                scope.conf.placeholderText = scope.conf.placeholderText || '输入密码';
                scope.conf.maxLength = scope.conf.maxlength || 11;
                scope.changeInputType = function (e) {
                    var e = angular.element(e.target);
										var type = e.parent().parent().children()[0].type;
										if(type =='text'){
									   	e.parent().parent().children()[0].type = "password";
											e.removeClass("icon-yanjing").addClass("icon-yanjing1");
											e.title ="隐藏密码";
										//	angular.element(e).addClass("icon-yanjing1");
										}else if (type=='password') {
											e.parent().parent().children()[0].type = 'text';
											e.removeClass("icon-yanjing1").addClass("icon-yanjing");
											e.title = "显示密码";
										}
									console.log(e.parent().parent().children()[0].type)
                }
            }
        };
    }
])
