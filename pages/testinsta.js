import axios from 'axios'
import useSWR from 'swr'
import Router from 'next/router'
import React , {useState, useEffect} from 'react'

export default function testApi() {
    const [resp, setRes]=  useState(null)

    const fetcher = async (payload) => {
      const bot = 'cpRequest';
      const res = await axios.post(`/api/instamojo/${bot}`, { payload }); 
        const dataRec = await res.data;
        setRes(dataRec);
        Router.push(dataRec.payment_request.longurl)
    }
       
    const headers =  { 'X-Api-Key': 'test_e396650e951cdbcc3f3b2aa719b', 'X-Auth-Token' : 'test_dc5af79bfc8d3d2354274ea912e'}
  const payload = {
      purpose: 'FIFA 16',
      amount: '2500',
      phone: '9999999999',
      buyer_name: 'John Doe',
      redirect_url: 'https://jlum.vercel.app/api/instamojo/redirect/',
      send_email: true,
      webhook: 'https://jlum.vercel.app/api/instamojo/webhook/',
      send_sms: true,
      email: 'foo@example.com',
      allow_repeated_payments: true
  }
  
    
  const redirectApi = async (redData) => {
    const bot = 'redirect';
    const res = await axios.get('/api/instamojo/redirect?payment_id=MOJO1803405N95752852&payment_status=Credit&payment_request_id=39b8e3a1293d431d91f191df9767a4b2'); 
      const dataRec = await res.data;
      console.log(dataRec) 
  }

  const getPayData = async (headers) => {
   const given = await axios.get('https://www.instamojo.com/api/1.1/payments/MOJO5a06005J21512197/', { headers }); 
    const dataRec = await json(res.data);
      console.log(dataRec) 
  }
   return (
       <div>
            <button className='btn btn-primary' onClick={() => {fetcher(payload) } }>TestMe</button>
            <pre>{ resp === null ? 'not yet captured' : 'URL - '+resp.payment_request.longurl }</pre>
            <button className='btn btn-primary' onClick={() => {redirectApi() } }>redirectAPI test</button>
            <button className='btn btn-primary' onClick={() => {getPayData(headers) } }>Get pay details</button>
       </div>

   )

}
