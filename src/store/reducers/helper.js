import { Map } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER } from 'constants';

import Message from 'messagesComponents/Message';
import Snippet from 'messagesComponents/Snippet';

export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createLinkSnippet(link) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    title: link.title,
    link: link.link,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar: true
  });
}

export function createComponentMessage(component, props, showAvatar = false) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}
