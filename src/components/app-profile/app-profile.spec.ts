import { TestWindow } from '@stencil/core/testing';
import { AppProfile } from './app-profile';

describe('app-profile', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppProfileElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [AppProfile],
      html: '<app-profile></app-profile>'
    });
  });

  it('should work with name prop as ROCA and contain "Hello! My name is Roca" ', async () => {
    element.name = 'Roca';
    await window.flush();
    expect(element.textContent).toContain('Hello! My name is Roca');
  });
});
