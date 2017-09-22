

// Elastich search docment details;
typeAhead.value(
			"elasticsearch_set",
					{ 
						"_indice":"autocompletion",
					    "type":"product",
					   	"suggest":
					   			{"field":"product_suggest"}
					});




var searchService = function($q,esFactory, $location,elasticsearch_set) {



		  var client = esFactory({
		    host: $location.host() + ':9200'
		  });

		  /**
		   * Given a term and an offset, load another round of 10 recipes.
		   *
		   * Returns a promise.
		   */

	this.search = function(term, offset,type) {

		    var deferred = $q.defer();

		  


		    //define you ES query;
		    var query = {
		      match: {
		        _all: term  //term is what we search for;
		      }
		    };

		    var querySearch = {
		        size: 10,
		        from: (offset || 0) * 10, //difine from where you going to look in database by specific offset;
		        query: query
		    };

		    var suggest = {
		    	"suggest" : {
				    "product_suggest":{
				        "text" : term,
				        "completion": {
				            "field" : "tag_suggest"
				        }
				        }
				    }
		    };

		    //pick the query type
		     var  elasticTypeQuery = type == 'search' ? querySearch : suggest ; 

		    

		    client.search({
			 index: elasticsearch_set._indice,
			 type:  elasticsearch_set.type,
			 body:  elasticTypeQuery
		    }).then(
		    	function(result) {//result callback function;

				      var ii = 0;
				      var hits_in,hits_out = [];

				      //log result object 
				      //console.log(result.hits);
				      //console.log("result.hits");

				      if(type=="suggestions") hits_in = result['suggest'][elasticsearch_set.suggest.field][0]['options'];
				      if(type=="search") hits_in = result.hits;


				      //hits_in = (result.hits || {}).hits || [];

				      //console.log('hits_in');
				      //console.log(suggests);
				      //reset hit
				      
				      for(; ii < hits_in.length; ii++) {
				        if(type=="suggestions") hits_out.push(hits_in[ii].text);
				        if(type=="search") hits_out.push(hits_in[ii]._source);
				      };

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
typeAhead.service('prompt_service',searchService);