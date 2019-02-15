import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Skeleton } from 'antd'
import Item from './Item';

/**
 * Componente que genera listado de videos
 *
 * @class List
 * @extends {Component}
 * @author JBernal
 */
export class List extends Component {
  render() {
    const { videos, isFetching } = this.props
    return (
      <div>
        {isFetching && <Skeleton active />}
        {!isFetching && videos.length > 0 && videos.map((item, key) => {
          return <Item key={key} video={item}></Item>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos.list,
    isFetching: state.videos.isFetching
  }
}

export default connect(mapStateToProps)(List)