import React from "react";
import CourseRowComponent from "../components/CourseRowComponent";

class CourseTable extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-hover table-bordered" style={{borderColor: "white"}}>
                    <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>
                            <i className="fa fa-sort-alpha-asc"/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRowComponent
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseTable