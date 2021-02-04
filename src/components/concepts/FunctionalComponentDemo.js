import React from 'react';

// Module 3.5 Add Using (bootstrap - Reactstrap package.)
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

// Module 3.4 Using Description List (dl), Description Title(dt) and Description Data (dd) tags.
const FunctionalComponentDemo = function () {
  return (
    <Container className='main'>
      <Row>
        <Col xs='12'>
          <h1>Functional Component</h1>
          <p>
            Functional components are the primary tool in React to build a
            small, modular piece of your page.
          </p>
          <dl>
            <dt>Can use state</dt>
            <dd>
              With the 'useState' hook, functional components can now both
              render a display to the page and update the information to be
              shown.
            </dd>
            <dt>No 'this' keyword</dt>
            <dd>
              Older class components use 'this', functional components have NO
              'this' object.
            </dd>
            <dt>Can use effects</dt>
            <dd>
              With the 'useEffect' hook, functional components can perform side
              effects with any props or state changes.
            </dd>
            <dt>return()</dt>
            <dd>
              <strong>
                Must return a single element, but this element may have nested
                elements inside.
              </strong>
            </dd>
          </dl>
        </Col>
      </Row>
      <hr />
      <h1>Functional Syntax versus Arrow Function</h1>
      <h1>Challenge</h1>
      <Row>
        <Col md='6'>
          <HelloWorldFatArrow className='logo' />
        </Col>
        <Col md='6'>
          <HelloWorld />
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
  return (
    <div>
      <Card>
        <img
          width='100%'
          height='280px'
          src='https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg'
          alt='Card cap'
        />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = function () </pre>.
          </CardText>
          <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

//Fat Arro Functional Component - 3 feweer lines. Common in React .... why no curly braces?
const HelloWorldFatArrow = () => (
  <div>
    <Card>
      <img
        width='100%'
        height='280px'
        src='https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg'
        alt='Card cap'
      />
      <CardBody>
        <CardTitle>Fat Arrow</CardTitle>
        <CardSubtitle>A JS Library</CardSubtitle>
        <CardText>
          <pre>const HelloWorld = () ={'>'} </pre>.
        </CardText>
        <Button>Go somewhere, man</Button>
      </CardBody>
    </Card>
  </div>
);
// Module 3.1 Add classes that are already Styled in App.css in block format
// const FunctionalComponentDemo = function () {
//   return (
//     <div className='main'>
//       <div className='mainDiv'>
//         <div>Hello React</div>
//         <div>How are you today?</div>
//       </div>
//     </div>
//   );
// };
// 3.1 Another Way to write it with a fat Arrow Function instead of block code as above.
// return written as an Arrow => Function|with more than one line still need {return()}
//                               But take out the word function before first set of ()
//                               And add the fat Arrow symbol => after first set of ().
// const FunctionalComponentDemo = () => {
//   return (
//     <div className='main'>
//       <div className='mainDiv'>
//         <div>Hello React</div>
//         <div>How are you today?</div>
//       </div>
//     </div>
//   );
// };

//
// Original Code,
// import React from 'react';

// const FunctionalComponentDemo = function () {
//   return <div>Hello React</div>;
// };

// export default FunctionalComponentDemo;
