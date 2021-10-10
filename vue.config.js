const bourbon = require('bourbon');
const neat = require('bourbon-neat');

const bourbonPaths = [...bourbon.includePaths, ...neat.includePaths];
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import "@/assets/scss/_variables.scss";`,
        // data: `@import "~@/assets/scss/_variables.scss";`,
        data: `@import "~@/assets/scss/base.scss";`,
        includePaths: bourbonPaths,
      }
    }
  }
};
