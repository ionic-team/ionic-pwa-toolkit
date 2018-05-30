import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Ionic PWA Toolkit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <main>
          <p>
            Welcome to the Ionic PWA Toolkit.
            You can use this starter to build entire PWAs all with
            web components using Stencil and ionic/core! Check out the readme for everything that comes in this starter out of the box and
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>

          <ion-button href='/profile/ionic'>
            Profile page
          </ion-button>
        </main>
      </ion-content>
    ];
  }
}
