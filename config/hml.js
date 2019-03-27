module.exports = config();
module.exports.config = config;

function config() {
  const env = "hml";
  const resourcesEnv = env.substring(0, 3);

  const serviceName = `metal-as-a-service`;

  return {
    envVar1: "456",
    db: {
      tables: {
        account: {
          tableName: `${serviceName}-${resourcesEnv}-account`
        }
      }
    }
  };
}
