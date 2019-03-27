module.exports = config();
module.exports.config = config;

function config() {
  const env = "prd-blue";
  const resourcesEnv = env.substring(0, 3);

  const serviceName = `metal-as-a-service`;

  return {
    envVar1: "789",
    db: {
      tables: {
        account: {
          tableName: `${serviceName}-${resourcesEnv}-account`
        }
      }
    }
  };
}
