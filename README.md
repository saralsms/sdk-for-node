# SaralSMS SDK for Node.js

The **SaralSMS SDK for Node.js** makes it easy for developers to access SaralSMS API service in their Node.js applications, and build robust SMS based applications and software.

# Getting Started
1. **Sign up for SaralSMS** – Before you begin, you need to sign up for an SaralSMS account and retrieve your [Credentials].
2. **Minimum requirements** – To run the SDK, your system will need to meet the minimum requirements, including having **Node.js >= 8.0**.

# Installation
**Install the SDK** – Using [npm] or [Yarn] is the recommended way to install the SaralSMS SDK for Node.js. The SDK is available via [npm] under the [`@saralsms/sdk-for-node`][npm-package] package.
```
// yarn
yarn add @saralsms/sdk-for-node
// npm
npm install @saralsms/sdk-for-node
```

## Getting Help
We use the GitHub issues for tracking bugs and feature requests and address them as quickly as possible.

* Call/Email [SaralSMS Support](https://saralsms.com/#contact) or open ticket in your dashboard.
* If it turns out that you may have found a bug, please [open an issue](https://github.com/saralsms/sdk-for-node/issues/new).

## Quick Examples

### Create a SaralSMS client

```javascript
import SaralSms from '@saralsms/sdk-for-node';
// instantiate a SaralSMS client.
const saral = new SaralSms('f9c6......55c1');
```
where `f9c6......55c1` is the authentication token.

### Send Message
This will send the message to one or multiple numbers in an array.
```javascript
saral
  .send(['9851xxx123', '9801xxx456'], 'This is test message from API.')
  .then((res) => {
    // success
    console.log(res);
  })
  .catch((error) => {
    // error
    console.log(error);
  });
```

Sample Response
```json
{
    "message": "2 messages queued for delivery."
}
```

### Credits
This will return the available credits and total messages sent.

```javascript
saral
  .getCredits()
  .then((res) => {
    // success
    console.log(res);
  })
  .catch((error) => {
    // error
    console.log(error);
  });
```

Sample Response
```json
{
  "credits": 6584,
  "total_sent": 3416
}
```

### Reports
This will return historical messages reports including networks, charges and status.
     
```javascript
const pageNumber = 1;
saral
  .getReports(pageNumber)
  .then((res) => {
    // success
    console.log(res);
  })
  .catch((error) => {
    // error
    console.log(error);
  });
```

Sample Response
```json
{
  "pages": 126,
  "data": [
    {
      "id": 56480058,
      "receiver": "9779851xxx123",
      "network": "ntc",
      "message": "Fruits are an excellent source of essential vitamins and minerals.",
      "api_credit": "1",
      "delivery_at": "2020-07-09 01:45:09"
    },
    {
      "id": 56480057,
      "receiver": "9779801xxx456",
      "network": "ncell",
      "message": "Vegetables are important sources of many nutrients, including potassium, dietary fiber.",
      "api_credit": "1",
      "delivery_at": "2020-07-08 07:25:31"
    }
  ]
}
```

[Credentials]: https://app.saralsms.com

[npm]: https://www.npmjs.com
[Yarn]: https://yarnpkg.com
[npm-package]: https://www.npmjs.com/package/@saralsms/sdk-for-node
