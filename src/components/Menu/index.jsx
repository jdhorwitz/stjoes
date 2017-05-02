import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Segment, Header } from 'semantic-ui-react'
import Speakers from '../Speakers';

class HeaderMenu extends Component {
  state = { activeItem: 'home' }

  directions = 'https://www.google.com/maps/place/5401+McAuley+Dr,+Ypsilanti,+MI+48197/@42.2644171,-83.6501648,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca917ee15ca23:0x3c6b0ea1bec262b7!8m2!3d42.2644132!4d-83.6479761'

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted pointing fluid widths={4}>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/about' name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/speakers' name='speakers' acticdve={activeItem === 'speakers'} onClick={this.handleItemClick} />
          <Menu.Item name='directions' active={activeItem === 'directions'} onClick="location.href='https://www.google.com/maps/place/5401+McAuley+Dr,+Ypsilanti,+MI+48197/@42.2644171,-83.6501648,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca917ee15ca23:0x3c6b0ea1bec262b7!8m2!3d42.2644132!4d-83.6479761'" />
        </Menu>
      </div>
    )
  }
}

export default HeaderMenu;