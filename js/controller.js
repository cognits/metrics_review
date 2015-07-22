var app = angular.module('myApp',[]);

app.controller("mycontroller", function($scope){
	Parse.initialize("SrQy9t8NAqwFABA1tKer8B9yXgwFwdHcG0EQl0yl", "dfTWBxaDYMiSmVOFbNoLVb9KyhczN0FedJXg5Ktj");
	// Variables
	$scope.Projects=[];
	$scope.QATime=[];
	$scope.TotalLine=[];
	$scope.Line=0;
	
	$scope.query = new Parse.Query('Udacity_Code');
	//query limit hace la llamada de mas elementos
	var query = $scope.query.limit(1000);
	query.find({
		success: function(results){
			// cycle through the results
			for(x in results){
				$scope.Projects.push(x);
				$scope.FinalContentProjects = $scope.Projects.pop();
				//TotalQA Results
				$scope.TotalQA = results[x].attributes.Time_that_it_took_QA_and_submit;
				// Envio de Time that is took QA and Submit en Conversión numérica
				$scope.QATime.push(parseInt($scope.TotalQA));
				$scope.Line = results[x].attributes.Number_of_lines_of_code;
			}
			
			// Filter of QATime for delete values NaN, null and undefined
			$scope.QATime = $scope.QATime.filter(function(e){
				return e
			});
			// Ciclo para mostrar el total de lineas de codigo
			for(x=1;x<=535;x++){
				$scope.Line = $scope.QATime[x]+$scope.Line;
				console.log($scope.QATime[x]+$scope.Line);
			}
		},
	
	});
	
});
