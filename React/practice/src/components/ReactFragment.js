import React from 'react'
import TableBody from './TableBody'

function ReactFragment() {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
            </tr>
            <tr>
                <TableBody/>
            </tr>
        </table>

    )
}

export default ReactFragment
