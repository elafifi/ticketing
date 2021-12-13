import { Listener, Subject, TicketUpdatedEvent } from '@ahmedelafifi/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subject.TicketUpdated = Subject.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    /*const ticket = await Ticket.findById({
      id_: data.id,
      version: data.version - 1,
    });*/

    if (!ticket) {
      throw new Error('Ticket Not Found');
    }
    const { title, price, version } = data;
    ticket.set({ title, price });
    await ticket.save();

    msg.ack();
  }
}
