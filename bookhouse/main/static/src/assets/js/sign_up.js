
    var app = angular.module('registerApp', ['ipCookie']);

    app.controller('registerCtrl', ['$scope', '$http', '$window', 'ipCookie',function($scope, $http,$window,ipCookie) {
        $scope.user_name='1';
        $scope.user_password='1';
        $scope.gender=null;
      $scope.Mysubmit=function(){
        $http({
            method: 'POST',
            url: '/api/account/sign-up/',
            data: {
              'name':$scope.user_name,  //html传给js,json传给数据库
              'password':$scope.user_password,
               'gender':$scope.gender
            }
          }).success(function (data, status, headers, config) {
            if(data['status'] === 'success') {
                alert('注册成功');
               $window.location = '/account/sign-in/'
            } else if(data['status'] === 'fail') {

                switch(data['data']['code']) {
                    case 1:
                        alert('用户名已存在');
                        break;
                }
            }
        }).error(function(data, status, headers, config) {

        });
      }
    }]);