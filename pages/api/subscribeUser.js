// import axios from 'axios';

// export default async (req, res) => {


//    const email = req.body.emailAddress;

//    console.log({ email });

//    try {
//     const response = await axios({
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': process.env.MAILCHIMP_API_KEY,
//       },
//       url: `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
//       data: {
//         email_address: email,
//         status: 'subscribed'
//       }
//     })


//     if (response.status === 200) {
//       res.statusCode = 200
//       res.end()
//     } else {
//       res.statusCode = 400
//       res.end()
//     }

//    } catch {

//    }

// }

// //   if (!email) {
// //     return res.status(400).json({ error: 'Email is required' });
// //   }

// //   try {
// //     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// //     const API_KEY = process.env.MAILCHIMP_API_KEY;
// //     const DATACENTER = process.env.MAILCHIMP_API_SERVER;
// //     const data = {
// //       email_address: email,
// //       status: 'subscribed',
// //     };

// //     const response = await fetch(
// //       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

// //       {
// //         body: JSON.stringify(data),
// //         headers: {
// //           Authorization: `apikey ${API_KEY}`,
// //           'Content-Type': 'application/json',
// //         },
// //         method: 'POST',
// //       }
// //     );

// //     if (response.status >= 400) {
// //       return res.status(400).json({
// //         error: `There was an error subscribing to the newsletter.
// //         Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
// //       });
// //     }

// //     return res.status(201).json({ error: '' });
// //   } catch (error) {
// //     return res.status(500).json({ error: error.message || error.toString() });
// //   }
// // };