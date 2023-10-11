import { Request, Response } from 'express';
import { supportModel } from '../models/supportModel';

const tickets: supportModel[] = [];

export const getAllTickets = (req: Request, res: Response) => {
  res.json(tickets);
};

export const getTicketById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = tickets.find((e) => e.id === id);

  if (ticket) {
    res.json(tickets);
  } else {
    res.status(404).json({ message: 'Support ticket not found' });
  }
};

export const createTicket = (req: Request, res: Response) => {
  const newTicket: supportModel = req.body;
  tickets.push(newTicket);
  res.status(201).json(newTicket);
};

export const updateTicket = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedTicket: supportModel = req.body;
  const index = tickets.findIndex((t) => t.id === id);

  if (index !== -1) {
    tickets[index] = updatedTicket;
    res.json(updatedTicket);
  } else {
    res.status(404).json({ message: 'Support ticket not found.' });
  }
};

export const deleteTicket = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = tickets.findIndex((t) => t.id === id);

  if (index !== -1) {
    tickets.splice(index, 1);
    res.json({ message: 'Support ticket deleted' });
  } else {
    res.status(404).json({ message: 'Support ticket not found' });
  }
};
