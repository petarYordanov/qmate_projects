# Project Goal

Use SAP's test framework Qmate Service for UI automation testing with Page Object Model implementation with fluent interfaces

# Insights
Page Object Model has a BasePage, which contains simplified functions from Qmate's api, extended by the BmiPage
https://github.com/petarYordanov/qmate_projects/tree/main/test/pom

Spec file contains the instance of the BmiPage and uses it's functions:
https://github.com/petarYordanov/qmate_projects/blob/main/test/specs/bmi.spec.js


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
