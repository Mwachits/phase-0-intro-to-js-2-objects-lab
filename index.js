// Function to update employee with a new key-value pair (non-destructive)
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
     ...employee,
      [key]: value
    };
  }
  
  // Function to update employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  
