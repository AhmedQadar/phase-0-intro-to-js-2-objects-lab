let employee = {
    name: 'Ahmed',
    streetAddress: '30300 Kp'
}

function updateEmployeeWithKeyAndValue () {
    const newEmployee = {...employee};
    newEmployee['name'] = 'Sam';
    newEmployee['streetAddress'] = '11 Broadway';
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue () {
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey () {
   let deleteFromEmployeeByKey = {...destructivelyUpdateEmployeeWithKeyAndValue};
    delete deleteFromEmployeeByKey['name'];
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey () {
    delete employee['name'];
    return employee;
}
