import axios from 'axios'

const  handler =  async (req, res) => {

    const payload = {
      purpose: 'FIFA 16',
      amount: '2500',
      phone: '9999999999',
      buyer_name: 'John Doe',
      redirect_url: 'http://www.example.com/redirect/',
      send_email: true,
      webhook: 'http://www.example.com/webhook/',
      send_sms: true,
      email: 'foo@example.com',
      allow_repeated_payments: true
    }
    const headers =  { 'X-Api-Key': 'test_e396650e951cdbcc3f3b2aa719b', 'X-Auth-Token' : 'test_dc5af79bfc8d3d2354274ea912e'}


    const given = await axios.post('https://test.instamojo.com/api/1.1/payment-requests/',  payload, {
      headers
      });
    
    const dataMain =  await given.data;
    console.log(dataMain)

    res.status(200).json(dataMain)
}

export default handler;