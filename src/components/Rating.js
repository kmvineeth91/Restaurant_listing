import React from 'react'

function Rating({data}) {
  return (
    <div>
        {
        data.map(item=>(
            <>
                <h3>{item.name}</h3>
                <div>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                </div>
            </>
        ))  
        }   
    </div>
  )
}

export default Rating