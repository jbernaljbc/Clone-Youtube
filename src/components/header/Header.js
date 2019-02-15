import React, { Component } from 'react'
import Search from './search/Search'
import { Row, Col } from 'antd'

/**
 * Componente contenedor de Search
 *
 * @class Header
 * @extends {Component}
 * @author JBernal
 */
export default class Header extends Component {
  render() {
    return (
      <div style={{ paddingTop: 5 }}>
        <Row>
          <Col span={6}>
            <img src="images/logo.png" alt=""></img>
          </Col>
          <Col span={18}>
            <Search></Search>
          </Col>
        </Row>
      </div>
    )
  }
}
