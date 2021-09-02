import React from 'react'

function TableBody() {
    let arr = ["abc", "xyz", "qwerty"]
    return (
        <>
            {arr.map((str,id) => (
                <React.Fragment key={id}>
                    <td>{str}</td>
                   
                </React.Fragment>
            ))}
        </>
    )
}

export default TableBody
