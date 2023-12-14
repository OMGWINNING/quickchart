import { executeDeployCli } from '@alch/deploy-scripts';

executeDeployCli({
  region: 'us-east-1',
  cluster: 'naas',
  ecrUrl: '209202477790.dkr.ecr.us-east-1.amazonaws.com',
  serviceConfig: {
    'chart-stg': {
      file: 'Dockerfile',
      image: 'chart-stg',
      isProd: false,
      services: ['chart-stg'],
    },
    'chart-prod': {
      file: 'Dockerfile',
      image: 'chart-prod',
      isProd: true,
      services: ['chart-prod'],
    },
  },
});
