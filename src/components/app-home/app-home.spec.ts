import { render } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app', () => {
  it('should build', () => {
    expect(new AppHome()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppHome],
        html: '<app-home></app-home>'
      });
    });
  });
});