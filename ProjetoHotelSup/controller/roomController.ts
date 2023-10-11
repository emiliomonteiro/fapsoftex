import { Request, Response } from 'express';
import { roomModel } from '../models/roomModel';

const rooms: roomModel[] = [];

export const getAllRooms = (req: Request, res: Response) => {
  res.json(rooms);
};

export const getRoomById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const room = rooms.find((r) => r.id === id);

  if (room) {
    res.json(room);
  } else {
    res.status(404).json({ message: 'Room not found' });
  }
};

export const createRoom = (req: Request, res: Response) => {
  const newRoom: roomModel = req.body;
  rooms.push(newRoom);
  res.status(201).json(newRoom);
};

export const updateRoom = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedRoom: roomModel = req.body;
  const index = rooms.findIndex((r) => r.id === id);

  if (index !== -1) {
    rooms[index] = updatedRoom;
    res.json(updatedRoom);
  } else {
    res.status(404).json({ message: 'Room not found' });
  }
};

export const deleteRoom = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = rooms.findIndex((r) => r.id === id);

  if (index !== -1) {
    rooms.splice(index, 1);
    res.json({ message: 'Room deleted' });
  } else {
    res.status(404).json({ message: 'Room not found' });
  }
};
