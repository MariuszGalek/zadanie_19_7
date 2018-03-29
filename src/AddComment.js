import React from "react";

class AddComment extends React.Component {
  onSubmitHandle(event) {
    event.preventDefault();
    if (this.refs.name.value) {
      this.props.addComment(this.refs.name.value);
      this.refs.name.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandle.bind(this)}>
        <input type="text" ref="name" />
        <input type="submit" value="Add comment" />
      </form>
    );
  }
}

export default AddComment;