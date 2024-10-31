import { HelloMessage } from './HelloMessage.jsx';
import { withLogging } from './withLogging.jsx';

export const HelloMessageWithLogging = withLogging(HelloMessage);
