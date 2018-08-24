// because this file is imported from cypress/support/index.js
// that means all other spec files will have this assertion plugin
// available to them because the supportFile is bundled and served
// prior to any spec files loading
import chaiInViewport from './chai-in-viewport';

// chai is a global exposed by Cypress which means
// we can just simply extend it
chai.use(chaiInViewport);
