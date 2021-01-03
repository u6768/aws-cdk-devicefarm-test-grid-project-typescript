import { Context, SNSEvent } from "aws-lambda"
import * as AWS from "aws-sdk"

exports.handler = async function (event: SNSEvent, context: Context) {
    console.log(`EVENT: ${JSON.stringify(event, null, 2)}`)
    const devicefarm = new AWS.DeviceFarm({
        region: 'us-west-2'  // only available in Oregon region
    })
    const createTestGridPromise = devicefarm.createTestGridProject({
        name: 'my-test-grid-project'
    }).promise()
    const resp = await createTestGridPromise
    console.log(`My response: ${resp}`)
    return resp.testGridProject?.arn
}
