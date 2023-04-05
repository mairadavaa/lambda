// const AWS = require("aws-sdk");
// module.exports.handler = async () => {
//   const morningTime = new Date()
//   morningTime.setHours(9, 0, 0)
//   const starthour = morningTime.getHours()
//   const startMinute = morningTime.getMinutes()

//   const now = new Date()
//   const nowhour = now.getHours()
//   const nowMinute = now.getMinutes()

//   const diffminute = nowMinute - startMinute
//   if(nowhour===starthour){

//     if(30>diffminute>20){
//       console.log("za yaxav")
//      } else if(diffminute>30){
//       console.log("araich dee")
//      }
//    } else if(nowhour>starthour){
//      const diffhour = nowhour - starthour
//      console.log("tas shyy",diffhour, "tsag")

//    } else if(nowhour<starthour){
//      console.log("arai ert yy")
//    }

//   return awsId;
// };
// const nodemailer = require("nodemailer");
// module.exports.handler = async () => {
//   // let testAccount = await nodemailer.createTestAccount();
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "davaamaira@gmail.com", // generated ethereal user
//       pass:"efejsqdrdntwjmzt", // generated ethereal password
//     },
//   });
//   let info = await transporter.sendMail({
//     from: ' davaamaira@gmail.com', // sender address
//     to: "davaamaira@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello LEAP-3 ?", // plain text body
//     html: "<b>Hello LEAPPP-3-2023 onnnn</b>", // html body
//   });
//  return info;
// } 
//==================================//
// const AWS = require("aws-sdk");

// module.exports.ParentFunction = async (event) => {
//   const sts = new AWS.Lambda();
//   const params = {
//     FunctionName: 'arn:aws:lambda:us-east-1:347935611562:function:test-serverless-dev-function2',
//     InvocationType: "Event",
//     Payload: JSON.stringify({ 'name': "Batman" })
//   }
//   const response = await sts.invoke(params).promise();
//   return response
// }
// const axios = require("axios")
// module.exports.ChildFunction = async (event) => {
//   const name = event.name
//   const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=QPHq62keOwy2IJ46dWicOPFANBwsBnK4&limit=50&offset=0&q=${name}`)
//   const image = result.data.data.map((el)=>
//   el.url
//   )

//   console.log(image)

// }
// const { DynamoDB } = require("@aws-sdk/client-dynamodb");
// const axios = require("axios")
// const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
// module.exports.TestFunction = async () => {

//     const heroname = "spiderman"
//     const db = new DynamoDB();
//     const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=QPHq62keOwy2IJ46dWicOPFANBwsBnK4&limit=50&offset=0&q=${heroname}`)
//     const image = result.data.data.map((el) => el.url)
//     const newName = image.map((url) => ({
//         'S': url
//     }));
//     // const params = {
//     //     TableName: "giphy",
//     //     Item: marshall({ userId: "134", username: "batman" }),
//     // }

//     const { Item } = await db.updateItem({
//         TableName: 'giphy',
//         Key: marshall({ userId: '1488', username: heroname }),
//         UpdateExpression: 'set urls = :changedUrls',
//         ExpressionAttributeValues: {
//             ':changedUrls': { L: newName }
//         }
//     })
//     //   const { Item } = await db.putItem(params)
//     return Item
// }

// module.exports.TestFunction = async () => {
//     const db = new DynamoDB();
//     // const params = {
//     //     TableName: "users",
//     //     Item : marshall({ userId: "111", username: "bat", age: 20, phoneNumber: 99999})

//     // }
//     const params = {

//         TableName: "users",
//         IndexName: "age-index",
//         KeyConditionExpression: "userId = :userId AND age = :age",
//         ExpressionAttributeValues: {
//             ":userId": { S: "111" },
//             ":age": { N: "20" }
//         },

//     }
//     const Item = await db.query(params)
//     return Item
// }

//=========/


// const userid = "1001"
// const firstname = "davaa"
// const lastname = "maira"
// const email = "davaamaira@gmail.com"
// const password = "1234"
// const bcrypt = require('bcryptjs');

// const helper = async (pass) => {
//     const hash = await bcrypt.hashSync(pass, 1);
//     return hash
// }

// const db = new DynamoDB();
// module.exports.TestFunction = async () => {
//     const params = {
//         TableName: "login",
//         Item: marshall({ userid: userid, firstname: firstname, lastname: lastname, email: email, password: await helper(password) })
//     }
//     const { Item } = await db.putItem(params)

//     return Item
// }

// module.exports.secondFunction = async (event) => {
//     const { firstname, email, lastname } = event.Records[0].dynamodb.NewImage
//     console.log (firstname, email, lastname)
//       // mails service
//   };
//==============3 sarinn 28===========//



// module.exports.TestFunction = async (event) => {

//   const id = "123"
//   const { name } = JSON.parse(event.body)
//   const date = new Date().toISOString()
//   const result = await axios(`https://api.giphy.com/v1/gifs/search?api_key=QPHq62keOwy2IJ46dWicOPFANBwsBnK4&limit=50&offset=0&q=${name}`)
//   const urls = result.data.data.map((el) => el.url)

//   const params = {
//     TableName: "APItable",
//     Item: marshall({ hashKey: id, name: name, urls: urls, createdAt: date })
//   }
//   const { Item } = await db.putItem(params);
//   return Item
// }
// module.exports.SecondFunction = async (event) => {
//   const { id } = event.queryStringParameters
//   const result = await db.getItem({
//     TableName: "APItable",
//     Key: marshall({ hashKey: id })
//   })
//   const response = unmarshall(result.Item)
//   console.log(response);
//   return { body: JSON.stringify(response) }
// }
//========3sariin 30========//
// const bcrypt = require('bcryptjs');
// const { v4: uuidv4 } = require('uuid')
// const helper = async (pass) => {
//   const hash = await bcrypt.hashSync(pass, 1);
//   return hash
// }
// module.exports.TestFunction = async (event) => {
//   const id = uuidv4()

//   const { email , password} = JSON.parse(event.body)

//   const params = {
//     TableName: "user",
//     Item: marshall({ id: id, email: email, password: await helper(password) })
//   }
//   const result = await db.putItem(params)
//   console.log(result)
//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//     body: JSON.stringify({
//       message: result,
//     }),
//   };
// }
// module.exports.SecondFunction = async (event) => {
//   const { email , password} = JSON.parse(event.body)
//   const params = {

//     TableName: "user",
//     IndexName: "email-index",
//     KeyConditionExpression: "email = :email",
//     ExpressionAttributeValues: {
//       ":email": { S: email }
//     },

//   }
//   const Items = await db.query(params)

//   const userPass = Items[0].map((el) => el.password)
//   console.log(userPass)
//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//     body: JSON.stringify({
//       message: Items,
//     }),
//   };
// }
// module.exports.TimeFunction = async (event) =>{
//   const date = new Date().toISOString()
//   const id = uuidv4()
//   const { email} = JSON.parse(event.body)
//     const params = {
//     TableName: "attendence",
//     Item: marshall({id: id,  email: email, createAt: date })
//   }
//   const result = await db.putItem(params)

//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       "Access-Control-Allow-Headers": ""
//     },
//     body: JSON.stringify({
//       message: result,
//     }),
//   };
// }

//========4saiin3 =======//
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
module.exports.PhotoFunction = async (event) => {

  console.log(event)
  const { key, type } = JSON.parse(event.body)
  console.log(key, type)
  const params = {
    Bucket: "zurag-leap3",
    Key: key,
    ContentType: type
  };

  const result = await s3.getSignedUrl('putObject', params)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": '*'
    },
    body: JSON.stringify({
      message: result,
    }),
  };
}
module.exports.SecondFunction = async (event) => {
  console.log(event)
}