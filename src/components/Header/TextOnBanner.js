import { BaseButton } from '../BaseButton';
import React, { Component } from 'react';

class TextOnBanner extends Component {
  render() {
    return (
      <div className="textBanner">
        Keeping assets valuable. <br />
        For you and for <br />
        generations to come.
        <br />
        <BaseButton theme="onbanner" size="medium">
          Our Services
        </BaseButton>
      </div>
    );
  }
}

export default TextOnBanner;
