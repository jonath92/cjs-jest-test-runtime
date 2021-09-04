const NodeEnvironment = require('jest-environment-node');
const { createCjsGlobals } = require('./cjsGlobalBundled')



class CjsEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
    this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    await super.setup();

    //await someSetupTasks(this.testPath);

    const {global, ...otherCjsGlobals} = createCjsGlobals()

    Object.assign(this.global, otherCjsGlobals)

    // overriding the "this.global.global" object would lead to "describe" from jest not working anymore :-(
    Object.assign(this.global.global, global)


    this.global.console = null


    // Will trigger if docblock contains @my-custom-pragma my-pragma-value
    if (this.docblockPragmas['my-custom-pragma'] === 'my-pragma-value') {
      // ...
    }
  }

  async teardown() {
    // TODO: is this needed? 😱
    // this.global.global = null
    // this.global.imports = null

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