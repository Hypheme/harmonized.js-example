import { HttpTransporter } from 'harmonized';

HttpTransporter.addOfflineChecker({
  pattern: /.*/, 
  checkUrl: 'api/authors',
});
