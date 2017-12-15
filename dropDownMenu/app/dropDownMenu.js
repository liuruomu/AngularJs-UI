angular.module('csp.dropDownMenu', []).directive('cspDropDownMenu', [function() {
    return {
        restrict: 'EA',
        templateUrl: './dropDownMenu.html',
        replace: false,
        scope: {
            clickThisItem: "&",
            selectOptions: "@",
            placeholderText: "@"
        },
        link: function(scope, elem, attrs) {
            scope.showSelect = false;
            scope.options = [];

            scope.watch = scope.$watch(function() {

                return attrs.selectOptions;
            }, function(value) {
                scope.options = JSON.parse(value);
                console.log(scope.options);
            }, true);

            scope.$on("$destroy", function() {
                scope.watch();
            });

            scope.showOrHideMySelect = function() {
                scope.showSelect = !scope.showSelect;
            }

            scope.hideMySelect = function() {
                scope.showSelect = false;
            }

            scope.clickItem = function(option) {
              return  scope.clickThisItem(option);
            }
        }
    };
}])
