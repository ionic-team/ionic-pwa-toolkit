import { AppProfile } from './app-profile';
import { newSpecPage } from '@stencil/core/testing';

describe('app-profile', () => {
  describe('normalization', () => {
    it('returns a blank string if the name is undefined', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile></app-profile>'
      });
      expect(rootInstance.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile name="quincy"></app-profile>'
      });
      expect(rootInstance.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile name="JOSEPH"></app-profile>'
      });
      expect(rootInstance.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', async () => {
      const { rootInstance } = await newSpecPage({
        components: [AppProfile],
        html: '<app-profile name="Q"></app-profile>'
      });
      expect(rootInstance.formattedName()).toEqual('Q');
    });
  });
});
