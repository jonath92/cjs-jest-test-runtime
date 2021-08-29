const NodeEnvironment = require('jest-environment-node');
const cjsGlobal = require('./cjsGlobalBundled')



class CjsEnvironment extends NodeEnvironment {
    constructor(config, context) {
      super(config, context);
      this.testPath = context.testPath;
      this.docblockPragmas = context.docblockPragmas;
    }
  
    async setup() {
      await super.setup();
        
      //await someSetupTasks(this.testPath);
      this.global.global = cjsGlobal.createGlobalObject()
      this.global.imports = cjsGlobal.createImports()

      this.global.console = null
  
  
      // Will trigger if docblock contains @my-custom-pragma my-pragma-value
      if (this.docblockPragmas['my-custom-pragma'] === 'my-pragma-value') {
        // ...
      }
    }
  
    async teardown() {
      this.global.global = null
      this.global.imports = null
  
      //await someTeardownTasks();
      await super.teardown();
    }
  
    getVmContext() {
      return super.getVmContext();
    }
  
    async handleTestEvent(event, state) {
  
      if (event.name === 'test_start') {
        // ...
      }
    }
  }
  
  module.exports = CjsEnvironment;