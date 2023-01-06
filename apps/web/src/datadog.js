import { datadogLogs } from '@datadog/browser-logs';

export const init = () => {
  datadogLogs.init({
    clientToken: 'pub0666da2adf1edd5308daebf86b894ff6',
    site: 'datadoghq.com',
    service: 'client-app',
    forwardErrorsToLogs: true,
    forwardConsoleLogs: 'all',
    sampleRate: 100,
  });
};
