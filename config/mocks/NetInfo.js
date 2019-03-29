const mockNetInfo = ({
  isConnected: {
    fetch: () => new Promise((accept, resolve) => accept(true)),
    addEventListener: jest.fn(),
  },
  getConnectionInfo: () => new Promise((accept, resolve) => accept({ type: 'wifi' })),
  addEventListener: jest.fn(),
});

export default mockNetInfo;
