module.exports = {
    apps: [
      {
        name: "nextjs-app",
        script: "npm",
        args: "run dev",
        watch: true,
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  