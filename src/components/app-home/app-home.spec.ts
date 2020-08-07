import { AppHome } from './app-home';
import { newSpecPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AppHome],
      html: '<app-home></app-home>',
    });
    expect(root.querySelector('ion-title').textContent).toEqual('Home');
  });
});
