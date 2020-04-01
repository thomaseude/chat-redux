// TODO: add and export your own actions
// import messages from "../messages";

// const messages =
// [
//   {
//     "author":"anonymous92",
//     "content":"Hello world!",
//     "created_at":"2017-09-26T23:03:16.365Z"
//   },
//   {
//     "author":"anonymous77",
//     "content":"My name is anonymous77",
//     "created_at":"2017-09-26T23:03:21.194Z"
//   }
// ];

const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  // TODO
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectChannel(channel) {
  return {
    type: "CHANNEL_SELECTED",
    payload: channel
  };
}
