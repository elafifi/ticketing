import {
  ExpirationCompleteEvent,
  Publisher,
  Subject,
} from '@ahmedelafifi/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subject.ExpirationComplete = Subject.ExpirationComplete;
}
