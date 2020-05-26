import React from "react";
import CourseGrid from "../components/CourseGrid"
import CourseTable from "../components/CourseTable";
import CourseService from "../services/CourseService"
import '../components/WhiteBoard.style.css'

class CourseManagerContainer extends React.Component {

    state = {
        layout: this.props.match.params.layout,
        courses: [],
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(actualArrayOfCourses =>
                this.setState({
                    courses: actualArrayOfCourses
                }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                layout: this.props.match.params.layout
            })
        }
    }

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    }

    deleteCourse = (courseToDelete) =>
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                    .courses.filter(course => course !== courseToDelete)
            })))

    addCourse = (title) =>
        CourseService.createCourse({
            title: title,
            owner: 'me',
            modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                this.setState((prevState) => {
                    return {
                        courses: [
                            ...prevState.courses,
                            theActualNewCourse
                        ]
                    }
                }))

    render() {
        return (

            <div className="container">

                <h1 className="display-1" style={{textAlign: "center"}}>
                    Course Manager
                </h1>

                <br/>

                <div id="addCourseInput" className="input-group input-group-lg">
                    <input type="text" className="form-control"
                           aria-label="Recipient's username" aria-describedby="button-addon2"
                           onChange={(event) => this.setState({
                               newCourseTitle: event.target.value
                           })}
                           placeholder="Course Title" style={{backgroundColor: "transparent"}}/>

                    <div className="input-group-append">
                        <button className="btn btn-dark" type="button" id="button-addon2" onClick={
                            () => this.addCourse(this.state.newCourseTitle)}>
                            Add
                        </button>
                    </div>
                </div>
                <br/>

                {
                    this.state.layout === 'table' &&
                    <div>
                        <i className="fa fa-th-large float-lg-right"
                                onClick={() =>
                                    this.setLayout('grid')}>
                        </i>
                        <br/>
                        <CourseTable
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>

                }


                {
                    this.state.layout === 'grid' &&
                    <div>
                        <i className="fa fa-bars float-lg-right"
                            onClick={() =>
                                this.setLayout('table')}>
                        </i>
                        <CourseGrid courses={this.state.courses}/>
                    </div>
                }

            </div>




    )
    }

}

export default CourseManagerContainer