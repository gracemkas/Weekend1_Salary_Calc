class Employee{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary ){
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = idNumber;
      this.jobTitle = jobTitle;
      this.annualSalary = annualSalary;
    } // end constructor
  } // end Employee class
  const employees = [];



$(document).ready( readyNow );

function readyNow() {
    addClickHandlers();
    console.log('jquery ready to rock and or roll.');
    //Append cohorts to DOM
        //loop through array
        //for(let i = 0; i < cohorts.length; i++)
        for (let cohort of cohorts){
            //append cohort info to table
            //$('tr')//selecting all tr on the dom
            //$('<tr></tr>')making a new element not on DOM
            //let $row = $('<tr></tr>'); //creates a table row
            //cohort name, status, number
            //$row.append('<td>' + cohort.cohortName + '</td>');
            //$row.append('<td>' + cohort.status + '</td>');
            //$row.append('<td>' + cohort.numberOfStudents + '</td>');
            //$row.append(`<td><button class="deleteBtn">Delete</button></td>`);
            //template literal, ES6
            //$row.append(`<td>${cohort.numberOfStudents}</td>`)

            //add to table
            //$('#cohortTable').append($row);

            addRow(cohort.cohortName, cohort.status, cohort.numberOfStudents);
        }
}

function addClickHandlers(){
    //On click or delete, delete row
    //need to target a parent already on the table
    $('#cohortTable').on('click', '.deleteBtn', handleDelete);
    //On click of submit add row
    $('#submit').on('click', handleSubmit);
}

function handleSubmit(){
    //collect input values, add row, clear inputs
    let name = $('#name').val();
    let status = $('#status').val();
    let numStudents = $('#numStudents').val();
    addRow(name, status, numStudents);
    $('#name').val('');
    $('#status').val('');
    $('#numStudents').val('');
}

function handleDelete(){
    console.log('clicked');
    //Remove the row .remove()
    //$(this).parent().parent().remove();
    //find and remove a specific parent
    //$(this).parents('tr').remove();
    //remove the closest thing to me with tr
    $(this).closest('tr').remove();
}

function addRow(name, status, numStudents){
    //append to DOM
    let $row = $('<tr></tr>');
    $row.append('<td>' + name + '</td>');
    $row.append('<td>' + status + '</td>');
    $row.append('<td>' + numStudents + '</td>');
    $row.append(`<td><button class="deleteBtn">Delete</button></td>`);
    $('#cohortTable').append($row);
}