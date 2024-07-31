# Project Goal

Use SAP's test framework Qmate Service for UI automation testing with Page Object Model implementation with fluent interfaces

## Installation

First initialize node 

```bash
npm init
```

Install WebdriverIo

```bash
npm init wdio@latest .
```

Install Qmate service

```bash
npm install @sap_oss/wdio-qmate-service
```
## Setup

In config.js file add 
 * const QmateService = require("@sap_oss/wdio-qmate-service");
 * add baseUrl
 * add services: [[QmateService]],


## Run Project

```bash
npx wdio config.js
```
