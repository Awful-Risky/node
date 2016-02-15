//----------Module------------------
angular.module('crowdSpar', ['dndLists']);

//----------Factory------------------
angular.module('crowdSpar').factory('crowdFactory', [function(){


	//-------------Factory.Classes----------------------
	var NewObjRunningTotal = function (name, image, voteTally, totalRankPoints) {
		this.name            = name;
		this.image           = image;
		this.voteTally       = voteTally;
		this.totalRankPoints = totalRankPoints;
	};

	var NewObjEventArray = function (submittedList, userID) {
		this.submittedList = submittedList;
		this.userID        = userID || 1;	
	}

	//-------------Factory.Lists of Objects----------------------

	var dragFrom = [{
		name: 'Albus Dumbledore',
		image: 'albus.png'
	},
	{
		name: 'Gandalf the Grey',
		image: 'gandalf.png'
	},
	{
		name: 'Merlin',
		image: 'merlin.png'
	},
	{
		name: 'Harry Dresden',
		image: 'harryDresden.png'
	},
	{
		name: 'Mickey Mouse',
		image: 'mickeyMouse.png'
	},
	{
		name: 'Elminster Aumar',
		image: 'elminsterAumar.png'
	},
	{
		name: 'Harry Potter',
		image: 'harryPotter.png'
	},
	{
		name: 'Radagast the Brown',
		image: 'theBrown.png'
	},
	{
		name: 'Dr. Strange',
		image: 'drStrange.png'
	},
	{
		name: 'Raistlin Majere',
		image: 'raistlinMajere.png'
	},

	{
		name: 'Fistandantilus',
		image: 'fistandantilus.png'
	},
	{
		name: 'Wizard of Oz',
		image: 'wizardOfOz.png'
	},
	{
		name: 'The Crimson King',
		image: 'crimsonKing.png'
	},
	{
		name: 'BenJarvusi Dreen-Ellis',
		image: 'headShot.png'
	}];

	var dropTo = [];        //Built on drop/sort events
	var runningTotal = [];  //Built on the fly
	var eventArray = [];    //built on the fly
	

	//-------------Factory.Return for Injection----------------------
	return {
		NewObjRunningTotal : NewObjRunningTotal,     //Class constructor
		NewObjEventArray   : NewObjEventArray,       //Class constructor
		dragFrom           : dragFrom,               
		dropTo             : dropTo,
		runningTotal       : runningTotal,
		eventArray         : eventArray
	}

}]);

//----------Contoller------------------------------------------
angular.module('crowdSpar').controller('crowdtroller', ['$scope', 'crowdFactory', function($scope, crowdFactory) {

	//----------Controller.Grabbing from the Factory----------------------	
	$scope.NewObjRunningTotal = crowdFactory.NewObjRunningTotal;
	$scope.NewObjEventArray   = crowdFactory.NewObjEventArray;
	$scope.dragFrom           = crowdFactory.dragFrom;
	$scope.dropTo             = crowdFactory.dropTo;	
	$scope.runningTotal       = crowdFactory.runningTotal;
	$scope.eventArray         = crowdFactory.eventArray;

	//----------Controller.Declaring local scope variables----------------------
	$scope.dragFromOriginal   = angular.copy(crowdFactory.dragFrom);




    //----------Controller.dnd-Lists Functions---------------------------------
    $scope.onSubmit = function () {   
    	if ($scope.dropTo.length != 8) {
    		alert('Please Select and Rank 8 Wizards');
    		$scope.dropTo = [];
	    	$scope.dragFrom = angular.copy($scope.dragFromOriginal);

    	}
    	else {
	    	$scope.tally();
	    	var newEvent = new $scope.NewObjEventArray($scope.dropTo);
			$scope.eventArray.push(newEvent);
	    	$scope.dropTo = [];
	    	$scope.dragFrom = angular.copy($scope.dragFromOriginal);
	    }

    }

    $scope.tally = function () {
    	for (var i = 0; i < $scope.dropTo.length; i++) {
    		var rank = (i+1)
    		var runningTotalMatchCheck = _.find($scope.runningTotal, function(obj){ 
				return obj.name === $scope.dropTo[i].name
			})
			var indexMatch = ($scope.runningTotal.indexOf(runningTotalMatchCheck));

			if (runningTotalMatchCheck === undefined){
				var newRunningTotal = new $scope.NewObjRunningTotal($scope.dropTo[i].name, $scope.dropTo[i].image, 1, rank);
				$scope.runningTotal.push(newRunningTotal);
			}
			else {
				$scope.runningTotal[indexMatch].totalRankPoints+=rank;
				$scope.runningTotal[indexMatch].voteTally++;
			}
			$scope.runningTotalCopy = angular.copy($scope.runningTotal);
			$scope.sortedRunningTotal = _.sortBy($scope.runningTotalCopy, function(patient) {
    			return (patient.totalRankPoints / patient.voteTally);
			});
			console.log($scope.sortedRunningTotal);		
		}
	}
	



}]);


// check


















