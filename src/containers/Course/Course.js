import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log()

        return (
            <div>
                <h1>{this.props.location.search.slice(1)}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;