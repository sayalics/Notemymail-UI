import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { withStyles } from '@material-ui/core/styles';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const styles  = theme => ( {
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
  });

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
export default withStyles(styles)(ControlledEditor);
