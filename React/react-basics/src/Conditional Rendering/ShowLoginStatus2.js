import React from 'react'

function ShowLoginStatus2({isLoggedIn}) {
    //condn ?"a":"b"
    //&&
    return (
        <div>
            {/* {isLoggedIn ? <h2>Welcome</h2>:<h2>PLease Login</h2>} */}
           { isLoggedIn && <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem praesentium rerum dolores reiciendis perferendis quis adipisci distinctio commodi esse!</h2>}
        </div>
    )
}

export default ShowLoginStatus2
