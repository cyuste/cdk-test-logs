#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkTestLogsStack } from '../lib/cdk-test-logs-stack';

const app = new cdk.App();
new CdkTestLogsStack(app, 'CdkTestLogsStack');
