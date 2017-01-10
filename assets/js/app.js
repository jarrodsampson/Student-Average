var app = angular.module("StudentApp", ['ngAnimate', 'ngToast']); // module init
app.controller("StudentController", function($scope, ngToast) { // controller init

   // $scope.studentList = [];
    // dummy data
    $scope.studentList = [
        {first: 'Alec', last: 'Winters', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 1, test_score: 17},{id: 2, test_score: 87}]},
        {first: 'Reese', last: 'Summer', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 2, test_score: 57},{id: 2, test_score: 97}]},
        {first: 'Finese', last: 'Piper', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 3, test_score: 47},{id: 2, test_score: 47}]},
        {first: 'Happi', last: 'Johnson', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 4, test_score: 37},{id: 2, test_score: 57}]},
        {first: 'Chen', last: 'Myraid', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 5, test_score: 27},{id: 2, test_score: 87}]},
        {first: 'Chang', last: 'Winston', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 6, test_score: 17},{id: 2, test_score: 83}]},
        {first: 'Hossil', last: 'Lee', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 7, test_score: 7},{id: 2, test_score: 82}]},
        {first: 'David', last: 'Matt', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 8, test_score: 97},{id: 2, test_score: 97}]},
        {first: 'Love', last: 'Feels', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 9, test_score: 85},{id: 2, test_score: 67}]},
        {first: 'Hope', last: 'Black', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 10, test_score: 81},{id: 2, test_score: 57}]},
        {first: 'Faith', last: 'Green', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 11, test_score: 84},{id: 2, test_score: 83}]},
        {first: 'Rob', last: 'Slauson', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 12, test_score: 85},{id: 2, test_score: 83}]},
        {first: 'Andy', last: 'Camper', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 13, test_score: 55},{id: 2, test_score: 89}]},
        {first: 'Mary', last: 'Mariposa', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 14, test_score: 76},{id: 2, test_score: 86}]},
        {first: 'Stacy', last: 'Truval', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 15, test_score: 46},{id: 2, test_score: 88}]},
        {first: 'Lea', last: 'Sampson', memo: 'Some Awesome Stats About me', editing: false, test:[{id: 16, test_score: 40},{id: 2, test_score: 97}]}
    ];
    $scope.studentCount = $scope.studentList.length;
    $scope.testHolder = [{id: 1, test_score: ""}];
    $scope.searchShow = true;
    $scope.classAverageTotal = 0;

    $scope.addStudent = function (student) {
            student.test = $scope.testHolder;
            student.editing = false;
            console.log("Student Added");
            console.log(student);
            $scope.temp = [];
            $scope.studentList.push(student);
            $scope.newStudent = {};
            console.log($scope.studentList);
            $scope.checkStudentCount();
            Materialize.toast('Student Added.', 3000, 'rounded');

    };

    $scope.clearStudents = function () {

            console.log("Students Cleared");
            $scope.studentList = [];
            console.log($scope.studentList);
            $scope.checkStudentCount();
            Materialize.toast('Students Cleared.', 3000, 'rounded');
    };

    $scope.removeStudent = function (id, student) {
        console.log(id);
        $scope.studentList.splice(id, 1);
        console.log($scope.studentList);
        $scope.checkStudentCount();
        Materialize.toast(student.first + ' ' + student.last + ' Removed', 3000, 'rounded');
    };

    $scope.checkStudentCount = function () {
        $scope.studentCount = $scope.studentList.length;
    };

    $scope.setUpTest = function (userId) {
        $scope.userId = userId;
    };

    $scope.addNewScore = function() {
        var newItemNo = $scope.testHolder.length+1;
        $scope.testHolder.push({'id': newItemNo, test_score: ""});
    };

    $scope.removeScore = function() {
        var lastItem = $scope.testHolder.length-1;
        $scope.testHolder.splice(lastItem);
    };

    $scope.getAverage = function (student) {
        var scoreCount = 0;
        for (var i = 0; i < student.test.length;++i) {
            scoreCount += parseInt(student.test[i].test_score);
        }
        $scope.average = scoreCount / student.test.length;
        $scope.average = $scope.average.toFixed(2);
        console.log($scope.average);
        console.log(student);
        Materialize.toast(student.first + ' ' + student.last + ' Average: ' + $scope.average, 6000, 'rounded');
    };

    $scope.editStudent = function (student) {
        student.editing = true;
    };

    $scope.doneEditing = function (student) {
        student.editing = false;
    };

    $scope.hideSearch = function () {
        $scope.searchShow = !$scope.searchShow;
    };

    $scope.classAverage = function () {

        var scores = 0;
        var numTests = 0;

        for (var i = 0; i < $scope.studentList.length; ++i) {
            for (var u = 0; u < $scope.studentList[i].test.length;++u) {
                //console.log($scope.studentList[i].test[u].test_score);
                scores += parseInt($scope.studentList[i].test[u].test_score);
                ++numTests;
                //console.log(numTests);
            }
        }

        var classAv = scores / numTests;
        //console.log(classAv);
        $scope.classAverageTotal = classAv.toFixed(2);
        //Materialize.toast('Class Average: ' + classAv, 6000, 'rounded');
    };


});