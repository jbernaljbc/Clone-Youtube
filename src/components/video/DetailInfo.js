import React, { Component } from 'react'
import { Row, Col, Comment, Avatar, Tooltip, } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

/**
 * Componente que genera la información del video
 *
 * @class DetailInfo
 * @extends {Component}
 * @author JBernal
 */
export default class DetailInfo extends Component {
  render() {
    const { video } = this.props
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Comment
              actions={[]}
              author={video.channel.title}
              avatar={(
                <Avatar
                  src={video.channel.thumbnails.default.url}
                  alt={video.channel.title}
                />
              )}
              content={(
                <p>{video.description}</p>
              )}
              datetime={(
                <Tooltip title={moment(video.publishedAt).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>Publicado el {moment(video.publishedAt).format('D MMM YYYY')}</span>
                </Tooltip>
              )}
            />
          </Col>
        </Row>
      </React.Fragment>

    )
  }
}

DetailInfo.propTypes = {
  video: PropTypes.object.isRequired
}