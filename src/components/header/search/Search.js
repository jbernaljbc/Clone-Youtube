import React, { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import Videos from '../../../api/Videos';

const SearchCtrl = Input.Search

/**
 * Componente que realiza búsquedas de videos
 *
 * @class Search
 * @extends {Component}
 * @author JBernal
 */
export class Search extends Component {

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  async handleSearch(value) {
    this.props.dispatch({ type: 'IS_FETCHING', payload: true })
    const list = await Videos.getVideos(value)
    this.props.dispatch({ type: 'SET_VIDEOS', payload: list })
    this.props.dispatch({ type: 'IS_FETCHING', payload: false })
  }

  render() {
    return (
      <div>
        <SearchCtrl
          placeholder="Buscar"
          onSearch={this.handleSearch}
          style={{ width: 400 }}
        />
      </div>
    )
  }
}

export default connect()(Search)