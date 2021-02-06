import React from 'react';

const JSXRules = () => {
  return (
    <div className='main'>
      <div className='mainDiv'>
        <h1 className='section-title'>JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to JavaScript.</dd>
          <dt>React Elements</dt>
          <dd>
            Thesse are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
        </dl>
      </div>
      <NormalComponent />
      <CreateElementComponent />
    </div>
  );
};

const NormalComponent = () => {
  return (
    <div style={{ border: '2px solid black' }}>
      <h1>Normal Function Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img src='https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg' />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    'div',
    { style: { border: '2px solid black' } },
    React.createElement('h1', null, 'CreateElementComponent'),
    React.createElement(
      'p',
      null,
      'This was constructed with CreateElement calls in the return.'
    ),
    React.createElement(
      'img',
      {
        src:
          'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png',
      },
      null
    )
  );
};
export default JSXRules;

//This is how to call the Normal Component
//      <NormalComponent />
