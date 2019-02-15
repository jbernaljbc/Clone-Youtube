import React, { Component } from 'react'
import List from './List';

/**
 * Componente contenedor de List
 *
 * @class Sidebar
 * @extends {Component}
 * @author JBernal
 */
export default class Sidebar extends Component {

  render() {
    return (
      <div style={{ paddingTop: 6, paddingBottom: 10 }}>
        <List></List>
      </div>
    )
  }
}
