import React from 'react';
import {RichUtils} from 'draft-js';

class Align extends React.Component {
  constructor(props) {
    super(props);
    this.alignRight = this.alignRight.bind(this);
    this.alignLeft = this.alignLeft.bind(this);
    this.alignCenter = this.alignCenter.bind(this);
    this.setCustomStyle();
  }

  setCustomStyle() {
    const editor = this.props.editor;
    editor.addToStyleMap('ALIGN_RIGHT', {
      display: 'block',
      textAlign: 'right'
    });

    editor.addToStyleMap('ALIGN_LEFT', {
      display: 'block',
      textAlign: 'left'
    });

    editor.addToStyleMap('ALIGN_CENTER', {
      display: 'block',
      textAlign: 'center'
    });
  }

  alignRight() {
    this.props.editor.onChange(RichUtils.toggleInlineStyle(this.resetAlign(), 'ALIGN_RIGHT'));
  }

  alignLeft() {
    this.props.editor.onChange(RichUtils.toggleInlineStyle(this.resetAlign(), 'ALIGN_LEFT'));
  }

  alignCenter() {
    this.props.editor.onChange(RichUtils.toggleInlineStyle(this.resetAlign(), 'ALIGN_CENTER'));
  }

  resetAlign() {
    const editorState = this.props.editorState;
    const selection = editorState.getSelection();
    const currentStyles = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getInlineStyleAt(0).toArray();
    let alignStyle = '';

    for(let style of currentStyles) {
      if(style.indexOf('ALIGN') != -1) {
        alignStyle = style;
        break;
      }
    }

    return RichUtils.toggleInlineStyle(editorState, alignStyle);
  }

  render() {
    return (
      <div>
        <button onClick={this.alignLeft} className="editor-button"><i className="fa fa-align-left"></i></button>
        <button onClick={this.alignCenter} className="editor-button"><i className="fa fa-align-center"></i></button>
        <button onClick={this.alignRight} className="editor-button"><i className="fa fa-align-right"></i></button>
      </div>
    );
  }
}

export default Align;