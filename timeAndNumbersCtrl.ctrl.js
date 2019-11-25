module.controller("timeAndNumbersCtrl", CtorCtrl)

function CtorCtrl($scope) {

  $scope.time = new Date()
  $scope.number = 10
  $scope.allNumbers[0]

  $scope.refresh = () => {
    $scope.time = Date.now
  }  
  $scope.inc = () => {
    $scope.number++
  }
  $scope.dec = () => {
    $scope.number--
  }
  $scope.add = () => {
    $scope.allNumbers.add(number)
  }
  $scope.print = () => {
    alert(allNumbers)
  }

}