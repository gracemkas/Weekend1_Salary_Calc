class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

const employees = [];

let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#totalMonthly').append(totalMonthly);
    addClickHandlers();
    for (let employee of employees) {
        addRow(employee.firstName, employee.lastName, employee.idNumber, employee.jobTitle, employee.annualSalary);
    }
}

function addClickHandlers() {
    $('#employeeTable').on('click', '.deleteBtn', handleDelete);
    $('#submit').on('click', handleSubmit);
}

function handleSubmit() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    addRow(firstName, lastName, idNumber, jobTitle, annualSalary);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function handleDelete() {
    $(this).closest('tr').remove();
}

function addRow(firstName, lastName, idNumber, jobTitle, annualSalary) {
    let $row = $('<tr></tr>');
    $row.append('<td>' + firstName + '</td>');
    $row.append('<td>' + lastName + '</td>');
    $row.append('<td>' + idNumber + '</td>');
    $row.append('<td>' + jobTitle + '</td>');
    $row.append('<td>' + annualSalary + '</td>');
    $row.append('<td><button class="deleteBtn">Delete</button></td>');
    $('#employeeTable').append($row);
    newSalary(annualSalary);
}

function newSalary(annualSalary) {
    totalMonthly = totalMonthly + (parseInt(annualSalary) / 12);
    $('#totalMonthly').text(totalMonthly.toFixed(2));
    redMonthly();
}

function redMonthly() {
    if (totalMonthly > 20000) {
        $('#totalMonthly').css("background-color", "red");
    }
}