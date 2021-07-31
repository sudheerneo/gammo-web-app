import axios from 'axios'
import useSWR from 'swr'
import React , {useState} from 'react'

export default function testApi() {
    const [ask, setAsk] =  useState(true)
    const vals = {hello: 'mama'}
  
       
    const {data, error} = useSWR(ask ? '/api/instamojo/payment' : "", fetcher);
        if (error) return <div>failed to load</div>
        if (!data) return <div>loading...</div>
        return <div>hello {console.log(data.name)}!</div>
   
   return (
       <button className='btn btn-primary' onClick={testMe}>TestMe</button>
   )

}