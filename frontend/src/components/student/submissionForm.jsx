import React from 'react'
import FileUpload from './fileUpload'
import '../../stylesheet/common.css'

class SubmissionForm extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2 className="font">Student Assigment Submission</h2>
                </div>
                    <h2 className="font">Upload your assignments here</h2>
                <FileUpload />
            </div>
        )
    }
}

export default SubmissionForm;