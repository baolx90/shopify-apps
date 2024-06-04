import React from "react";
import { Card } from 'antd';
import { ScrollContainer } from 'react-nice-scroll';

const HomePage = () => {
  return (
    <>
    <Card>
      <ScrollContainer >
        <section style={{ height: '100px' }}>
        <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
          </section>
      </ScrollContainer>
  </Card>
  <Card>
      <ScrollContainer >
        <section style={{ height: '100px' }}>
        <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
          </section>
      </ScrollContainer>
  </Card>
  </>
  );
};
  
export default HomePage;