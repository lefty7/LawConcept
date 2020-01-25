const ConsoleService = {
  disableConsoleLogInProduction() {
    if (process.env.PROD) console.log = function() {};
  }
};

export { ConsoleService };
