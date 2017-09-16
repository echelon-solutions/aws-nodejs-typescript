import { Handler, Context, ProxyCallback, ProxyResult } from 'aws-lambda'

const hello: Handler = (event: any, context: Context, callback: ProxyCallback) => {
  const response: ProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10)
    })
  }

  callback(undefined, response)
}

export { hello }
