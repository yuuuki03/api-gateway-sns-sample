const AWS = require('aws-sdk');
const sns = new AWS.SNS();
const snsArn = process.env.SNS_ARN;

exports.lambdaHandler = async (event, context, callback) => {
    try{
        await publishMessage();
        let responseBody = {
            "STATUS": "SUCCESS"
        };
        let response = {
            "statusCode": 200,
            "headers": {
                "header1": "header-is-here"
            },
            "body": JSON.stringify(responseBody),
            "isBase64Encoded": false
        };
        callback(null, response);
    }catch(e){
        callback(e);
    }
};

async function publishMessage(){
    return await new Promise((resolve,reject) =>{
        const parms = {
            Message: 'SUCCESS',
            TopicArn: snsArn
        };
        sns.publish(parms, (err, data)=>{
            if (err){
                console.log(err, err.stack);
                reject('SNS Publish Error');
            } else {
                resolve(data)
            }
        })
    });
}