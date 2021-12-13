import express, { Request, Response } from 'express';

import { NotFoundError } from '@ahmedelafifi/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const tickets = await Ticket.findById(req.params.id);

  if (!tickets) {
    throw new NotFoundError();
  }

  res.send(tickets);
});

export { router as showTicketRouter };
