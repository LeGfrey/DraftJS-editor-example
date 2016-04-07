import React from 'react';
import {RichUtils} from 'draft-js';


class Size extends React.Component {
  constructor(props) {
    super(props);
    this.changeSize = this.changeSize.bind(this);

    this.LOWERVALUE = 10
    this.MAXVALUE = 32;
    this.STEP = 2;
  }

  getSizes() {
    const editor = this.props.editor;
    let sizes = [];
    for(var i = this.LOWERVALUE; i <= this.MAXVALUE; i = i + this.STEP) {
      editor.addToStyleMap('FONT_SIZE' + i, {fontSize: i + 'px'});
      sizes.push(i);
    }
    return sizes;
  }

  addSizeOption(size) {
    return <option key={'FONT_SIZE' + size} value={'FONT_SIZE' + size}>{size}</option>
  }

  changeSize(event) {
    let editorState = this.props.editorState;
    const currentSize = this.getCurrentSize();

    if(currentSize) {
      editorState = RichUtils.toggleInlineStyle(editorState, currentSize);
    }

    this.props.editor.onChange(RichUtils.toggleInlineStyle(editorState, event.target.value));
  }

  getCurrentSize() {
    const editorState = this.props.editorState;
    const selection = editorState.getSelection();
    const currentStyles = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getInlineStyleAt(0).toArray();

    for(let style of currentStyles) {
      if(style.indexOf('FONT_SIZE') != -1) {
        return style;
      }
    }

    return false
  }

  render() {
    const currentSize = this.getCurrentSize();
    return (
      <select value={currentSize} searchable onChange={this.changeSize}>
        {this.getSizes().map((size) => this.addSizeOption(size))}
      </select>
    );
  }
}

export default Size;