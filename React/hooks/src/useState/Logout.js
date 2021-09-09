import React from 'react'

function Logout({handleLogout}) {
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
