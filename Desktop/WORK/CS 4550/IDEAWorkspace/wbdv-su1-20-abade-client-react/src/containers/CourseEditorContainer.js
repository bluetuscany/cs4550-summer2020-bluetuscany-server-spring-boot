import React from "react";


class CourseEditorContainer extends React.Component {


    render() {
        return (
            <div className="container">

<h1 className="display-1" style={{textAlign: "center"}}>Course Editor</h1>
                <div className="row bg-dark">

                    <nav className="navbar navbar-dark bg-dark">
                        <i className="fa fa-times wbdv-course-editor wbdv-close" style={{color: "white"}}/>
                        <label className="navbar-brand wbdv-course-title">CS 1500 - Intro to WebDev</label>
                        <label className="navbar-text wbdv-lesson-tabs" style={{color: "white"}}>Build</label>
                        <label className="navbar-text">Pages</label>
                        <label className="navbar-text">Theme</label>
                        <label className="navbar-text">Store</label>
                        <label className="navbar-text">Apps</label>
                        <label className="navbar-text">Settings</label>
                        <i className="fa fa-plus wbdv-lesson-add-btn" style={{color: "white", paddingLeft: "10px"}}/>

                    </nav>

                </div>

                <div className="row">

                    <div className="col-3" style={{paddingRight: "15px"}}>

                        <ul className="list-group-item bg-dark wbdv-module-list" style={{paddingBottom: "30px"}}>

                            <li className="list-group-item wbdv-module-item wbdv-module-item-title"
                                style={{backgroundColor: "#f5e5de"}}>
                                Module 1<i className="fa fa-times wbdv-module-item-delete-btn"
                                           style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 2<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 3<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 4<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 5<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 6<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="list-group-item" style={{backgroundColor: "#f5e5de"}}>Module 7<i
                                className="fa fa-times"
                                style={{paddingLeft: "75px"}}/>
                            </li>
                            <li className="fa fa-plus float-right wbdv-module-item-add-btn"
                                style={{color: "white", paddingTop: "10px"}}/>

                        </ul>

                    </div>

                    <div className="col-5" style={{paddingLeft: "10px"}}>

                        <ul className="nav nav-pills wbdv-topic-pill-list" style={{paddingTop: "10px"}}>
                            <li className="nav-item wbdv-topic-pill">
                                <label className="nav-link active bg-dark" href="#">Topic 1</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link" href="#">Topic 2</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link" href="#">Topic 3</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link" href="#">Topic 4</label>
                            </li>
                            <li className="nav-link fa fa-plus wbdv-topic-add-btn"/>
                        </ul>

                    </div>


                </div>

            </div>
        )
    }
}

export default CourseEditorContainer