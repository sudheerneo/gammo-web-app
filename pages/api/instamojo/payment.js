export default function handler(req, res) {

const reqData = req.body;
// fetch('https://test.instamojo.com/api/1.1/payment-requests/',{requestOptions, headers} )
// .then(res => res.json())
// .then(data => console.log(data))
const callApi = async () => {
  
          const requestOptions = {
            method: 'POST',
            payload : reqData
          }
          const headers =  { 'X-Api-Key': 'test_e396650e951cdbcc3f3b2aa719b', 'X-Auth-Token' : 'test_dc5af79bfc8d3d2354274ea912e'}

          const req = await fetch('https://test.instamojo.com/api/1.1/payment-requests/',{requestOptions, headers} )
          const response = await req.json();
          const data  = await response
          
            return data;
          }
          //console.log(callApi())
        
  //res.status(200).json(callApi(reqData))
  res.status(200).json({'name' : 'Sudheer'})
}

