import React, { Component } from 'react'
import './Video.css'
import { Spin } from 'antd'
import { connect } from 'react-redux'


export class Player extends Component {
  render() {
    const { video, isFetching } = this.props
    if (isFetching) return (<div className="video-player-loading"><Spin /></div>)
    if (!video) return (<div>No video</div>)

    return (
      <div className="video-player">
        <iframe
          title="video"
          src={`https://www.youtube.com/embed/` + video.id}
          frameBorder="0"
          allowFullScreen />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.videos.item,
    isFetching: state.videos.isFetching
  }
}

export default connect(mapStateToProps)(Player)