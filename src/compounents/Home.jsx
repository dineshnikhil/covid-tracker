import React, { useState } from 'react';
import CountryCard from './CountryCard';
import { useQuery } from 'react-query';

function Home() {

    const [covidData, setcovidData] = useState([]);
    const [search, setsearch] = useState("");

    // const variable for global information holding.
    const [newConfirmed, setnewConfirmed] = useState('');
    const [totalConfirmed, settotalConfirmed] = useState('');
    const [newDeaths, setnewDeaths] = useState('');
    const [totalDeaths, settotalDeaths] = useState('');

    const [isLoading, setisLoading] = useState(true);

    useQuery(['covidData', 'sample-data'], () => {
        return fetch('https://api.covid19api.com/summary').then(result => {
            return result.json()
        }).then(data => {
            setcovidData(data.Countries)
            setnewConfirmed(data.Global.NewConfirmed)
            setnewDeaths(data.Global.NewDeaths)
            settotalConfirmed(data.Global.TotalConfirmed)
            settotalDeaths(data.Global.TotalDeaths)
            setisLoading(false)
        })
    })

    const filteredData = covidData.filter(data => {
        return data.Country.toString().toLowerCase().includes(search.toString().toLowerCase())
    })


    return (
        <div>
            <div className='py-4'>
                <input className='bg-green-600 border-2 border-green-400 text-stone-300 py-2 px-8 rounded-md' type="text" placeholder='search your country' onChange={e => {
                    setsearch(e.target.value)
                }}/>
            </div>
            <div className='bg-emerald-700 w-3/4 py-4 px-6 mx-auto rounded-md'>
                <h1 className='text-green-400 text-3xl'>Global Covid Information</h1>
                <div className='flex justify-between flex-wrap my-8'>
                    <h1 className='text-black-xl w-1/2 text-2xl'>NewConfirmed : {newConfirmed}</h1>
                    <h1 className='text-black-xl w-1/2 text-2xl'>NewDeaths : {newDeaths}</h1>
                    <h1 className='text-black-xl w-1/2 text-2xl'>TotalConfirmed : {totalConfirmed}</h1>
                    <h1 className='text-black-xl w-1/2 text-2xl'>TotalDeaths : {totalDeaths}</h1>
                </div>
                <a href="https://www.google.com/search?q=covid&oq=covid&aqs=chrome..69i57j69i59j0i131i433i512l2j0i131i433i457i512j69i60j69i61j69i60.1538j0j7&sourceid=chrome&ie=UTF-88" target="_blank" className='py-4 px-8 text-md text-white bg-green-900 my-8 rounded-xl'>Know More</a>
            </div>
            <div className='py-4 -x-8 flex justify-center flex-wrap'>
                {isLoading && <h1>loading...</h1>}
                {filteredData.map((data) => {
                    return <CountryCard data={data} />
                })}
            </div>
        </div>
    )
}

export default Home
