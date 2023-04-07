// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: "host",
  remotes: ["home", "cart"],
};

module.exports = moduleFederationConfig;
