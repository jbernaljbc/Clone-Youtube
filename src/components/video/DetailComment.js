import React, { Component } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import moment from 'moment'
import PropTypes from 'prop-types'

/**
 * Componente que genera el detalle de comentario
 *
 * @class DetailComment
 * @extends {Component}
 * @author JBernal
 */
export default class DetailComment extends Component {
  render() {
    const { item } = this.props
    return (
      <Comment
        actions={[]}
        author={item.authorDisplayName}
        avatar={(
          <Avatar
            src={item.authorProfileImageUrl}
            alt={item.authorDisplayName}
          />
        )}
        content={(
          <p>{item.textOriginal}</p>
        )}
        datetime={(
          <Tooltip title={moment(item.publishedAt).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(item.publishedAt).fromNow()}</span>
          </Tooltip>
        )}
      />
    )
  }
}

DetailComment.propTypes = {
  item: PropTypes.object.isRequired
}