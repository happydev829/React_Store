import React, { Component } from 'react';
import axios from 'axios';

export default class Track extends Component {
  state = {
    order: null
  }

  componentDidMount() {
    this.fetchOrder();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname)
      this.fetchOrder();
  }

  fetchOrder = async () => {
    // Create some kind of a hash so the order can be accessed
    // only by allowed person
    const response = await axios.get(`/api/orders/${this.props.match.params.id}`);
    const order = response.data;
    this.setState({ order });
  }

  render() {
    return (
      <div>
        <code><pre>{JSON.stringify(this.state, null, 2)}</pre></code>
      </div>
    )
  }
}