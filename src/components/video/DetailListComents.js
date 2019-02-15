import React, { Component } from 'react'
import { Row, Col } from 'antd'
import DetailComment from './DetailComment'
import PropTypes from 'prop-types'

/**
 * Componente que genera listado de comentarios
 *
 * @class DetailListComents
 * @extends {Component}
 * @author JBernal
 */
export default class DetailListComents extends Component {
  render() {
    const { video } = this.props
    return (
      <React.Fragment>
        <Row>
          <Col>
            {video.commentCount} Comentarios
          </Col>
        </Row>
        <Row>
          <Col>
            {video.comments.map((item, key) => {
              return <DetailComment key={key} item={item}></DetailComment>
            })}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

DetailListComents.propTypes = {
  video: PropTypes.object.isRequired
}