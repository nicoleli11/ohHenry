import 'react-native';
import React from 'react';
import Picker1 from '../Ashlynn/Picker';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Picker1 />);
});
