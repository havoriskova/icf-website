//---------oficial from https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/:

// const client = require("@mailchimp/mailchimp_marketing");

// client.setConfig({
//   apiKey: "YOUR_API_KEY",
//   server: "YOUR_SERVER_PREFIX",
// });

// const run = async () => {
//   const response = await client.lists.addListMember("list_id", {
//     email_address: "Ebony_Brekke@gmail.com",
//     status: "pending",
//   });
//   console.log(response);
// };

// run();


//-----------------


import axios from 'axios'; // pokud fetch, nepotrebujes axios


function getRequestParams(email) {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const body = JSON.stringify({
        email_address: email,
        status: "subscribed"
      });

    // const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type": "application/json",
        'Authorization': `Basic properlivingproperty:${API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    };

    console.log('hi from requestparams');
    console.log(res);

    return {
        url,
        body,
        headers,
      };
}

export default async function subscribeUser(req, res) {


   const {email} = req.body; //z form.js si posilas request s 'body', co tady prijimas

   console.log(email);

   if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

   try {
        // const response = await fetch({
        // method: 'post',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': process.env.MAILCHIMP_API_KEY,
        // },
        // url: `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
        // data: {
        //     email_address: email,
        //     status: 'subscribed'
        // }
        // })
        const { url, data, headers } = getRequestParams(email);
        const res = await axios.post(url, data, { headers });
        console.log(res);

        // if (response.status === 200) {
        //     res.statusCode = 200
        //     res.end()
        // } else {
        //     res.statusCode = 400
        //     res.end()
        // }

//    } catch(err) {
//     console.log('sorry', err);
//    }
            return res.status(201).json({ error: null });
        } catch (error) {
            return res.status(400).json({
            error: `Oops, something went wrong...`,
  });

}

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
 }