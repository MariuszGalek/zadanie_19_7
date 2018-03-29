import { connect } from "react-redux";
import { addComment } from "./actions";
import AddComment from "./AddComment";

const mapDispatchToProps = dispatch => ({
	addComment: text => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);