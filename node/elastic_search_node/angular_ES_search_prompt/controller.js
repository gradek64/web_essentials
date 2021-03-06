
/**
 * Create a controller to interact with the UI.
 */
app.controller('recipeCtrl',
	['$scope','$location','recipe_service',function($scope,$location,recipes){

        // Provide some nice initial choices
        var initChoices = [
            "flour",
            "raisins",
            "milk",
            "Dairya",
            "muffins",
            "Oatmeal",
            "cake",
            "eggs"
        ];
        var idx = Math.floor(Math.random() * initChoices.length);

        // Initialize the scope defaults.
        $scope.recipes = [];        // An array of recipe results to display
        $scope.page = 0;            // A counter to keep track of our current page
        $scope.allResults = false;  // Whether or not all results have been found.

        // And, a random search term to start if none was present on page load.
        $scope.searchTerm = $location.search().q || initChoices[idx];

        console.log(initChoices[idx]);

        /**
         * A fresh search. Reset the scope variables to their defaults, set
         * the q query parameter, and load more results.
         */
        $scope.search = function(){
            $scope.page = 0;
            $scope.recipes = [];
            $scope.allResults = false;
            $location.search({'q': $scope.searchTerm});
            $scope.loadMore();
        };

        /**
         * Load the next page of results, incrementing the page counter.
         * When query is finished, push results onto $scope.recipes and decide
         * whether all results have been returned (i.e. were 10 results returned?)
         */
        $scope.loadMore = function(){

            recipes.search($scope.searchTerm, $scope.page++).then(function(results){

                if(results.length !== 10){
                    $scope.allResults = true;
                }

                //populate ng-repeat array in index for results;
                var ii = 0;
                for(;ii < results.length; ii++){
                    $scope.recipes.push(results[ii]);
                }
            });
        };

        // Load results on first run
        $scope.loadMore();
    }]
);