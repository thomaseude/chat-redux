import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { createMessage } from "../actions";

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // console.log(this.props);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
  }

  render() {
    return (
      <form className="channel-editor" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  // {console.log(state)}
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}


// export default FlatList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
