app.controller('BeerController', function($scope, httpFactory, $timeout) {

	// $scope.beer = {};
	$scope.success = false;

	getBeers = function(url) {
		httpFactory.get(url)
		.then(function(response) {
			$scope.beers = response.data;
		});
	};

	getBeers('/api/v1/beers');

	function messageTimeout() {
		$scope.success = false;
	}
		
	$scope.postBeer = function() {
		var payload = $scope.beer;
		httpFactory.post('/api/v1/beers', payload)
		.then(function(response) {
			console.log(response);
			// getBeers('/api/v1/beers');
			$scope.beers.push(response.data);
			$scope.beer = {};
			$scope.success = true;
			$scope.message = 'Added a new beer. Thanks!';
			$timeout(messageTimeout, 3000);
		});
	};

	$scope.editBeer = function() {

	};

	$scope.removeBeer = function() {
		httpFactory.delete('/api/v1/beer/' + response.data.id)
		.then(function(response) {
			console.log(response);
		});
	};




});