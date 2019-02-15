import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'

/**
 * Componente que genera línea divisora
 *
 * @class DetailDivider
 * @extends {Component}
 * @author JBernal
 */
export default class DetailDivider extends Component {
  render() {
    return (
      <React.Fragment>
        <Row><Col><Divider /></Col></Row>
      </React.Fragment>
    )
  }
}
