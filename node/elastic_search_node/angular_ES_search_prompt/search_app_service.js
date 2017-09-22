
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

		    var query = {
		      match: {
		        _all: term
		      }
		    };



		    client.search({
		      index: 'recipes',
		      type: 'article', //type is difined one indexing;
		      body: {
		        size: 10,
		        from: (offset || 0) * 10,
		        query: query
		      }
		    }).then(
		    	function(result) {

				      var ii = 0, hits_in, hits_out = [];

				      hits_in = (result.hits || {}).hits || [];

				      for(; ii < hits_in.length; ii++) {
				        hits_out.push(hits_in[ii]._source);
				      }

		      		deferred.resolve(hits_out);
		    	}, deferred.reject);




		    return deferred.promise;


   };//end of seach method

};
app.service('recipe_service',searchService);