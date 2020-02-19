import BlogRoll from '../components/BlogRoll'
import React from 'react'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}