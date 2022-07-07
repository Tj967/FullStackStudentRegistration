function loadList() {
    console.log("loading");
    $.ajax({
        type: 'GET',
        url: '/students', //give student registration get url here
        success: function (studentsArray) {
            var studentsDiv = $('div#allStudents');
            //$("div#allContacts").html(result);
            //alert("result:" + contactArray);
            studentsDiv.html('');
            $.each(studentsArray, function (index, student) {
                var studentInfo = '<p class="' + student.id + '">';
                studentInfo += 'id: ' + student.id + '<br>';
                studentInfo += 'Name: ' + student.name + '<br>';
                studentInfo += 'age: ' + student.age + '<br>';
                studentInfo += 'Phone: ' + student.mobileNumber + '<br>';
                studentInfo += '<button class="btn btn-info" id="editStudent" value="' + student.id + '">Edit</button> ';
                studentInfo += '<button class="btn btn-danger" id="deleteStudent" value="' + student.id + '">Delete</button> ';
                studentInfo += '<hr class="' + student.id + '">';
                studentInfo += '</p>';

                studentsDiv.append(studentInfo);
            })
        },
        error: function () {
            alert('FAILURE!');
        }
    })
};

$(document).ready(function () {
    $("#hideStudents").on("click", function () {
        $("#allStudents").toggle("slow");
    })
});
$(document).ready(function () {
    $('#newStudent').submit(function (e) {
        e.preventDefault();
        var newStudent = {
            'name': $("#studentName").val(),
            'age': $("#studentAge").val(),
            'mobileNumber': $("#studentMobileNumber").val(),
        };
        //console.log(JSON.stringify(newStudent));
        $.ajax({
            url: '/students',
            type: 'post',
            data: JSON.stringify(newStudent),
            dataType: 'text',
            contentType: 'application/json;charset=UTF-8',
            success: function (data) {
                var student = JSON.parse(data);
                var studentsDiv = $('div#newStudents');
                var studentInfo = '<p class="' + student.id + '">';
                studentInfo += 'id: ' + student.id + '<br>';
                studentInfo += 'Name: ' + student.name + '<br>';
                studentInfo += 'age: ' + student.age + '<br>';
                studentInfo += 'Phone: ' + student.mobileNumber + '<br>';

                studentsDiv.html(studentInfo);

                studentInfo += '<button class="btn btn-info" id="editStudent" value="' + student.id + '">Edit</button> ';
                studentInfo += '<button class="btn btn-danger" id="deleteStudent" value="' + student.id + '">Delete</button> ';
                studentInfo += '</p><hr class="' + student.id + '">';
                $('div#allStudents').prepend(studentInfo);
            },
        });
    });
});
$(document).ready(function () {
    console.log("button ready");
    $(document).on("click", "#deleteStudent", function () {
        console.log("CLICK DELETE");
        var studentID = $(this).val();
        $.ajax({
            url: 'http://localhost:8080/students/' + studentID,
            type: 'DELETE',
            success: function (response) {
                $('.' + studentID + '').remove();
            }
        })

    });
});
$(document).ready(function () {
    $("#findById").click(function (e) {
        e.preventDefault();
        var studentID = $("#searchContent").val();
        $.ajax({
            url: 'http://localhost:8080/students/' + studentID,
            type: 'GET',
            dataType: 'application/json',
            contentType: 'application/json;charset=UTF-8',
            complete: function (data) {
                var student = JSON.parse(data.responseText);
                var studentsDiv = $('div#studentSearch');
                var studentInfo = '<p class="' + student.id + '">';
                studentInfo += 'id: ' + student.id + '<br>';
                studentInfo += 'Name: ' + student.name + '<br>';
                studentInfo += 'age: ' + student.age + '<br>';
                studentInfo += 'Phone: ' + student.mobileNumber + '<br>';

                studentsDiv.html(studentInfo);

                studentInfo += '<button class="btn btn-info" id="editStudent" value="' + student.id + '">Edit</button> ';
                studentInfo += '<button class="btn btn-danger" id="deleteStudent" value="' + student.id + '">Delete</button> ';
                studentInfo += '</p><hr class="' + student.id + '">';
                $(studentsDiv).html(studentInfo);
            }
        })
    })
});

$(document).ready(function () {
    loadList(); //load list on load
    $("button#getStudents").click(loadList); //refresh on click
});
$(document).ready(function () {
    console.log("Ready to edit");
    $(document).on("click", "button#editStudent", function () {
        var studentID = $(this).val();
        $.ajax({
            url: 'http://localhost:8080/students/' + studentID,
            type: 'GET',
            dataType: 'application/json',
            contentType: 'application/json;charset=UTF-8',
            complete: function (data) {
                var student = JSON.parse(data.responseText);
                $("#editID").text("Editing student " + student.id);
                $("#editStudentID").val(student.id);
                $("#editStudentName").val(student.name);
                $("#editStudentAge").val(student.age);
                $("#editStudentMobileNumber").val(student.mobileNumber);
            }
        })
    });
})
$(document).ready(function () {
    console.log("ready to edit2");
    $("#editStudentForm").submit(function (e) {
        e.preventDefault();
        var student = {
            'id': $("#editStudentID").val(),
            'name': $("#editStudentName").val(),
            'age': $("#editStudentAge").val(),
            'mobileNumber': $("#editStudentMobileNumber").val()
        }
        
        console.log(student);
        $.ajax({
            url: 'http://localhost:8080/students/' + student.id,
            type: 'PUT',
            data: JSON.stringify(student),
            dataType: 'application/json',
            contentType: 'application/json;charset=UTF-8',
            complete: function () {
                alert("Successfully updated student " + student.id);
            	//add some logic to refresh all students with this id
            }
        })
    })
})
//could make one overarching div to display current content, then nav bar to get feature -> search, show just one student -> register brings up form, ->show all students shows table of all students
