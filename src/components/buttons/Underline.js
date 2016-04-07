import React from 'react';
import {RichUtils} from 'draft-js';

class Underline extends React.Component {
  constructor(props) {
    super(props);
    this.setUnderline = this.setUnderline.bind(this);
  }

  render() {
    return <button onClick={this.setUnderline} className="editor-button"><i className="fa fa-underline"></i></button>;
  }

  setUnderline() {
    const editorState = this.props.editorState;
    this.props.editor.onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  }
}

export default Underline;