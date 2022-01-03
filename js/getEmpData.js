
$(document).ready(function(){
    var innerHTML ="";
    $.ajax({
        url: "http://localhost:3000/employees",
        type: "GET",
        // dataType:"json",
       
    
        success: function (data) {
            console.log(data);
            
            let empArray =data;
            console.log(empArray[0]);
            console.log(empArray[0].profilePic)

            for (const empData of empArray){
                console.log(empData.empDept)
                 innerHTML += 
                `<tr>
                    <td><img class="profile" src="${empData.profilePic}"></td>
                    <td>${empData.empName}</td>
                    <td>${empData.empGender}</td>
                    <td>${empData.empDept}</td>
                    <td>${empData.empSalary}</td>
                    <td>${empData.empStartDate}</td>
                   
                </tr>`
            }
            $('#table-display').append(innerHTML)
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
})
