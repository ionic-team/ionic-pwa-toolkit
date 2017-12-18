import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <ion-page class='show-page'>
        <ion-header md-height='56px'>
          <ion-toolbar color='primary'>
            <ion-title>Ionic PWA Toolkit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <p>
            Welcome to the Ionic PWA Toolkit.
            You can use this starter to build entire apps all with
            web components using Stencil and ionic/core!
            Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>

          <stencil-route-link url='/profile/stencil'>
            <ion-button>
              Profile page
            </ion-button>
          </stencil-route-link>
        </ion-content>
      </ion-page>
    );
  }
}
