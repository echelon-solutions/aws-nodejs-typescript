# aws-nodejs-typescript
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fechelon-solutions%2Faws-nodejs-typescript.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fechelon-solutions%2Faws-nodejs-typescript?ref=badge_shield)


This repository contains a starter project template for Serverless projects running on AWS.

Built with Serverless and TypeScript.

This is a custom version of the default `aws-nodejs-typescript` template in the Serverless 
[repository](https://github.com/serverless/serverless/tree/34dd46440ebd1a5aeeea229b8cb20c3fce730d6d/lib/plugins/create/templates/aws-nodejs-typescript).

Here are the notable differences:
- comes with `@types/aws-lambda` for typed Lambda handler function definition
- more verbose TypeScript configuration in `tsconfig.json`
- no Webpack dependency or configuration needed; instead uses `serverless-plugin-typescript`
- comes with the `serverless-offline` plugin for local development

## Usage

### Setup

Here are the steps to create a new project based on this template.

1. Install serverless globally.

    ```bash
    npm install -g serverless
    ```

2. Create a new project based on this template, specifying the name for your new project.

    ```bash
    serverless install --url https://github.com/echelon-solutions/aws-nodejs-typescript --name <my-new-project>
    ```

3. Install the project dependencies.

    ```bash
    cd <my-new-project>
    npm install
    ```

### Develop

Run a mocked local environment with hot-reload ...

```bash
npm run dev
```

This will start a mock API Gateway serving the Lambda functions you've defined.

Call the API at `http://localhost:3000`.

### Deploy

Deploy the project to the cloud ...

```bash
npm run deploy
```

## Further Reading

Browse the following resources for more information:

- Serverless [documentation](https://serverless.com/framework/docs/)
- TypeScript [documentation](https://www.typescriptlang.org/docs/)
- AWS [documentation](https://aws.amazon.com/documentation/)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fechelon-solutions%2Faws-nodejs-typescript.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fechelon-solutions%2Faws-nodejs-typescript?ref=badge_large)