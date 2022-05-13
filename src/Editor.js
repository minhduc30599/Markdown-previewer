import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
          <div className="editor">
              <div className="editor_header"><i class="fa fa-free-code-camp" aria-hidden="true"></i> Editor</div>
              <div className="editor_body">
              We organise what we write into sentences and paragraphs. A paragraph 
              begins on a new line within the text and there is often a blank line between 
              paragraphs. A paragraph usually contains more than one sentence and it is 
              usually about one topic.

              The first sentence in a paragraph is sometimes called the key or topic 
              sentence because it gives us the key to what the paragraph will be about. 
              The other sentences usually relate to the key sentence. There is usually a 
              conclusion in the final sentence of a paragraph and sometimes there is a 
              link to the next paragraph.
              </div>
          </div>
      );
    }
};

export default Editor;