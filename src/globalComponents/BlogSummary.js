import React from 'react'
import PropTypes from 'prop-types';
const BlogSummary = (props) => {
  return (
    <div className={`w-60 lg:w-64 pb-8 ${props.className}`}>
      <img src={props.avtSrc} alt="This is the avatar of a blog" className="w-56 lg:w-64 my-2" />
      <p className="text-white text-b11"
      >{props.updateDate}</p>
      <p className="text-orange text-b9"
      >{props.title}</p>
      <p className="text-b13 text-grey400"
      >{props.summaryContent}</p>
    </div>
  )
}

BlogSummary.propTypes = {
  avtSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  updateDate: PropTypes.string.isRequired,
  summaryContent: PropTypes.string.isRequired
}

BlogSummary.defaultProps = {
  avtSrc: '',
  title: 'Default blog title',
  updateDate: '01/01/1900',
  summaryContent: 'This is the summary of a blog',
}

export default BlogSummary
