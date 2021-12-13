import { Publisher, Subject, TicketCreatedEvent } from '@ahmedelafifi/common';
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subject.TicketCreated = Subject.TicketCreated;
}
