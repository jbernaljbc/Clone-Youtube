import React, { Component } from 'react'
import Videos from './api/Videos'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Body from './components/body/Body'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import './App.css'

class App extends Component {

  async componentDidMount() {
    const list = await Videos.getVideos()
    const first = list && list.length > 0 ? list.shift() : {}
    const item = await Videos.getVideoDetail(first.id)
    const channel = await Videos.getChannelDetail(first.channelId)
    const comments = await Videos.getComments(first.id)
    this.props.dispatch({ type: 'CURRENT_VIDEO', payload: { ...first, ...item, channel, comments } })
    this.props.dispatch({ type: 'SET_VIDEOS', payload: list })
    this.props.dispatch({ type: 'IS_FETCHING', payload: false })
  }

  render() {

    return (
      <div className="App">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Body></Body>
          </Col>
          <Col span={8}>
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(App)