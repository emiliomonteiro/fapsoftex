import { Request, Response } from 'express';
import { employeeModel } from '../models/employeeModel';

const employees: employeeModel[] = [];

export const getAllEmployees = (req: Request, res: Response) => {
  res.json(employees);
};

export const getEmployeeById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employee = employees.find((e) => e.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

export const createEmployee = (req: Request, res: Response) => {
  const newEmployee: employeeModel = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

export const updateEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedEmployee: employeeModel = req.body;
  const index = employees.findIndex((e) => e.id === id);

  if (index !== -1) {
    employees[index] = updatedEmployee;
    res.json(updatedEmployee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

export const deleteEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = employees.findIndex((e) => e.id === id);

  if (index !== -1) {
    employees.splice(index, 1);
    res.json({ message: 'Employee deleted' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};
