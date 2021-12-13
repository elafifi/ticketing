import { Subject } from './subject';

export interface TicketUpdatedEvent {
  subject: Subject.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    useId: string;
  };
}
