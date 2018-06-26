import { Component } from '@stencil/core';

import Tunnel, { State as TunnelState } from '../../data/app-data';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.css'
})
export class AppList {
  
  render() {
    return (
      <Tunnel.Consumer>
        {({ data }: TunnelState) => (
          <ion-list>
            {
              data.map((post) => {
                return (
                  <ion-item href={`/profile/${post}`} key={post}>
                    <ion-label>
                      <h2>List item {post}</h2>
                    </ion-label>
                  </ion-item>
                )
              })
            }
          </ion-list>
        )}
      </Tunnel.Consumer>
    );
  }
}