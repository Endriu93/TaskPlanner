var app = angular.module('Main',['ngMaterial','ngRoute']);

var Task = function(_id,_name,_hours, _color,_finished){
	this.id = _id;
	this.name = _name;
	this.hours = _hours;
	this.isDone = _finished;
	this.styleName = {
		"color" : "white",
		"background-color" : _color,
		"font-size" : "20px",
	    "text-align" : "center",
		"padding-left" : "10px",
		"padding-right" : "10px",
		"padding-top" : "5px",
		"padding-bottom" : "5px",
		"width" : "100%"

	};
	this.styleHours = {
			"color" : "black",
			"font-size" : "30px",
			"padding-top" : "5px",
			"padding-bottom" : "5px",
		};
	this.styleIcon = {
			"color" : this.isDone ? "green" : "rgba(0,0,0,0.18)",
			"font-size": "48px",
			"cursor": "pointer"
	};
	
	this.updateStatus = function()
	{
		this.styleIcon = {
				"color" : this.isDone ? "green" : "rgba(0,0,0,0.18)",
						"font-size": "48px",
						"cursor": "pointer"
				};
	};
};

var TaskType = function(_id,_name){
	this.id = _id;
	this.name = _name;
}

app.config(function($mdThemingProvider) {
	  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
	    'contrastDefaultColor': 'light',
	    'contrastDarkColors': ['50'],
	    '50': 'ffffff'
	  });
	  $mdThemingProvider.definePalette('customBlue', customBlueMap);
	  $mdThemingProvider.theme('default')
	    .primaryPalette('customBlue', {
	      'default': '500',
	      'hue-1': '50'
	    })
	    .accentPalette('pink');
	  $mdThemingProvider.theme('input', 'default')
	        .primaryPalette('grey')
	});

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/calendar', {
            templateUrl : 'pages/calendar.html',
            controller  : 'calendarController'
        })

        // route for the contact page
        .when('/tasks', {
            templateUrl : 'pages/tasks.html',
            controller  : 'tasksController'
        });
}]);

app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('calendarController', function($scope, $mdDialog) {
	//MOCK
	$scope.taskPool = [
	                   new Task(1,'Angielski',1,"#561246",true),
	                   new Task(2,'Angielski',1,"#561246",false),
	                   new Task(3,'Angielski',1,"#561246",false),
	                   new Task(4,'Angielski',1,"#561246",false),
	                   new Task(5,'Angielski',1,"#561246",false),
	                   new Task(6,'Angielski',1,"#561246",false),
	                   new Task(7,'Angielski',1,"#561246",false),
	                   new Task(8,'Angielski',1,"#561246",false),
	                   new Task(9,'Angielski',1,"#561246",false),
	                   new Task(10,'Angielski',1,"#561246",false),
	                   new Task(11,'Angielski',1,"#561246",false),
	                   new Task(12,'Angielski',1,"#561246",false),
	                   new Task(13,'Angielski',1,"#561246",false),
	                   new Task(14,'Angielski',1,"#561246",false),
	                   new Task(15,'Angielski',1,"#561246",false),
	                   new Task(16,'Angielski',1,"#561246",false)
	                   ];
	$scope.message = 'Look! I am an about page.';
	$scope.dateFrom = {
		day: "11",
		month: "may",
		year: "2016"
	};
	$scope.dateTo = {
	    	day: "16",
	    	month: "may",
	    	year: "2016"
	    };
	
	// STYLE
	$scope.dayname = {
			"font-size" : "20px",
		    "text-align" : "center",
	};
	
	$scope.mondayTasks = [];
   $scope.tuesdayTasks = [];
   $scope.wednesdayTasks =  [];
   $scope.thursdayTasks = [];
   $scope.fridayTasks = [];
   $scope.saturdayTasks =  [];
   $scope.sundayTasks =  [];
   
  
   
   // OK
    $scope.prevWeekClick = function(){
    	var result = $scope.getPrevWeek($scope.dateFrom.day,$scope.dateFrom.month,$scope.dateFrom.year);
    	
    	$scope.dateFrom.day = result.dateFrom.day;
    	$scope.dateFrom.month = result.dateFrom.month;
    	$scope.dateFrom.year = result.dateFrom.year;
    	
    	$scope.dateTo.day = result.dateTo.day;
    	$scope.dateTo.month = result.dateTo.month;
    	$scope.dateTo.year = result.dateTo.year;
    	
    	$scope.mondayTasks = result.mondayTasks;
    	$scope.tuesdayTasks = result.tuesdayTasks;
    	$scope.wednesdayTasks = result.wednesdayTasks;
    	$scope.thursdayTasks = result.thursdayTasks;
    	$scope.fridayTasks = result.fridayTasks;
    	$scope.saturdayTasks = result.saturdayTasks;
    	$scope.sundayTasks = result.sundayTasks;

    };
    
    // OK
    $scope.nextWeekClick = function(){
    	var result = $scope.getNextWeek($scope.dateFrom.day,$scope.dateFrom.month,$scope.dateFrom.year);
    	
    	$scope.dateFrom.day = result.dateFrom.day;
    	$scope.dateFrom.month = result.dateFrom.month;
    	$scope.dateFrom.year = result.dateFrom.year;
    	
    	$scope.dateTo.day = result.dateTo.day;
    	$scope.dateTo.month = result.dateTo.month;
    	$scope.dateTo.year = result.dateTo.year;
    	
    	$scope.mondayTasks = result.mondayTasks;
    	$scope.tuesdayTasks = result.tuesdayTasks;
    	$scope.wednesdayTasks = result.wednesdayTasks;
    	$scope.thursdayTasks = result.thursdayTasks;
    	$scope.fridayTasks = result.fridayTasks;
    	$scope.saturdayTasks = result.saturdayTasks;
    	$scope.sundayTasks = result.sundayTasks;

    };
    
    //OK
    $scope.getPrevWeek = function(_dayFrom,_monthFrom,_yearFrom){
    	var result = {};
    	//MOCKED
    	result.dateFrom = {
    		day : (_dayFrom - 7),
    		month : _monthFrom,
    		year : _yearFrom
    	};
    	result.dateTo = {
        		day : (_dayFrom - 2),
        		month : _monthFrom,
        		year : _yearFrom
        	};
    	
    	var loadedRes = $scope.getTasksForWeek(result.dateFrom.day,result.dateFrom.month,result.dateFrom.year);
    	
    	result.mondayTasks = loadedRes.mondayTasks;
    	result.tuesdayTasks = loadedRes.tuesdayTasks;
    	result.wednesdayTasks = loadedRes.wednesdayTasks;
    	result.thursdayTasks = loadedRes.thursdayTasks;
    	result.fridayTasks = loadedRes.fridayTasks;
    	result.saturdayTasks = loadedRes.saturdayTasks;
    	result.sundayTasks = loadedRes.sundayTasks;
    	
    	return result;
    };
    
    //OK
    $scope.getNextWeek = function(_dayFrom,_monthFrom,_yearFrom){
    	var result = {};
    	result.dateFrom = {
    		day : (_dayFrom + 7),
    		month : _monthFrom,
    		year : _yearFrom
    	};
    	result.dateTo = {
        		day : (_dayFrom + 12),
        		month : _monthFrom,
        		year : _yearFrom
        	};
    	
    	var loadedRes = $scope.getTasksForWeek(result.dateFrom.day,result.dateFrom.month,result.dateFrom.year);
    	
    	result.mondayTasks = loadedRes.mondayTasks;
    	result.tuesdayTasks = loadedRes.tuesdayTasks;
    	result.wednesdayTasks = loadedRes.wednesdayTasks;
    	result.thursdayTasks = loadedRes.thursdayTasks;
    	result.fridayTasks = loadedRes.fridayTasks;
    	result.saturdayTasks = loadedRes.saturdayTasks;
    	result.sundayTasks = loadedRes.sundayTasks;

    	return result;
    };
    
    //OK
    $scope.getCurrentWeek = function(_dayFrom,_monthFrom,_yearFrom){
    	var result = {};
    	result.dateFrom = {
    		day : _dayFrom,
    		month : _monthFrom,
    		year : _yearFrom
    	};
    	result.dateTo = {
        		day : _dayFrom,
        		month : _monthFrom,
        		year : _yearFrom
        	};
    	
    	var loadedRes = $scope.getTasksForWeek(result.dateFrom.day,result.dateFrom.month,result.dateFrom.year);
    	
    	result.mondayTasks = loadedRes.mondayTasks;
    	result.tuesdayTasks = loadedRes.tuesdayTasks;
    	result.wednesdayTasks = loadedRes.wednesdayTasks;
    	result.thursdayTasks = loadedRes.thursdayTasks;
    	result.fridayTasks = loadedRes.fridayTasks;
    	result.saturdayTasks = loadedRes.saturdayTasks;
    	result.sundayTasks = loadedRes.sundayTasks;

    	return result;
    };
    
  //OK
    $scope.reloadData = function()
    {
    	var result = $scope.getCurrentWeek($scope.dateFrom.day,$scope.dateFrom.month,$scope.dateFrom.year);
    	
    	$scope.dateFrom.day = result.dateFrom.day;
    	$scope.dateFrom.month = result.dateFrom.month;
    	$scope.dateFrom.year = result.dateFrom.year;
    	
    	$scope.dateTo.day = result.dateTo.day;
    	$scope.dateTo.month = result.dateTo.month;
    	$scope.dateTo.year = result.dateTo.year;
    	
    	$scope.mondayTasks = result.mondayTasks;
    	$scope.tuesdayTasks = result.tuesdayTasks;
    	$scope.wednesdayTasks = result.wednesdayTasks;
    	$scope.thursdayTasks = result.thursdayTasks;
    	$scope.fridayTasks = result.fridayTasks;
    	$scope.saturdayTasks = result.saturdayTasks;
    	$scope.sundayTasks = result.sundayTasks;
    }
    
    // TODO load Data from webservice
    // _dayFrom ... are the Monday days
    $scope.getTasksForWeek = function(_dayFrom,_monthFrom,_yearFrom)
    {
    	var result = {};
    	    	
    	result.mondayTasks = [$scope.taskPool[0],$scope.taskPool[1]];
    	result.tuesdayTasks = [$scope.taskPool[3],$scope.taskPool[4]];
    	result.wednesdayTasks = [$scope.taskPool[5],$scope.taskPool[6]];
    	result.thursdayTasks = [$scope.taskPool[7],$scope.taskPool[8]];
    	result.fridayTasks = [$scope.taskPool[9],$scope.taskPool[10]];
    	result.saturdayTasks = [$scope.taskPool[11],$scope.taskPool[12]];
    	result.sundayTasks = [$scope.taskPool[13],$scope.taskPool[14]];

    	return result;
    }
    
    // TODO send data to webService
    $scope.updateTask = function(taskId,time,isDone){
    	//MOCK
    	for(i=0; i<$scope.taskPool.length; i++)
    		{
    			if ($scope.taskPool[i].id == taskId)
    				{
    					$scope.taskPool[i].hours = time;
    					$scope.taskPool[i].isDone = isDone;
    					$scope.taskPool[i].updateStatus();
    				}
    		}
    }
    
    //TODO send Data to webService
    $scope.addTask = function(_taskType,_date){
    	var nm = _taskType.name;
    	$scope.taskPool[0] = new Task(1,_taskType.name,1,"#561246",true);
    }
    
    //MOCK
    $scope.taskTypesPool = [
    		new TaskType(1,"Angielski"),
    		new TaskType(1,"Niemiecki"),
    		new TaskType(1,"AK")
    ];
    
    //TODO - should fetch from webservice
    $scope.getAvailableTaskTypes = function(){
    	return $scope.taskTypesPool;
    }
    
    //OK
    $scope.getAddTaskMinDate = function(){
    	return new Date();
    }
    
    $scope.addTaskDialog = function(ev) {
        $mdDialog.show({
          controller: AddTaskDialogController,
          templateUrl: 'pages/calendar_addTaskDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          locals: { dataToPass:
        	  {
	        	  availableTaskTypes: $scope.getAvailableTaskTypes(),
	        	  minDate: $scope.getAddTaskMinDate()
        	  }
          },
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(tab) {
          $scope.addTask(tab[0],tab[1]);
          $scope.reloadData();
        }, function() {
        	$scope.status = 'You cancelled the dialog.';
        });
      };
      
	  function AddTaskDialogController($scope, $mdDialog, dataToPass) {
		   $scope.data = dataToPass;
		    $scope.hide = function() {
		      $mdDialog.hide();
		    };
		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };
		    $scope.answer = function() {
		      $mdDialog.hide([$scope.data.selectedTaskType,$scope.data.selectedDate]);
		    };
		  }
    
    $scope.taskDialog = function(ev,_taskId,_taskName, _isDone, _taskTime) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'pages/calendar_taskDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          locals: { dataToPass:
        	  {
	        	  taskId: _taskId,
	        	  taskName: _taskName,
	        	  isDone: _isDone,
	        	  time: _taskTime,
	        	  timeLabel: 'Planned Execution Time H'
        	  }
          },
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(tab) {
          $scope.updateTask(tab[0],tab[1],tab[2]);
          $scope.reloadData();
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
      };
      
	  function DialogController($scope, $mdDialog, dataToPass) {
		   $scope.data = dataToPass;
		    $scope.hide = function() {
		      $mdDialog.hide();
		    };
		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };
		    $scope.answer = function(taskId, time, isDone) {
		      $mdDialog.hide([taskId,time,isDone]);
		    };
		  }

	  // INIT
	   $scope.reloadData();

});

app.controller('tasksController', function($scope,$mdDialog) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    
    //MOCK
    $scope.taskTypesPool = [
                      new TaskType(1,'Angielski'),
                      new TaskType(1,'Niemiecki'),
                      new TaskType(1,'AK')
                      ];
    // STYLE
	$scope.taskTypeList = {
			"font-size" : "20px",
		    "text-align" : "center",
	};
	
	// TODO fetch data from WebService
	$scope.getTaskTypeDetails = function(_taskType)
	{
		//MOCK
		result = {
				planned: 2,
				done: 6,
				time_average: 3.5
		};
		return result;
	}
	
	//OK
	$scope.details = {
			planned: {
				icon: 'dashboard',
				name: 'number of planned tasks:',
				value: 0
			},
			done: {
				icon: 'dashboard',
				name: 'number of finished tasks:',
				value: 0
			},
			time_average: {
				icon: 'dashboard',
				name: 'average time of task:',
				value: 0
			},
			selectedTaskType: null,
			update: function(){
				var data = $scope.getTaskTypeDetails(this.selectedTaskType);
				this.planned.value = data.planned;
				this.done.value = data.done;
				this.time_average.value = data.time_average;
			}
	};
	
	$scope.updateDetails = function(_taskType){
		$scope.details.selectedTaskType = _taskType;
		$scope.details.update();
	};
	
    //OK - at the end of constructor block, the vector is filled
    $scope.taskTypes = [];
    
  //TODO - should fetch from webservice
    $scope.getAvailableTaskTypes = function(){
    	return $scope.taskTypesPool;
    }
    
    //TODO send to webserwice
    $scope.addTaskType = function(_name, _plannedTime){
    	
    }
    
    //TODO 
    $scope.reloadData = function(){
    	
    }
    
    $scope.addTaskTypeDialog = function(ev) {
        $mdDialog.show({
          controller: AddTaskTypeDialogController,
          templateUrl: 'pages/tasks_addTaskTypeDialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          locals: { dataToPass:
        	  {
	        	 
        	  }
          },
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(tab) {
        	$scope.addTaskType(tab[0],tab[1]);
        	$scope.reloadData();
        }, function() {
        	$scope.status = 'You cancelled the dialog.';
        });
      };
      
	  function AddTaskTypeDialogController($scope, $mdDialog, dataToPass) {
		   $scope.data = dataToPass;
		    $scope.hide = function() {
		      $mdDialog.hide();
		    };
		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };
		    $scope.answer = function() {
		      $mdDialog.hide([$scope.data.taskTypeName,$scope.data.taskTypePlannedTime]);
		    };
		  }
	  
	  //OK
	  $scope.taskTypes = $scope.getAvailableTaskTypes();
});

app.controller('Ctrl', ['$scope', '$mdSidenav','$mdDialog','$location', function($scope, $mdSidenav,$mdDialog,$location){
	  $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	  }
	  
	  $scope.go = function ( path ) {
		  $location.path( path );
		};
	  
	  $scope.showAlert = function(_title,_content,_ok) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .clickOutsideToClose(true)
		        .title(_title)
		        .textContent(_content)
		        .ariaLabel('Alert Dialog Demo')
		        .ok(_ok)
		    );
		  };
	  
	  $scope.menu = [
	                 {
	                   link : '',
	                   title: 'Typy zadań',
	                   icon: 'dashboard',
	                   route: '/tasks'
	                 },
	                 {
	                   link : '',
	                   title: 'Calendar',
	                   icon: 'group',
	                   route: '/calendar'
	                 }
	               ];
	  
	  $scope.admin = [
	                  {
	                    link : '',
	                    title: 'Wyloguj',
	                    icon: 'info'
	                  }
	                ];
	  
	  }]);

		
