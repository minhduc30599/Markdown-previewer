import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Previewer from "./Previewer";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.typeChange = this.typeChange.bind(this);
    };

    typeChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    render() {
      return (
          <div className="editor">
              <div className="editor_header">
                  <div className="editor_header-left"><i className="fa fa-free-code-camp" aria-hidden="true"></i> Editor</div>
                  <div className="editor_header-right"><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
              </div>
              <textarea className="editor_body" value={this.state.input} onChange={this.typeChange}>
              
              </textarea>
              <Previewer input={this.state.input} />
          </div>
      );
    }
};

export default Editor;