import express from 'express';
import { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from './controller/employeeController';
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom } from './controller/roomController';
import { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } from './controller/supportController';

const app = express();
app.use(express.json());

app.get('/employees', getAllEmployees);
app.get('/employees/:id', getEmployeeById);
app.post('/employees', createEmployee);
app.put('/employees/:id', updateEmployee);
app.delete('/employees/:id', deleteEmployee);

app.get('/rooms', getAllRooms);
app.get('/rooms/:id', getRoomById);
app.post('/rooms', createRoom);
app.put('/rooms/:id', updateRoom);
app.delete('/rooms/:id', deleteRoom);

app.get('/supports', getAllTickets);
app.get('/supports/:id', getTicketById);
app.post('/supports', createTicket);
app.put('/supports/:id', updateTicket);
app.delete('/supports/:id', deleteTicket);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
