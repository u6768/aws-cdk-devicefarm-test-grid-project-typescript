import * as iam from '@aws-cdk/aws-iam'
import * as lambda from '@aws-cdk/aws-lambda'
import * as cdk from '@aws-cdk/core'
import * as path from 'path'

export class LambdaTsDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../dist/src')),
    })

    fn.role?.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName("AWSDeviceFarmFullAccess"))
  }
}
