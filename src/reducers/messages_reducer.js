// export default function(state, action) {
//   if (state === undefined) {
//     return [];
//   }
//   switch (action.type) {
//     case "SET_MESSAGES":
//       return action.payload;
//     default:
//       return state;
//   }
// }

import { FETCH_MESSAGES, MESSAGE_POSTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }

    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }

    // case "CHANNEL_SELECTED": {
    //   return []; // Channel has changed. Clearing view.
    // }

    default:
    return state;
  }
}
