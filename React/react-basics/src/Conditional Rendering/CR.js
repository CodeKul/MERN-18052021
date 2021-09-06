import React, { Component } from 'react'

export class CR extends Component {

    render() {
        let reactjs={
            courseName:"React JS",
            duration:"1 month",
            description:"Card titles are used by adding .card-title to a <h*> tag. In the same way, links are added and placed next to each other by adding .card-link to an <a> tag.",
            subCourses:[],
            courseContent:[{
                topic:"State and Props",
                subTopic:["State","setState","Passing props"]
            },
            {
                topic:"Function vs Class Components",
                subTopic:["abc","xyz","Passing props"]
            }]
        }

        // Obj2 
        let fullstackweb={
            courseName:"full stack web",
            duration:"4 months",
            description:"Card titles are used by adding .card-title to a <h*> tag. In the same way, links are added and placed next to each other by adding .card-link to an <a> tag.",
            subCourses:["Javascript","reactjs","nodejs","css"],
            courseContent:[{
                topic:"State and Props",
                subTopic:["State","setState","Passing props"]
            },
            {
                topic:"Function vs Class Components",
                subTopic:["abc","xyz","Passing props"]
            }]
        }
        return (
            <div>
               
            </div>
        )
    }
}

export default CR
