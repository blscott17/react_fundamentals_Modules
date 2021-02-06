import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
  const [color, setColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('purple');
  const [borderRadius, setBorderRadius] = useState('5px');
  const [borderStyle, setBorderStyle] = useState('dashed');
  const [display, setDisplay] = useState('inline-block');
  const [width, setWidth] = useState('350px');
  const [textAlign, setTextAlign] = useState('center');
  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };
  // Four Methods - (function (prop)erties)
  const toggleColor = () => {
    color === 'white' ? setColor('pink') : setColor('white');
  };

  const toggleBackgroundColor = () => {
    backgroundColor === 'purple'
      ? setBackgroundColor('black')
      : setBackgroundColor('purple');
  };

  const toggleBorderRadius = () => {
    borderRadius === '5px' ? setBorderRadius('15px') : setBorderRadius('5px');
  };

  const toggleBorderStyle = () => {
    borderStyle === 'dashed'
      ? setBorderStyle('double')
      : setBorderStyle('dashed');
  };
  // pass/include function (prop)erty and selectedStyle (prop)erty into FunctionalComponent calls
  return (
    <div className='main'>
      <div className='mainDiv'>
        <div style={styles}>
          <FunctionalComponent
            string='will this display?'
            function={toggleColor}
            selectedStyle={color}
          />
          <FunctionalComponent
            string='Yes, it will!'
            function={toggleBackgroundColor}
            selectedStyle={backgroundColor}
          />
          <FunctionalComponent
            string='This will also.'
            function={toggleBorderRadius}
            selectedStyle={borderRadius}
          />
          <FunctionalComponent
            string='This makes displays easy!'
            function={toggleBorderStyle}
            selectedStyle={borderStyle}
          />
        </div>
      </div>
    </div>
  );
};

// Now pass/include the selectedStyle (prop)erty into the call to TinyComponent
const FunctionalComponent = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Toggle Style!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};

// (prop)erty selectStyle
const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is : {props.selectedStyle}</p>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  string: 'This is wild!',
  function: () => console.log('Can I see this in my dev tools?'),
  selectedStyle: 'what style??',
};

FunctionalComponent.propTypes = {
  string: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  selectedStyle: PropTypes.string.isRequired,
};

export default PropsDemo;
