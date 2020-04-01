import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, fetchMessages } from "../actions";

class ChannelList extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };

  render() {

    return (

      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => { return <li key={channel} className={this.props.selectedChannel===channel ? "active" : ""} onClick={()=>this.handleClick(channel)}>#{channel}</li>; })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}


// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
