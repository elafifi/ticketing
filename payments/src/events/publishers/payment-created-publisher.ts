import { Subject, Publisher, PaymentCreatedEvent } from '@ahmedelafifi/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subject.PaymentCreated = Subject.PaymentCreated;
}
