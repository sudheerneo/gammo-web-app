import axios from 'axios'

const handler =  async (req, res) => {
    const { bot } = req.query;
    const headers =  { 'X-Api-Key': 'test_e396650e951cdbcc3f3b2aa719b', 'X-Auth-Token' : 'test_dc5af79bfc8d3d2354274ea912e'}

    try {
       if (req.method === 'POST' && bot === 'cpRequest') {
        const payload = req.body.payload;
        //create a payment request
        const given = await axios.post('https://test.instamojo.com/api/1.1/payment-requests/',  payload, { headers });
        const dataMain =  await given.data;
        res.status(200).json(dataMain)

      } else if (req.method === 'GET' && bot === 'test') {
        const data = req.query;
        res.status(200).json({'yup': 'wrong place'})
        
      } else if (req.method === 'GET' && bot === 'redirect') {
        const data = req.query;
        //catching redirect 
        if(data.payment_status === 'Credit'){
          //getting payment suceess data
          const res = await axios.get(`https://www.instamojo.com/api/1.1/payments/${data.payment_id}`, { headers }); 
          const dataRec = await res.data;
          res.status(200).json(dataRes)
        }
        res.status(200).json({'response' : 'currrently analyzing the issue'})
        
      } else if (req.method === 'DELETE' ) {
        await db.collection('entries').doc(id).delete();
      }
      res.status(200).end();
    } catch (e) {
      res.status(400).end();
    }
  }

  export default handler;

//  //firebase api 
// export default async (req, res) => {
//     const { id } = req.query;
  
//     try {
//       if (req.method === 'PUT') {
//         await db.collection('entries').doc(id).update({
//           ...req.body,
//           updated: new Date().toISOString(),
//         });
//       } else if (req.method === 'GET') {
//         const doc = await db.collection('entries').doc(id).get();
//         if (!doc.exists) {
//           res.status(404).end();
//         } else {
//           res.status(200).json(doc.data());
//         }
//       } else if (req.method === 'DELETE') {
//         await db.collection('entries').doc(id).delete();
//       }
//       res.status(200).end();
//     } catch (e) {
//       res.status(400).end();
//     }
//   }