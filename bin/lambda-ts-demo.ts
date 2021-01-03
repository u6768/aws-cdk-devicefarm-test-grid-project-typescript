#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaTsDemoStack } from '../lib/lambda-ts-demo-stack';

const app = new cdk.App();
new LambdaTsDemoStack(app, 'LambdaTsDemoStack');
