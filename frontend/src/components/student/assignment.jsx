import React from 'react'
import '../../stylesheet/common.css'

const Assignment = ({name, phone}) =>{
        return(
            <div className="font">
            <h2 className="font">Assignment</h2>
            <br/>
                <button className="btn btn-success" style={{margin:"10px"}}>{name}</button>
                <div>{phone}</div>
            </div>
        )
}

export default Assignment;