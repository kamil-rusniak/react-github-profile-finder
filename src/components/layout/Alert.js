import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`mb-8 text-2xl alert alert-${alert.type}`}>
                {alert.message}
            </div>
        )
    )
}

export default Alert
