import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CourseManagerContainer from "../containers/CourseManagerContainer";
import CourseEditorContainer from "../containers/CourseEditorContainer";
import HomePageContainer from "../containers/HomePageContainer";
import './WhiteBoard.style.css'

// handles the routing of the website
// all html/css will apply to every webpage
class WhiteBoard extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <Route
                    path='/'
                    exact={true}
                    component={HomePageContainer}
                />

                <Route
                    path='/:layout/courses'
                    exact={true}
                    component={CourseManagerContainer}/>

                <Route
                    path='/editor'
                    exact={true}
                    component={CourseEditorContainer}/>

            </BrowserRouter>
        )
    }

}

export default WhiteBoard