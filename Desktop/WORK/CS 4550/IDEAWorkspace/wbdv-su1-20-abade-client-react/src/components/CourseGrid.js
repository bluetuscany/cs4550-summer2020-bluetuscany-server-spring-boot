import React from "react";
import CourseCardComponent from "./CourseCardComponent";

class CourseGrid extends React.Component {
    render() {
        return(

            <div>
            <h3>Recently added courses</h3>
                <br/>
                <div className="card-deck">
                {
                    this.props.courses.map(course =>
                        <CourseCardComponent
                            deleteCourse={this.props.deleteCourse}
                            key={course._id}
                            course={course}/>
                    )}
                </div>
            </div>

        )
    }
}

export default CourseGrid