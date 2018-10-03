import React from 'react';
import Weather from './components/Weather'

export default class App extends React.Component {
  render() {
    return (
      <Weather/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
