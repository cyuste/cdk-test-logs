import * as kinesis from '@aws-cdk/aws-kinesis';
import * as logs from '@aws-cdk/aws-logs';
import * as destinations from '@aws-cdk/aws-logs-destinations';
import * as cdk from '@aws-cdk/core';


export class CdkTestLogsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const log = new logs.LogGroup(this, "xx", {
      logGroupName : "logname",
      retention : logs.RetentionDays.TWO_WEEKS
    });
    
    const importedStream = kinesis.Stream.fromStreamArn(this, "kinesis-stream", "arn:aws:logs:eu-west-1:67777777777:destination:app-log-pre-destination");

    const subscription = new logs.SubscriptionFilter(this, "subs-filter", {
      destination : new destinations.KinesisDestination(importedStream),
      logGroup: log,
      filterPattern: logs.FilterPattern.anyTerm()
    });

  }
}
