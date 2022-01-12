import React from 'react'

function CountryCard(props) {
    return (
        <div key={props.data.id} className='bg-emerald-500 py-4 px-2 w-1/5 mx-1 my-3 rounded-xl'>
            <h1 className='text-black text-xl'>{props.data.Country}</h1>
            <p>TotalConfirmed : {props.data.TotalConfirmed}</p>
            <p className='mb-4'>NewConfirmed : {props.data.NewConfirmed}</p>
            <a href="#" className='bg-green-700 text-white text-lg px-6 py-2 rounded-md my-6 hover:bg-green-800'>Know More</a>
        </div>
    )
}

export default CountryCard
