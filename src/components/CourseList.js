import React, { Component } from 'react'

export class CourseList extends Component {
    state ={
        isEdit :false
    }
    //render Course
  renderCourse = () => {
    return (
      <React.Fragment>
         <li>
         <span>{this.props.details.name}</span>
         <button onClick={() => this.toggleState()} > Edit Course</button>
         <button onClick={() =>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
         </li>
      </React.Fragment>
    ) 
  }
  //toggle 
toggleState = () =>{
    let isEdit = this.state.isEdit
    this.setState({
        isEdit : !isEdit
    })
}
//updateItem
updateCourseItem = (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
}
  //render form
  renderUpdateForm = () => {
    return (
      <React.Fragment>
       <form onSubmit={this.updateCourseItem}>
           <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
           <button>Update Course</button>
       </form>
      </React.Fragment>
    )
  }
  render() {
    let isEdit = this.state.isEdit
    return (
      <React.Fragment>
      { isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    )
  }
}

export default CourseList




