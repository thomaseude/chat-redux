import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMessages } from "../actions";

import Message from "../components/message";
import MessageForm from "../containers/message_form";

class MessageList extends Component {

  componentWillMount() {
    // console.log(this.props);
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => { return <Message key={message.created_at} message={message} />; })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}


// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
