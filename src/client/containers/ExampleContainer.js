import React from 'react';

import ExampleComponent from '../components/ExampleComponent';

import getJsonRestClient from './../lib/getJsonRestClient';

class ExampleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  }

  componentDidMount() {

    const url = '/api/data';

    getJsonRestClient(url)
      .then(resp => {

        this.setState({
          data: resp.data
        });
      })
      .catch(err => {

        this.setState({
          data: null,
          error: err
        });
      });
  }

  render() {

    const { 
      data,
      error 
    } = this.state;

    return (
      <div>
        {!data && !error && <p>Loading...</p>}
        {data &&
          <ExampleComponent
            data={data}
          />}
        {error && <p>Failed to retrieve data.</p>}
      </div>
    );
  }
}

export default ExampleContainer;
