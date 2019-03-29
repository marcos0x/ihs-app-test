// Modules
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Mocks
import mockLinking from './../config/mocks/Linking';
import mockNetInfo from './../config/mocks/NetInfo';
import mockLayoutAnimation from './../config/mocks/LayoutAnimation';
import mockConfig from './../config/mocks/Config';
import mockCamera from './../config/mocks/Camera';
import mockDeviceInfo from './../config/mocks/DeviceInfo';
import mockFS from './../config/mocks/FS';

configure({ adapter: new Adapter() });

jest.mock('Linking', () => mockLinking);
jest.mock('NetInfo', () => mockNetInfo);
jest.mock('LayoutAnimation', () => mockLayoutAnimation);
jest.mock('react-native-config', () => mockConfig);
jest.mock('react-native-camera', () => mockCamera);
jest.mock('react-native-device-info', () => mockDeviceInfo);
jest.mock('react-native-fs', () => mockFS);
