import React, { Component } from 'react'
import Player from './Player';
import { connect } from 'react-redux';
import Detail from './Detail';

/**
 * Componente que contiene reproductor y detalle de video
 *
 * @class Video
 * @extends {Component}
 * @author JBernal
 */
export class Video extends Component {
  render() {
    return (
      <div>
        <Player></Player>
        <Detail></Detail>
      </div>
    )
  }
}

export default connect()(Video)