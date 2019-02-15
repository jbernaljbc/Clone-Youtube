import React, { Component } from 'react'
import { connect } from 'react-redux'
import Video from '../video/Video';

/**
 * Componente contenedor de video
 *
 * @class Body
 * @extends {Component}
 * @author JBernal
 */
export class Body extends Component {

  render() {
    return (
      <div style={{ padding: 10 }}>
        <Video></Video>
      </div>
    )
  }
}

export default connect()(Body)
