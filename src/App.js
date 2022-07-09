import React, { Component } from 'react'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
import './App.css';

class App extends Component {
  state = {
    courses :  [
      {name :'HTML'},
      {name :'CSS'},
      {name :'JS'},
    ],
    current : ''
  }

  //function Update
  updateCourse = (e) =>{
    this.setState({
      current : e.target.value
    })
  }
  //function Add
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current})
    this.setState({
      courses : courses,
      current: ''
    })
  }
  //function delete
  deleteCourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses : courses
    })
  }
  //function Edit
  editCourse = (index,value) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses: courses
    })
  }
  render() {
    const courses = this.state.courses;
    let length = courses.length;
    const courselist = length ?(
      courses.map((course, index) =>{
        return < CourseList details= {course} key={index} index={index} deleteCourse={this.deleteCourse}  editCourse={this.editCourse}/>
      })
    ):<p>No Item</p>
     
    return (
      <div>
        <section className="App">
        <h2>App List Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>{courselist}</ul>
      </section>
      </div>
    )
  }
}



export default App;
