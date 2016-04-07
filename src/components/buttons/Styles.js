import React from 'react';
import {RichUtils} from 'draft-js';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.changeCurrentStyle = this.changeCurrentStyle.bind(this);
  }

  getStyles() {
    return [
      {label: 'Normal', style: 'unstyled'},
      {label: 'H1', style: 'header-one'},
      {label: 'H2', style: 'header-two'},
      {label: 'H3', style: 'header-three'},
      {label: 'H4', style: 'header-four'},
      {label: 'H5', style: 'header-five'},
      {label: 'H6', style: 'header-six'}
    ];
  }

  addStyleOption(elem) {
    return <option key={elem.style} value={elem.style}>{elem.label}</option>;
  }

  changeCurrentStyle(event) {
    const editorState = this.props.editorState;
    this.props.editor.onChange(RichUtils.toggleBlockType(editorState, event.target.value));
  }

  render() {
    const editorState = this.props.editorState;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    return (
      <select value={blockType} onChange={this.changeCurrentStyle}>
        {this.getStyles().map((elem) => this.addStyleOption(elem))}
      </select>
    );
  }
}

export default Styles;