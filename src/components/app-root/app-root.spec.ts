import { AppRoot } from './app-root';

describe('app-root', () => {
  it('builds', () => {
    expect(new AppRoot()).toBeTruthy();
  });

  describe('onSWUpdate', () => {
    let appRoot: AppRoot;
    let mockToast;
    beforeEach(() => {
      appRoot = new AppRoot();
      mockToast = {
        present: jest.fn().mockReturnValue(Promise.resolve()),
        onWillDismiss: jest.fn().mockReturnValue(Promise.resolve())
      };
      appRoot.toastCtrl = {
        create: jest.fn().mockReturnValue(Promise.resolve(mockToast))
      } as any;
      window.location.reload = jest.fn();
    });

    it('creates a new toast', () => {
      appRoot.onSWUpdate();
      expect(appRoot.toastCtrl.create).toHaveBeenCalledTimes(1);
      expect(appRoot.toastCtrl.create).toHaveBeenCalledWith({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      });
    });

    it('presents the toast', async () => {
      await appRoot.onSWUpdate();
      expect(mockToast.present).toHaveReturnedTimes(1);
    });

    it('reloads the app', async () => {
      await appRoot.onSWUpdate();
      expect(window.location.reload).toHaveReturnedTimes(1);
    });
  });
});
