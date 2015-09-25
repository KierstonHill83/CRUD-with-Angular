app.controller('BeerController', function($scope, httpFactory, $timeout) {

	// $scope.beer = {};
	$scope.success = false;
	$scope.edit = false;
	$scope.findBeer = "";

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

	$scope.editBeer = function(id) {
		$scope.findBeer = '/api/v1/beer/' + id;
		httpFactory.get($scope.findBeer)
		.then(function(response) {
			$scope.beer = response.data;
			console.log($scope.beer);
		});
		$scope.edit = true;
	};

	$scope.updateBeer = function() {
		var update = $scope.beer;
		httpFactory.put($scope.findBeer, update)
		.then(function(response) {
			console.log(response);
			getBeers('/api/v1/beers');
			$scope.beer = {};
			$scope.edit = false;
			$scope.success = true;
			$scope.message = 'Edited the beer. Thanks!';
			$timeout(messageTimeout, 3000);
		});
	};

	$scope.removeBeer = function(id) {
		$scope.findBeer = '/api/v1/beer/' + id;
		httpFactory.delete($scope.findBeer)
		.then(function(response) {
			console.log(response);
			getBeers('/api/v1/beers');
			$scope.success = true;
			$scope.message = 'Deleted the beer. Thanks!';
			$timeout(messageTimeout, 3000);
		});
	};




});