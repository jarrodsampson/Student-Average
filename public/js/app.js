var app = angular.module("StudentApp", ['ngAnimate']); // module init
app.controller("StudentController", function($scope) { // controller init

    // $scope.studentList = [];
    // dummy data
    $scope.studentList = [
        {first: 'Alec', last: 'Winters', memo: 'black hair is worn in a style that reminds you of a pile of leaves.', editing: false, test:[{id: 1, test_score: 17},{id: 2, test_score: 87},{id: 3, test_score: 100},{id: 4, test_score: 85.5},{id: 5, test_score: 92.4}]},
        {first: 'Reese', last: 'Summer', memo: 'This tense lady has almond-shaped brick-red eyes.', editing: false, test:[{id: 2, test_score: 57},{id: 2, test_score: 97},{id: 3, test_score: 55},{id: 4, test_score: 93},{id: 5, test_score: 87.6}]},
        {first: 'Finese', last: 'Piper', memo: 'Her silky, wavy, orange hair is worn in a style that reminds you of a porcupine\'s quills.', editing: false, test:[{id: 3, test_score: 47},{id: 2, test_score: 47},{id: 3, test_score: 71},{id: 4, test_score: 91},{id: 5, test_score: 77.3}]},
        {first: 'Happi', last: 'Johnson', memo: 'She is very tall and has an elegant build.', editing: false, test:[{id: 4, test_score: 37},{id: 2, test_score: 57},{id: 3, test_score: 69},{id: 4, test_score: 87.5},{id: 5, test_score: 67}]},
        {first: 'Chen', last: 'Myraid', memo: 'He has deep-set orange eyes that are like two rising suns.', editing: false, test:[{id: 5, test_score: 27},{id: 2, test_score: 87},{id: 3, test_score: 66},{id: 4, test_score: 72},{id: 5, test_score: 79}]},
        {first: 'Chang', last: 'Winston', memo: 'He is bald, but used to have silky, straight, black hair.', editing: false, test:[{id: 6, test_score: 17},{id: 2, test_score: 83},{id: 3, test_score: 57},{id: 4, test_score: 74},{id: 5, test_score: 90.5}]},
        {first: 'Hossil', last: 'Lee', memo: 'He is short and has a graceful build', editing: false, test:[{id: 7, test_score: 7},{id: 2, test_score: 82},{id: 3, test_score: 99},{id: 4, test_score: 78},{id: 5, test_score: 57.5}]},
        {first: 'David', last: 'Matt', memo: 'He is short and has an overmuscled build.', editing: false, test:[{id: 8, test_score: 97},{id: 2, test_score: 97},{id: 3, test_score: 100},{id: 4, test_score: 87.5},{id: 5, test_score: 82}]},
        {first: 'Love', last: 'Feels', memo: 'This dishonest guy has round blue eyes that are like two lagoons.', editing: false, test:[{id: 9, test_score: 85},{id: 2, test_score: 67},{id: 3, test_score: 96},{id: 4, test_score: 56},{id: 5, test_score: 71}]},
        {first: 'Hope', last: 'Black', memo: 'This girl makes you think of a waiting vulture.', editing: false, test:[{id: 10, test_score: 81},{id: 2, test_score: 57},{id: 3, test_score: 63},{id: 4, test_score: 96.5},{id: 5, test_score: 60.5}]},
        {first: 'Faith', last: 'Green', memo: 'She has an athletic build.', editing: false, test:[{id: 11, test_score: 84},{id: 2, test_score: 83},{id: 3, test_score: 77},{id: 4, test_score: 98},{id: 5, test_score: 94}]},
        {first: 'Rob', last: 'Slauson', memo: 'He has hollow cheeks and large hands. His wardrobe is practical, with a lot of red and orange.', editing: false, test:[{id: 12, test_score: 85},{id: 2, test_score: 83},{id: 3, test_score: 81},{id: 4, test_score: 99},{id: 5, test_score: 83}]},
        {first: 'Andy', last: 'Camper', memo: 'He has stubby-fingered hands. His wardrobe is sexy and unusual, with a lot of red and white.', editing: false, test:[{id: 13, test_score: 55},{id: 2, test_score: 89},{id: 3, test_score: 90},{id: 4, test_score: 47.5},{id: 5, test_score: 72.5}]},
        {first: 'Mary', last: 'Mariposa', memo: 'This aloof girl has droopy brown eyes that are like two discs of wood.', editing: false, test:[{id: 14, test_score: 76},{id: 2, test_score: 86},{id: 3, test_score: 67},{id: 4, test_score: 57},{id: 5, test_score: 69.7}]},
        {first: 'Stacy', last: 'Truval', memo: 'Her silky, curly, red hair is medium-length and is worn in an uncomplicated, severe style.', editing: false, test:[{id: 15, test_score: 46},{id: 2, test_score: 88},{id: 3, test_score: 88},{id: 4, test_score: 97.5},{id: 5, test_score: 87.9}]},
        {first: 'Lea', last: 'Sampson', memo: 'Her wardrobe is artistic and bizarre, with a lot of blue and yellow.', editing: false, test:[{id: 16, test_score: 40},{id: 2, test_score: 97},{id: 3, test_score: 77},{id: 4, test_score: 47},{id: 5, test_score: 87.4}]}
    ];
    $scope.studentCount = $scope.studentList.length;
    $scope.testHolder = [{id: 1, test_score: ""}];
    $scope.searchShow = true;
    $scope.classAverageTotal = 0;

    $scope.scoresB = false;

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
        if (newItemNo <= 5) {
            $scope.testHolder.push({'id': newItemNo, test_score: ""});
        } else {
            Materialize.toast("Student Can Only take 5 Tests!", 6000, 'square');
        }
    };

    $scope.removeScore = function() {
        var lastItem = $scope.testHolder.length-1;
        $scope.testHolder.splice(lastItem);
    };

    $scope.getAverage = function (student) {
        var scoreCount = 0;
        for (var i = 0; i < student.test.length;++i) {
            if (!isNaN(student.test[i].test_score)) {
                scoreCount += parseInt(student.test[i].test_score);
            }
        }
        $scope.average = scoreCount / student.test.length;
        $scope.average = $scope.average.toFixed(2);
        console.log($scope.average);
        console.log(student);
        Materialize.toast(student.first + ' ' + student.last + ' Average: ' + $scope.average, 6000, 'rounded');
    };

    $scope.getAverageCount = function (student) {
        var scoreCount = 0;
        for (var i = 0; i < student.test.length;++i) {
            if (!isNaN(student.test[i].test_score)) {
                scoreCount += parseInt(student.test[i].test_score);
            }
        }
        $scope.average = scoreCount / student.test.length;
        $scope.average = $scope.average.toFixed(2);
        return $scope.average;
    };

    $scope.editStudent = function (student) {
        student.editing = true;
    };

    $scope.doneEditing = function (student, value) {

        if (value != "") {
            student.editing = false;
        }
    };

    $scope.hideSearch = function () {
        $scope.searchShow = !$scope.searchShow;
    };

    $scope.withScores = function () {
        $scope.scoresB = !$scope.scoresB;
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

    $scope.getClassAverageTotal = function () {
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
        return classAv.toFixed(2);
        //Materialize.toast('Class Average: ' + classAv, 6000, 'rounded');
    };


});