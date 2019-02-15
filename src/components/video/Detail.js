import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd'
import DetailHeader from './DetailHeader';
import DetailDivider from './DetailDivider';
import DetailInfo from './DetailInfo';
import DetailListComents from './DetailListComents';

/**
 * Componente que genera el detalle de cada video
 *
 * @class Detail
 * @extends {Component}
 * @author JBernal
 */
export class Detail extends Component {

  render() {
    const { video, isFetching } = this.props
    if (isFetching) return (<Skeleton active />)
    if (!video || !video.channel.thumbnails) return (<div><Skeleton active /></div>)
    return (
      <React.Fragment>
        <DetailHeader video={video} />
        <DetailDivider />
        <DetailInfo video={video} />
        <DetailDivider />
        <DetailListComents video={video}></DetailListComents>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.videos.item,
    isFetching: state.videos.isFetching
  }
}

export default connect(mapStateToProps)(Detail)