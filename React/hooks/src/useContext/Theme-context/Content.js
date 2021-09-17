import React,{useContext} from 'react'
import { themeContext } from './ThemeToggleProvider'

function Content() {
    const[dark]=useContext(themeContext)
    return (
        <div className={`${dark ? "content-dark":"content-light"}`} >
            <h1>Try React</h1>
            <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

                Online Playgrounds
                If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
                If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.


            </p>

        </div>
    )
}

export default Content
