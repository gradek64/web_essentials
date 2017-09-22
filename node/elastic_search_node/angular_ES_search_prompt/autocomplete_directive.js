//setup a new directive for fetching the results in typeahead
app.directive('autoComplete', [  '$http', '$compile', '$rootScope',
function( $http, $compile, $rootScope) {

  function link(scope, element, attrs) {


   /* scope.$watch(attrs.autoComplete, function(value) {
      if(value === null || value === "" ){
        scope.searchSubmenuView = "hidden";
        return;
      }

      var url = 'http://localhost:8080/api/v1/multi-search?q='+value;
      $http({method: 'GET', url: url})
          .success(function (response){
        var res = response;
        //console.log(res);
        scope.multiResults = res;
        scope.products = res.products;
        scope.coupons = res.coupons;
        scope.collections = res.collections;
        scope.users = res.users;
        scope.searchSubmenuView = "";
        scope.keywords=value;
      }).then(function (response) {
        scope.keywords = value;
        console.log(JSON.stringify($rootScope.appData));
        // get the menu bar template from the server.
        $http.get('/views/home/search_menu.html').success(function(response){
          console.log(response);
          element.replaceWith($compile(angular.element(response))(scope));
        });
      });
    });*/
    console.log('directive');
    console.log(attrs);



  }
  return {
    restrict:"A",//restirct to autocoplete atribute;
    link: link
  };
}]); 