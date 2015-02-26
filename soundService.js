var app = angular.module('sounder');

app.service('soundService', function($http, $q){
	var key = 'bda4ada8694db06efcac9cf97b872b3e'
	this.getUser = function(username){
		var deferred = $q.defer();
		$http ({
			method: 'GET',
			url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=' + key
		}).then(function(response){
			deferred.resolve(response.data)
		})
		return deferred.promise
	}
})