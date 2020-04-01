import React from 'react';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

const Message = (props) => {
  return (
    <div className="message-container">
      <i className="author">
        <span style={{ color: strToRGB(props.message.author) }} > {props.message.author} </span>
        <small>{new Date(props.message.created_at).toLocaleTimeString()}</small>
      </i>
      <p className="">{props.message.content}</p>
    </div>
  );
};

export default Message;
