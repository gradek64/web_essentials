



typeAhead.controller('TypeAheadController',['$scope','$rootScope','$location','prompt_service',function($scope,$rootScope,$location,prompt_service){

	/*dataFactory.get('states.json').then(function(data){
		$scope.items=data;
	});*/


		 	$scope.$watch('$scope.serachTerm',function(argument) {
		 		console.log(argument);	
		 	})

		 	$scope.page=0;
		    $scope.sendSearchSuggestions = {searchTermField: ""};

		    console.log($scope.searchTerm);
		    
		    $scope.searchAndSend = function(event,searchType) {

		 

		    	//start searching after second charakter;
		    if($scope.searchTerm.length>1){

				    	//dont search if you use up and down arrows and enter
				    if(event.keyCode!=40 && event.keyCode!=38 && event.keyCode!=13) {
							    prompt_service.search($scope.searchTerm, $scope.page++,searchType).then(function(results){
									  			//reset array in every search first;
									  			$scope.MC_recipes = [];
								                //populate ng-repeat array in index for results;
								                var ii = 0;
								                var current;
								                for(;ii < results.length; ii++){
								                	if(results.length>0){//not empty
									                	if(current!=results[ii]){//remove duplicates
									                		$scope.MC_recipes.push(results[ii]);
									                		current = results[ii];	

									                	}
								                	}
								                }

								                console.log('$scope.MC_recipes ins');
						 						console.log($scope.MC_recipes);
						 						console.log('$scope.MC_recipes ins');

						 						 //send results to the suggestions directive  with refference to searchField,event,results
											    $scope.sendSearchSuggestions = {searchTermField: $scope.searchTerm, eventSent:event, searchPhraseArray: $scope.MC_recipes};
											     //send results to the suggestions directive  with refference to searchField,event,results via custom event so directive will listen for it;
											    $scope.$broadcast('sendElasticResults', {searchTermField: $scope.searchTerm, eventSent:event, searchPhraseArray: $scope.MC_recipes});

						         });
				   		}
				   		 if(event.keyCode==40 || event.keyCode==38 || event.keyCode==13){
				   		 	$scope.$broadcast('sendElasticResults', {searchTermField: $scope.searchTerm, eventSent:event, searchPhraseArray: $scope.MC_recipes});
				   		 }
				   
				  }//is searchterm defined
				  else {
				  	//$scope.$broadcast('sendElasticResults', {searchTermField: $scope.searchTerm, eventSent:event, searchPhraseArray: []});
				  	//$scope.MC_recipes = [];

				  }

		    }
		    
		    $scope.testFunc = function(someObject) {
		        console.log("myController.testFunc: ",someObject);
		    };
}]);


typeAhead.directive("elasticsearchSuggestionsDirective", function() {
        return {
            restrict: 'E',
            scope: {
                elasticsearchPasser: '=',
                bVar: '&'
            },
            templateUrl:'templates/templateurl2.html',
            controller: function($scope, $attrs) {
            $scope.test = [];
            //dont show list by default;
            $scope.showlist = false;
            $scope.current=0;
            
                	/*
							we connecting with main Controller via elasticsearchPasser 
							so we can watch that field for changes but that a bit accesive since we do that in conroller via ng-keydown
							so it is better to use custom event via broadast (broadcast down the line to children);

							 $scope.$watch("elasticsearchPasser", function(newValue, oldValue, scope) {
                	*/

            $scope.$on('sendElasticResults',function(evt,data){
            		
                //if(angular.isDefined(newValue) && newValue !== null) {
                    
            								   
            								    console.log('data.searchPhraseArray');
            								    console.log(data.searchPhraseArray);
            								    console.log('data.searchPhraseArray');
            		//arrow selection from search field;
            		//arrow down
            		if(event.keyCode==40) if( $scope.current<$scope.items.length-1 )$scope.current++;
            		//arrow up
            		if(event.keyCode==38)  if($scope.current!==0) $scope.current--;
            		//enter/return key
            		//if(event.keyCode==13) $scope.handleSelection($scope.items[angular.element(event.target).attr('pid')].name);
            		if(event.keyCode==13){

            			$scope.handleSelection($scope.items[$scope.current]);
            			$scope.showlist = false;
            			$scope.items = [];
            		} 
                    //pupulate the suggerstions array;
                    if(data.searchPhraseArray.length==0){ $scope.current=0; $scope.items = [];$scope.showlist = false;}
                    if(data.searchPhraseArray.length<=1){ $scope.current=0;}
                    if(data.searchPhraseArray.length!=0 && event.keyCode!=13){
    	                $scope.items = data.searchPhraseArray;
    	                $scope.showlist = true;
                    }

                    

                    //for mouseover 
                    if(event.type == "mouseover") $scope.current = event.target.id;
            });



    		/**
				List interactions

    		*/
			//heightlighting
			$scope.isCurrent=function(index){
			  	//returns true of false clever;
				 return $scope.current==index;
			 };
			$scope.setCurrent=function(event,index){

				//console.log(event);

				  	//arrow down
				  	if(event.keyCode==40) if($scope.current!=-1)$scope.current++;
				  	//arrow up
				  	if(event.keyCode==38)  if($scope.current!==0) $scope.current--;
				  	//enter/return key
				  	//if(event.keyCode==13) $scope.handleSelection($scope.items[angular.element(event.target).attr('pid')].name);
				  	if(event.keyCode==13){
				  		$scope.handleSelection($scope.items[scope.current].name);
				  	} 

				  	//for mouseover 
				  	if(event.type == "mouseover") $scope.current = event.target.id;
	  	
			  };
  			  $scope.handleSelection=function(selectedItem){
  		  		//update search field with selection
  			   	//scope.elasticsearchresponse = selectedItem;
  			   	//hide suggestion list;
  			   	//scope.showSugguestions = false;
  			   	//console.log(selectedItem);
  			   	$scope.$parent.set=true;
  				 $scope.$parent.searchTerm=selectedItem;
  				 //console.log(angular.element($scope.$parent.searchTerm));
  				 //dont show list if it is not selected;
  				 $scope.showlist = false;
  			
  			  };

           
            }
        };           
    });

typeAhead.factory('dataFactory', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data;
      });
    }
  };
});