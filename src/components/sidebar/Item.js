import React, { Component } from 'react'
import { connect } from 'react-redux'
import Videos from '../../api/Videos'
import PropTypes from 'prop-types'

/**
 * Componente que genera detalle y link video
 *
 * @class Item
 * @extends {Component}
 * @author JBernal
 */
export class Item extends Component {

  constructor(props) {
    super(props)
    this.trimTitle = this.trimTitle.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  trimTitle(title) {
    if (!title) return ''
    if (title.length > 60) return title.substring(0, 60) + '...'
    return title
  }

  async handleOnClick() {
    const { video } = this.props
    this.props.dispatch({ type: 'IS_FETCHING', payload: true })
    const item = await Videos.getVideoDetail(video.id)
    const channel = await Videos.getChannelDetail(video.channelId)
    const comments = await Videos.getComments(video.id)
    this.props.dispatch({ type: 'CURRENT_VIDEO', payload: { ...video, ...item, channel, comments } })
    this.props.dispatch({ type: 'IS_FETCHING', payload: false })
  }

  render() {
    const { video } = this.props

    if (!video) return (<div></div>)

    return (
      <div onClick={this.handleOnClick} style={{ clear: 'both', paddingBottom: 6, cursor: 'pointer' }}>
        <div style={{ float: 'left', padding: 4 }}>
          <img src={video.image.url} alt={video.title} height={94} width={168}></img>
        </div>
        <div>
          <b>{this.trimTitle(video.title)}</b><br></br>
          <span>{video.channelTitle}</span>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  video: PropTypes.object.isRequired
}

export default connect()(Item)