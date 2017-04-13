# AngularJs Pagination 
使用angularjs directive来封装的分页组件。去掉了原插件对boostrap 分页组件的使用（主要是我们的项目没有使用boostrap）。另外，将分页的html单独拿出来，尽量不使用原插件中'+'连接的方式。

## csp.pagination -- A very simple and useful pagination in AngularJs
Online demo [csp.pagination](https://github.com/xixi880928/AngularJs-UI/blob/master/app/index.html)

**relate blog articles:**

- https://www.miaoyueyue.com/archives/791.html
- https://www.miaoyueyue.com/archives/813.html
- https://www.miaoyueyue.com/archives/833.html

default:

<img src="http://www.miaoyueyue.com/wp-content/uploads/2014/08/9a8495c8f641da099fef6175acefb5d9.png" />

with some css and template change you can turn it to this

<img src="http://www.miaoyueyue.com/wp-content/uploads/2014/08/f12bb2987330a85ebbe5e3420fe9c773.png"/>

    // in the view
    <tm-pagination conf="paginationConf"></tm-pagination>

    // in the controller
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 8000,
        itemsPerPage: 15,
        pagesLength: 15,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){

        }
    };

conf is a object, it has attributes like below:

*   currentPage: Current page number, default 1
*   totalItems: Total number of items in all pages
*   itemsPerPage:  number of items per page, default 15
*   onChange: when the pagination is change, it will excute the function
*   pagesLength: number for pagination size, default 9
*   perPageOptions: define select how many items in a page, default [10, 15, 20, 30, 50]

if you want to use with ajax,you may follow like this:

    $scope.paginationConf = {
        onChange: function() {
            $http.get('xxx', function(data) {
                $scope.paginationConf.totalItems = data.totalItems;
            })
        }
    };
    
