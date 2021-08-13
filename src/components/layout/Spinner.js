import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    //actually dont even need "return" here because its an arrow function without any code above that return
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." className='w-48 m-auto block' />
        </Fragment>
    )
}

export default Spinner
