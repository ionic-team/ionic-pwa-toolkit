import { Component, State } from '@stencil/core';

import Tunnel, { State as TunnelState } from '../../data/app-data';

import { getData } from '../../helpers/data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() apiData: any[] = [];

  async componentDidLoad() {
    this.apiData = await getData();
  }

  render() {
    const tunnelState: TunnelState = {
      data: this.apiData
    };

    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <Tunnel.Provider state={tunnelState}>
          <app-list></app-list>
        </Tunnel.Provider>

      </ion-content>
    ];
  }
}
