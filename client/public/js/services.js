app.factory('httpFactory', ['$http', function($http) {

	var obj = {};

	// get request
	obj.get = function(url) {
		return $http.get(url);
	};

	// post request
	obj.post = function(url, payload) {
		return $http.post(url, payload);
	};

	// delete request
	obj.delete = function(url) {
		return $http.delete(url);
	};

	// put request
	obj.put = function(url, payload) {
		return $http.put(url, payload);
	};

	return obj;

}]);