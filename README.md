# api-gateway-sns-sample

EventBridgeにEventを発行してSNSを送付する方式と、api-gatewayを通してLambdaの中からSNSを呼び出す方式の２つをデプロイしそれぞれの違いを確認する環境を作成する。

cloudformation: SNSトピック、EventBridge-Bus/Ruleを作成する
aws-sam: lambda,api gateway を作成する

## 前提

- aws cliが使用可能であること
- aws samが使用可能であること

これらのスタックは`us-east-1`で検証をしました。
特に変更がない場合`us-east-1`にデプロイされます。

## Deploy

1. Cfnをデプロイする

template.yml内でSNSのエンドポイントを修正する

```yaml
      Subscription:
        - Protocol: sms
          Endpoint: '<YOUR-PHONE-NUMBER>' # ex. +818011111111
```

シェルを使用してデプロイします。

```bash
cd ./cloud-formation
./deploy.sh
```

2. lambdaをデプロイする

## Deploy lambda

```bash
sam build
sam deploy --guided
```

デプロイが完了したらLambdaの環境変数でSNSのARNをdummyの値から実際のものに書き換えます。

## Cleanup 

Cloudformationとaws-samでデプロイしたスタックを削除します。

---

## 実行

`./cloud-formation/command.txt` のコマンドをCloud shellで実行する。
この際、リージョンをデプロイしたリージョンに合わせること。

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
