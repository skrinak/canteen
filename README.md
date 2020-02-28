Amplify Predictions Webinar

## Features
* Entities recognition
* Label real world objects
* Converting text to speech
* Translating text from one language to another
* Text recognition from image
* Interpretation of text
* Uploading images for automatic training
* Transcribing text

## Demo
1. Upload an image
1. Call Rekognition to identify features
1. Send those features to Polly to speak them back to you
1. Upload another image with text
1. Translate the text in French and have Polly say it 1st in English then in French
1. Choose a news article from the browser
1. Send the URL to Comprehend and determine sentiment
1. List key phrases
1. Make a short recording
1. Transcribe it and display
1. Do everything above in iOS

## Script 
* Comprehend 
  * DetectDominantLanguage
  * DetectEntities
  * DetectKeyPhrases
  * DetectSentiment
  * DetectSyntax
* Polly 
  * SynthesizeSpeech
* Rekognition
  * DetectFaces
  * DetectLabel
  * DetectLabels
  * DetectModerationLabels
  * DetectText
  * RecognizeCelebritie
  * SearchFacesByImag
* Textract 
  * AnalyzeDocument
  * DetectDocumentText
  * GetDocumentAnalysis
  * StartDocumentAnalysis
  * StartDocumentTextDetection
* Transcribe 
  * StartStreamTranscriptionWebSocket
* Translate
  * TranslateText 

## Prerequisites
* AWS CLI
```
conda install -c conda-forge awscli 
```
* https://anaconda.org/
```
conda install -c conda-forge sagemaker-python-sdk 
```
* https://nodejs.org/en/
```
C:\Users\skrin>node --version
v12.14.1

C:\Users\skrin>npm --version
6.13.4
```
* Yarn
  * [https://classic.yarnpkg.com/](https://classic.yarnpkg.com/en/)


## Build

| Time | Command                          |
|------|----------------------------------|
| 2:00 | npm install -g @aws-amplify/cli  |
| 2:00 | npx create-react-app canteen |
| 0:00 | cd canteen |
| 0:24 | yarn add aws-amplify |
| 3:45 | npm install --save aws-amplify aws-amplify-react semantic-ui-react react-router-dom  |
| 0:00 | Add this link to the <head> of the index.html file. <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> |
| 3:00 | amplify init |
| 0:30 | amplify add auth |
| 1:00 | amplify add storage |
| 3:15 | amplify push |
| 0:25 | npm start |


```
>amplify init
Scanning for plugins...
Plugin scan successful
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project canteen
? Enter a name for the environment canteen
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm.cmd run-script build
? Start Command: npm.cmd run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use (Use arrow keys)
> default (node:6192) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 keypress listeners added to [ReadStream]. Use emitter.setMax? Please choose the profile you want to use default
Adding backend environment canteen to AWS Amplify Console app: ds3iwfzig3n93
/ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket               AWS::S3::Bucket            Sat Feb 08 2020 11:44:00 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UnauthRole                     AWS::IAM::Role             Sat Feb 08 2020 11:43:59 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                       AWS::IAM::Role             Sat Feb 08 2020 11:43:59 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DeploymentBucket               AWS::S3::Bucket            Sat Feb 08 2020 11:43:59 GMT-0800 (Pacific Standard Time)                        
CREATE_IN_PROGRESS UnauthRole                     AWS::IAM::Role             Sat Feb 08 2020 11:43:59 GMT-0800 (Pacific Standard Time)                        
CREATE_IN_PROGRESS AuthRole                       AWS::IAM::Role             Sat Feb 08 2020 11:43:59 GMT-0800 (Pacific Standard Time)                        
CREATE_IN_PROGRESS amplify-canteen-canteen-114352 AWS::CloudFormation::Stack Sat Feb 08 2020 11:43:56 GMT-0800 (Pacific Standard Time) User Initiated         
| Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Sat Feb 08 2020 11:44:13 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE AuthRole   AWS::IAM::Role Sat Feb 08 2020 11:44:13 GMT-0800 (Pacific Standard Time)
/ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Sat Feb 08 2020 11:44:21 GMT-0800 (Pacific Standard Time)
- Initializing project in the cloud...

CREATE_COMPLETE amplify-canteen-canteen-114352 AWS::CloudFormation::Stack Sat Feb 08 2020 11:44:23 GMT-0800 (Pacific Standard Time)
√ Successfully created initial AWS cloud resources for deployments.
√ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
“amplify console” to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

```
>amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? (Use arrow keys)
> Username
  Email
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added resource canteen67623f07 locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud


C:\Users\skrin\Development\canteen>amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: canteen
? Please provide bucket name: canteen
? Who should have access: Auth and guest users
? What kind of access do you want for Authenticated users? create/update, read, delete
? What kind of access do you want for Guest users? (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) create/update
? What kind of access do you want for Guest users? read
? Do you want to add a Lambda Trigger for your S3 Bucket? No
Successfully updated auth resource locally.
Successfully added resource canteen locally

Some next steps:
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud


C:\Users\skrin\Development\canteen>amplify push
√ Successfully pulled backend environment canteen from the cloud.

Current Environment: canteen

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Auth     | canteen67623f07 | Create    | awscloudformation |
| Storage  | canteen         | Create    | awscloudformation |
? Are you sure you want to continue? Yes
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Sat Feb 08 2020 11:57:23 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS authcanteen67623f07            AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:23 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS storagecanteen                 AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:22 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Sat Feb 08 2020 11:57:22 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS authcanteen67623f07            AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:22 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS storagecanteen                 AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:21 GMT-0800 (Pacific Standard Time)
UPDATE_IN_PROGRESS amplify-canteen-canteen-114352 AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:17 GMT-0800 (Pacific Standard Time) User Initiated
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-canteen-canteen-114352-authcanteen67623f07-PQ43DCU29JUI AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:22 GMT-0800 (Pacific Standard Time) User Initiated


CREATE_IN_PROGRESS amplify-canteen-canteen-114352-storagecanteen-63EGW8QMREY3 AWS::CloudFormation::Stack Sat Feb 08 2020 11:57:22 GMT-0800 (Pacific Standard Time) User Initiated
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Sat Feb 08 2020 11:57:28 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Sat Feb 08 2020 11:57:28 GMT-0800 (Pacific Standard Time)
\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Sat Feb 08 2020 11:57:27 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Sat Feb 08 2020 11:57:26 GMT-0800 (Pacific Standard Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Sat Feb 08 2020 11:57:37 GMT-0800 (Pacific Standard Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Sat Feb 08 2020 11:57:44 GMT-0800 (Pacific Standard Time)
\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Sat Feb 08 2020 11:57:47 GMT-0800 (Pacific Standard Time)
- Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Sat Feb 08 2020 11:57:49 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Sat Feb 08 2020 11:57:49 GMT-0800 (Pacific Standard Time) Resource creation Initiated
\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3Bucket AWS::S3::Bucket Sat Feb 08 2020 11:57:49 GMT-0800 (Pacific Standard Time)
\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:54 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClient    AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3GuestReadPolicy     AWS::IAM::Policy Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthReadPolicy      AWS::IAM::Policy Sat Feb 08 2020 11:57:53 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3GuestPublicPolicy   AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Sat Feb 08 2020 11:57:52 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3AuthReadPolicy      AWS::IAM::Policy Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3GuestReadPolicy     AWS::IAM::Policy Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS S3GuestPublicPolicy   AWS::IAM::Policy Sat Feb 08 2020 11:57:51 GMT-0800 (Pacific Standard Time)
\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Sat Feb 08 2020 11:57:57 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Sat Feb 08 2020 11:57:56 GMT-0800 (Pacific Standard Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-canteen-canteen-114352-storagecanteen-63EGW8QMREY3 AWS::CloudFormation::Stack Sat Feb 08 2020 11:58:08 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3GuestReadPolicy                                          AWS::IAM::Policy           Sat Feb 08 2020 11:58:06 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3AuthUploadPolicy                                         AWS::IAM::Policy           Sat Feb 08 2020 11:58:06 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3AuthReadPolicy                                           AWS::IAM::Policy           Sat Feb 08 2020 11:58:06 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3AuthPublicPolicy                                         AWS::IAM::Policy           Sat Feb 08 2020 11:58:06 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3AuthProtectedPolicy                                      AWS::IAM::Policy           Sat Feb 08 2020 11:58:05 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3GuestPublicPolicy                                        AWS::IAM::Policy           Sat Feb 08 2020 11:58:05 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE S3AuthPrivatePolicy                                        AWS::IAM::Policy           Sat Feb 08 2020 11:58:05 GMT-0800 (Pacific Standard Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE storagecanteen AWS::CloudFormation::Stack Sat Feb 08 2020 11:58:09 GMT-0800 (Pacific Standard Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Sat Feb 08 2020 11:58:11 GMT-0800 (Pacific Standard Time)
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Sat Feb 08 2020 11:58:14 GMT-0800 (Pacific Standard Time)
\ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy      Sat Feb 08 2020 11:58:18 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE    UserPoolClientLambda       AWS::Lambda::Function Sat Feb 08 2020 11:58:15 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPoolClientLambda       AWS::Lambda::Function Sat Feb 08 2020 11:58:14 GMT-0800 (Pacific Standard Time) Resource creation Initiated
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Sat Feb 08 2020 11:58:19 GMT-0800 (Pacific Standard Time) Resource creation Initiated
\ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Sat Feb 08 2020 11:58:32 GMT-0800 (Pacific Standard Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 08 2020 11:58:36 GMT-0800 (Pacific Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 08 2020 11:58:35 GMT-0800 (Pacific Standard Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLogPolicy AWS::IAM::Policy Sat Feb 08 2020 11:58:49 GMT-0800 (Pacific Standard Time)
| Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Sat Feb 08 2020 11:58:52 GMT-0800 (Pacific Standard Time)
/ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool         AWS::Cognito::IdentityPool Sat Feb 08 2020 11:58:58 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout      Sat Feb 08 2020 11:58:55 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout      Sat Feb 08 2020 11:58:55 GMT-0800 (Pacific Standard Time) Resource creation Initiated
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 08 2020 11:59:04 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE    IdentityPool        AWS::Cognito::IdentityPool               Sat Feb 08 2020 11:59:01 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS IdentityPool        AWS::Cognito::IdentityPool               Sat Feb 08 2020 11:59:00 GMT-0800 (Pacific Standard Time) Resource creation Initiated
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    amplify-canteen-canteen-114352-authcanteen67623f07-PQ43DCU29JUI AWS::CloudFormation::Stack               Sat Feb 08 2020 11:59:07 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE    IdentityPoolRoleMap                                             AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 08 2020 11:59:05 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS IdentityPoolRoleMap                                             AWS::Cognito::IdentityPoolRoleAttachment Sat Feb 08 2020 11:59:05 GMT-0800 (Pacific Standard Time) Resource creation Initiated
| Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE authcanteen67623f07 AWS::CloudFormation::Stack Sat Feb 08 2020 11:59:16 GMT-0800 (Pacific Standard Time)
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Sat Feb 08 2020 11:59:19 GMT-0800 (Pacific Standard Time)
- Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Sat Feb 08 2020 11:59:21 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE    UpdateRolesWithIDPFunction        AWS::Lambda::Function Sat Feb 08 2020 11:59:20 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction        AWS::Lambda::Function Sat Feb 08 2020 11:59:19 GMT-0800 (Pacific Standard Time) Resource creation Initiated
| Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     amplify-canteen-canteen-114352    AWS::CloudFormation::Stack Sat Feb 08 2020 11:59:28 GMT-0800 (Pacific Standard Time)
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-canteen-canteen-114352    AWS::CloudFormation::Stack Sat Feb 08 2020 11:59:27 GMT-0800 (Pacific Standard Time)
CREATE_COMPLETE                     UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout      Sat Feb 08 2020 11:59:25 GMT-0800 (Pacific Standard Time)
CREATE_IN_PROGRESS                  UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout      Sat Feb 08 2020 11:59:25 GMT-0800 (Pacific Standard Time) Resource creation Initiated
√ All resources are updated in the cloud



C:\Users\skrin\Development\canteen>npm start

> canteen@0.1.0 start C:\Users\skrin\Development\canteen
> react-scripts start

i ｢wds｣: Project is running at http://192.168.11.85/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\skrin\Development\canteen\public
i ｢wds｣: 404s will fallback to /index.html
Starting the development server...
Compiled successfully!

You can now view canteen in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.11.85:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```


