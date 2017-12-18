import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  render() {
    return (
      <ion-app>
        <stencil-router>
          <stencil-route url='/' component='app-home' exact={true}>
          </stencil-route>

          <stencil-route url='/profile/:name' component='app-profile'>
          </stencil-route>
        </stencil-router>
      </ion-app>
    );
  }
}
