import React, {memo} from 'react'


//memo used for only render component if properties changes
export const Small = memo(({value}) => {

    console.log("I called me again");
    return (
        <small>{value}</small>
    )
})
