import { Publisher, Subject, TicketUpdatedEvent } from '@ahmedelafifi/common';
export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subject.TicketUpdated = Subject.TicketUpdated;
}
