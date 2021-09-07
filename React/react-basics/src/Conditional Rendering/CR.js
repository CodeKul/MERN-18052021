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
            subCourses:[{
                coursename:"Javascript",
                id:"1"
            },{
                coursename:"CSS",
                id:"2"
            }
        ],
            courseContent:[
                {
                topic:"State and Props",
                subTopic:["State","setState","Passing props"]
                },
            {
                topic:"Function vs Class Components",
                subTopic:["abc","xyz","Passing props"]
            },
            {
                topic:"Function vs Class Components",
                subTopic:["abc","xyz","Passing props"]
            }
        ]
        }
        return (
            <div>
               <p>{reactjs.courseName}</p>
               <p>{reactjs.duration}</p>
               <p>{reactjs.description}</p>
               {reactjs.subCourses.length === 0? <p>No Subcourses</p> :
                    
                    <ul>
                    {reactjs.subCourses.map((sub,id)=>(
                        <li key={id}>{sub}</li>
                    ))}
                    </ul>
                    
               }


               <h3>{fullstackweb.courseName}</h3>
               <p>Duration : {fullstackweb.duration}</p>
               <p>Description : {fullstackweb.description}</p>
               <p>Subcourses:</p>
               {fullstackweb.subCourses.length === 0 ? <p>No subcourses</p> :
                   <ul>
                       {fullstackweb.subCourses.map((subcourse,id)=>(
                           <>
                          <li key={id}>{subcourse.coursename}</li>
                          <li>{subcourse.id}</li>
                          </>
                       ))}
                   </ul>

               }

               {/* 
                {topic:"abc",subTopic:["x","y"]}
                */}
               <h2>Course Content</h2>
               {fullstackweb.courseContent.map((content,id)=>(
                   <div key={id}>
                   <h5>{content.topic}</h5>
                   {content.subTopic.map((item,id)=>(
                       <p key={id}>{item}</p>
                   ))}
                   </div>
                   
               ))}

            


            </div>
        )
    }
}

export default CR
