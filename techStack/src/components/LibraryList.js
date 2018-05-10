import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  // define data for ListView
  componentWillMount() {
    // this is boilerplate
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // this must be defined for your app
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // library = the actual item to render
  renderRow = (library) => <ListItem library={library} />

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // return object that will become available to LibraryList as props when connected as below
  console.log('State:');
  console.log(state);

  return { libraries: state.libraries };
  // "libraries:" can be called anything, defining the key here
};

// maps global state object to the props of LibraryList
export default connect(mapStateToProps)(LibraryList);
//connect() returns a function, LibraryList is its parameter
