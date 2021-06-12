import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// * Should return empty message if there is no submissions
// * Should show an error whenever a submission state is receibed
it('renders correctly', () => {
  renderer.create(<App />);
});
