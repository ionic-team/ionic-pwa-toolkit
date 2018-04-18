import { TestWindow } from '@stencil/core/testing';
import { LazyImg } from './lazy-img';

describe('lazy-img', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLAppProfileElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [LazyImg],
      html: '<lazy-img></lazy-img>'
    });
  });

  it('should contain alt message "Hello Stencil!"  ', async () => {
    await window.flush();
    // Different way to test attributes
    // element.src = '//my-image.png' or <lazy-img src="//my-image.png"></lazy-img>
    element.setAttribute('src' , '//my-image.png');
    await expect(element.getAttribute('src')).toEqual('//my-image.png');
  });
});
