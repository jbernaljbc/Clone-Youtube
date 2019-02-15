import React, { Component } from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'

/**
 * Componente que genera la cabecera del video
 *
 * @class DetailHeader
 * @extends {Component}
 * @author JBernal
 */
export default class DetailHeader extends Component {
  render() {
    const { video } = this.props
    return (
      <React.Fragment>
        <Row><Col><b>{video.title}</b></Col></Row>
        <Row>
          <Col span={8}>
            {video.viewCount} Visualizaciones
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <img src="./images/like.png" alt="like"></img>
            {video.likeCount}
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <img src="./images/dislike.png" alt="like"></img>
            {video.dislikeCount}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

DetailHeader.propTypes = {
  video: PropTypes.object.isRequired
}