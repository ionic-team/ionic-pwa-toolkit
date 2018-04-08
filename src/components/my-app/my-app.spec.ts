import { TestWindow } from '@stencil/core/testing';
import { MyApp } from './my-app';

describe('my-app', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppProfileElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [MyApp],
      html: '<my-app></my-app>'
    });
  });
});