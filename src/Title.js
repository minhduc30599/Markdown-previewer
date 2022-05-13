import React from "react";
import ReactDOM from "react-dom";

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="title text-center">
          <div className="h1">Markdown Previewer</div>
          <div className="author fst-italic">Coded by <a className="text-decoration-none" href="https://codepen.io/your-work">Minh Duc Nguyen</a></div>
        </div>
      );
    }
};

export default Title;