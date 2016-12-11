
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];

function DIController($scope, $filter) {
  $scope.status  = "";					// Clear message field
  $scope.lunch = "";					// Clear entry field
  $scope.borderColor="transparent";		// Initialize border to be transparent
  
  var msgStyle = {						// CSS record definitions
	  fontCcolor: "",
	  borderColor: ""
  }

  // Button click event
  $scope.evalMenu = function() {
	  // console.log('The lunch menu is "' + $scope.lunch + '"');	  
	  var countItems = parseLunch($scope.lunch, ',');
	  
	  $scope.status = blessHealthyControl(countItems);
	  $scope.fontColor = msgStyle.fontColor;
	  $scope.borderColor = msgStyle.borderColor;
	  
	  
	  // console.log('Font color = ' + msgStyle.fontColor);
	  // console.log('Bordor color = ' + msgStyle.borderColor);
	   
  }; // $scope.evalMenu

  function parseLunch(stringToSplit, separator) {
	  // Count number of food items eaten
	  var numItems = 0;
	  var arrayOfStrings = stringToSplit.split(separator);

	  // console.log('The original string is: "' + stringToSplit + '"');
	  // console.log('The separator is: "' + separator + '"');
	  // console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
	  
	  for (var i=0;i<arrayOfStrings.length;i++) {		// Ignore empty string
		  if (arrayOfStrings[i].length > 0) numItems++;
	  }
      return  numItems;
  }; // parseLunch
  
  function blessHealthyControl(numEaten){
	  // Display appropriate response depending of #item eaten
	  var msg;
	  // console.log('The number items eaten is ' + numEaten);
	  
	  switch (numEaten) {
		  case 0:
		           msg = "Please enter data first";
				   msgStyle.fontColor = 'red';
				   msgStyle.borderColor = 'red';
				   break;
		  case 1:
		  case 2:
		  case 3:
		           msg = "Enjoy!";
				   msgStyle.fontColor = 'green';
				   msgStyle.borderColor = 'green';
				   break;
		  default:
		           msg = "Too Much!";
				   msgStyle.fontColor = 'green';
				   msgStyle.borderColor = 'green';
	  }
	  
	  return msg;	  
  } // blessHealthyControl
  
};  // DIController

})();
