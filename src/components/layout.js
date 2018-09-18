import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    console.log(this.props);
      header = (
          <h1
              style={{
                  fontFamily: 'Montserrat, sans-serif',
                  marginTop: 0,
                  marginBottom: rhythm(-1),
              }}
          >
              <Link
                  style={{
                      boxShadow: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                  }}
                  to={'/'}
              >
                  Gatsby Drupal demo
              </Link>
          </h1>
      )
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
