import React from "react";
import { marked } from "marked";

const Previewer = (props) => {
    return (
        <div className="previewer">
            <div className="previewer_header">
                <div className="previewer_header-left"><i className="fa fa-free-code-camp" aria-hidden="true"></i> Previewer</div>
                <div className="previewer_header-right"><i className="fa fa-arrows-alt" aria-hidden="true"></i></div>
            </div>
            <div className="previewer_body" dangerouslySetInnerHTML={{ __html: marked(props.input) }}>
             
            </div>
        </div>
    );
};

export default Previewer;