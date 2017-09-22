
var searchService = function($q,esFactory, $location) {



		  var client = esFactory({
		    host: $location.host() + ':9200'
		  });

		  /**
		   * Given a term and an offset, load another round of 10 recipes.
		   *
		   * Returns a promise.
		   */
	this.search = function(term, offset) {

		    var deferred = $q.defer();

		    //define you ES query;
		    var query = {
		      match: {
		        _all: term  //term is what we search for;
		      }
		    };



		    client.search({
		      index: 'recipes',
		      type: 'recipe',
		      body: {
		        size: 10,
		        from: (offset || 0) * 10, //difine from where you going to look in database by specific offset;
		        query: query
		      }
		    }).then(
		    	function(result) {//result callback function;

				      var ii = 0;
				      var hits_in;
				      var hits_out = [];

				      //log result object 
				      console.log(result.hits);
				      console.log("result.hits");


				      hits_in = (result.hits || {}).hits || [];

				      for(; ii < hits_in.length; ii++) {
				        hits_out.push(hits_in[ii]._source);
				      }

		      		deferred.resolve(hits_out);


		    		}, 
		    	function(error){
		    		deferred.reject(error);
		    	});




		    return deferred.promise;


   };//end of seach method

   this.formatResults = function(documents){
   		var formatResults = [];

   	documents.forEeach(function(document){
   		formatResults.push(document._source);
   	});

   	return formatResults;

   }

};
app.service('recipe_service',searchService);