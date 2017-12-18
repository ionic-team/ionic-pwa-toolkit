import { flush, render } from '@stencil/core/testing';
import { AppProfile } from './app-profile';

describe('app-profile', () => {
  it('should build', () => {
    expect(new AppProfile()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [AppProfile],
        html: '<app-profile></app-profile>'
      });
    });

    it('should not render any content if there is not a match', async () => {
      await flush(element);
      expect(element.textContent).toEqual('');
    })

    it('should work with a name passed', async () => {
      element.match = {
        params: {
          name: 'stencil'
        }
      }
      
      await flush(element);
      expect(element.textContent).toEqual('Hello! My name is stencil. My name was passed in through a route param!');
    });
  });
});