import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager,
  Platform
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
   }
   LayoutAnimation.spring();
  }
  renderDescription = () => {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.textStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { library, selectLibrary } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(library.id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {library.title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    flex: 1,
    marginLeft: 20
   }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = ownProps.library.id === state.selectedLibraryId;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
