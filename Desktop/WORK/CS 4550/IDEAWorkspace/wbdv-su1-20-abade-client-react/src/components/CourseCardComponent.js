import React from "react";
import {Link} from "react-router-dom";
import CourseService from '../services/CourseService'

class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
    }

    setEditing = (editing) =>
        this.setState({editing: editing})

    update = () =>
        CourseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))

    render() {
        return (
            <div>

                <div className="card text-white bg-dark" style={{width: "18rem"}}>

                    <img src="https://img.jakpost.net/c/2020/03/14/2020_03_14_89218_1584158212._large.jpg"
                         className="card-img-top" alt="..."/>
                    <div className="card-body">
                        {
                            !this.state.editing &&
                            <Link to={`/editor/${this.state.course._id}`}>
                                <h4>
                                    {this.state.course.title}
                                </h4>
                            </Link>
                        }
                        {
                            this.state.editing &&
                            <input
                                className="form-control"
                                onChange={(event) => this.updateCourseTitle(event.target.value)}
                                value={this.state.course.title}
                                style={{backgroundColor: "antiquewhite"}}/>
                        }
                        Owner: {this.state.course.owner}
                        <br/>
                        Last Modified: {this.state.course.modified}
                        <br/>
                        <br/>

                        {
                            !this.state.editing &&

                            <button
                                className="fa fa-ellipsis-v float-lg-right"
                                onClick={() => this.setEditing(true)}>
                            </button>
                        }
                        {
                            this.state.editing &&
                            <span>

              <button className="fa fa-check float-lg-right" onClick={this.update}>
                </button>

              <button
                  className="fa fa-trash float-lg-right"
                  onClick={
                      () => this.props.deleteCourse(this.props.course)}>
                </button>
            </span>
                        }

                    </div>
                </div>
                <br/>


            </div>
        )
    }
}

export default CourseCardComponent