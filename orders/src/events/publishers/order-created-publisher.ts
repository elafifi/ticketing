import { OrderCreatedEvent, Publisher, Subject } from '@ahmedelafifi/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subject.OrderCreated = Subject.OrderCreated;
}
