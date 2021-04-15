import { CanComponentDeactivate, CanDeactivateGuard } from './can-deactivate-guard';

describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    guard = new CanDeactivateGuard();
  });

  it('should return true when component returns true', () => {
    const mockComponent: CanComponentDeactivate = {
      canDeactivate: () => {
        return true;
      },
    };

    expect(guard.canDeactivate(mockComponent)).toBeTruthy();
  });
});
