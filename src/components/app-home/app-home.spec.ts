import { TestWindow } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app-home', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppProfileElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [AppHome],
      html: '<app-home></app-home>'
    });
  });

  it('should contain "Welcome to the Ionic PWA Toolkit." text', async () => {
    await window.flush();
    expect(element.textContent).toContain('Welcome to the Ionic PWA Toolkit.');
  });

});
