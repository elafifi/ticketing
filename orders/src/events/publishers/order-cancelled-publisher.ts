import { OrderCancelledEvent, Publisher, Subject } from '@ahmedelafifi/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subject.OrderCancelled = Subject.OrderCancelled;
}
