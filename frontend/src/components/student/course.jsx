import React from 'react'
import '../../stylesheet/common.css'

const Course = ({code, name, selectedCourse}) =>{
        return(
            <div>
                <div className="card-header font">{code} - {name}</div>
                {selectedCourse.available ?
                <button 
                    className="font btn btn-success" style={{"margin":"10px"}}>View Assignmts</button>
                :<div><button className="btn btn-primary font" style={{"margin":"10px"}} onClick={()=>{
                    alert('You joined the course');
                }}>Join course</button></div>}
               
            </div>
        )
}

export default Course;