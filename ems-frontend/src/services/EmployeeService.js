import axios from "axios";
//to get rest employee api 

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

//write rest client code to call rest api
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);