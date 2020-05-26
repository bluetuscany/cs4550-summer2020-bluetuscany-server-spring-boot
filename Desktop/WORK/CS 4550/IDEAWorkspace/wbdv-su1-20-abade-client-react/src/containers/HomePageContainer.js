import {Link} from "react-router-dom";
import React from "react";


class HomePageContainer extends React.Component {

    render() {

        return (
            <div className="container">

                <div className="row">
                    <h1 id="title" className="display-1">
                        Welcome to WhiteBoard
                    </h1>
                </div>

                <div className="row">

                    <div className="col-6">
                        <Link className="btn btn-block btn-outline-dark" to="/table/courses">
                            <h3>Course Manager</h3>
                        </Link>
                    </div>

                    <div className="col-6">
                        <Link className="btn btn-block btn-outline-dark" to="/editor">
                            <h3>Course Editor</h3>
                        </Link>
                    </div>

                </div>

            </div>
        )
    }
}

export default HomePageContainer;