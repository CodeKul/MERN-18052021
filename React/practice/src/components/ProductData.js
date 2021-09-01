import React from 'react'

function ProductData(props) {
    console.log(props)
    return (
       <>
          { props.products.map((p,id)=>(
                <tr key={id}>
                    <td>{p.name}</td>
                    <td>{p.qty}</td>
                    <td>{p.price}</td>
                </tr>
           ))}
        </>
    )
}

export default ProductData
