const { DEBUG_PORT, NUM_INSTANCES } = process.env;

const numInstances = Number.parseInt(NUM_INSTANCES) || 4;

module.exports = {
  apps: [
    {
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      name: 'Chart',
      script: 'index.js',
      node_args: [
        '--max-http-header-size=65536',
        ...(DEBUG_PORT ? [`--inspect=0.0.0.0:${DEBUG_PORT}`] : []),
      ],
      exec_mode: DEBUG_PORT ? 'fork' : 'cluster',
      instances: DEBUG_PORT ? 1 : numInstances,
      autorestart: true,
      watch: false,
      max_memory_restart: '3G',
      exp_backoff_restart_delay: 100,
      out_file: '/dev/null',
      error_file: '/dev/null',
    },
  ],
};
