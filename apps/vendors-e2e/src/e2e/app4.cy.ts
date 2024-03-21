import { getGreeting } from '../support/app.po';

describe('vendors-e2e four', () => {
  beforeEach(() => cy.visit('/dashboard'));

  it('should display welcome message', () => {

    // Function helper example, see `../support/app.po.ts` file
    cy.get('body').contains(/my dashboard works/);
  });
});
