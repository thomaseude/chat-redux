import React from 'react';

import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";


const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://avatars0.githubusercontent.com/u/5470001?s=400&v=4" alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
