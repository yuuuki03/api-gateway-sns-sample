#!/bin/bash

CFN_STACK_NAME="cfn-demo-apigateway-lambda-sns-stack"
CFN_TEMPLATE="./template.yaml"
REGION="us-east-1"

# テンプレートの実行
aws cloudformation deploy \
  --stack-name ${CFN_STACK_NAME} \
  --template-file ${CFN_TEMPLATE} \
  --capabilities CAPABILITY_IAM \
  --region ${REGION}