const mockDeviceInfo = ({
  getUniqueID: jest.fn(),
  getInstanceID: jest.fn(),
  getDeviceId: jest.fn(),
  getManufacturer: jest.fn(),
  getModel: jest.fn(),
  getBrand: jest.fn(),
  getSystemName: jest.fn(),
  getSystemVersion: jest.fn(),
  getBundleId: jest.fn(),
  getBuildNumber: jest.fn(),
  getVersion: jest.fn(),
  getReadableVersion: jest.fn(),
  getDeviceName: jest.fn(),
  getUserAgent: jest.fn(),
  getDeviceLocale: jest.fn(),
  getDeviceCountry: jest.fn(),
  getTimezone: jest.fn(),
  isEmulator: jest.fn(),
  isTablet: jest.fn(),
});

export default mockDeviceInfo;
