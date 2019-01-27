const accSid = "AC7461c843aad174daae516d26a92a6e31";
const authToken = "cef7a23385cb5236fc9e6f0151879737";
const client = require('twilio')(accSid, authToken);

client.calls.create(
  {
    url: 'https://pastebin.com/raw/DVbVckd0',
    to: '+919971804516',
    from: '+14695186067',
  },
  (err, call) => {
   if(err){console.log(err);}
  else{
    console.log(call.sid);
  }}
);

