import { HttpTransporter, TransporterMiddleware } from 'harmonized';

class UseCookiesMiddleware extends TransporterMiddleware {

  send(input) {
    console.log('my awesome middleware is used', input);
    console.log(document.cookie);
    input.req.credentials= 'include';
    return input;
  }

  // transmissionError({res}) {
  //   return res;
  // }
}

UseCookiesMiddleware.uniqueName = 'use-cookies-middleware';

// Add the your middleware to the HttpTransporter
HttpTransporter.add(new UseCookiesMiddleware());
HttpTransporter.addOfflineChecker({
  pattern: /.*/, 
  checkUrl: 'api/authors',
});
