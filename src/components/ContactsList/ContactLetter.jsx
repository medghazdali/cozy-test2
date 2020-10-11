import React from 'react'
import PropTypes from 'prop-types'

const ContactLetter = props => {
  const { header, selectedAlphabet, onClickAlphabet } = props
  return (
    <div
      key={header}
      className={selectedAlphabet == header ? 'alphabet_active' : 'alphabet'}
      onClick={() => onClickAlphabet(header)}
    >
      {header}
    </div>
  )
}

ContactLetter.propTypes = {
  header: PropTypes.string.isRequired,
  onClickAlphabet: PropTypes.func,
  selectedAlphabet: PropTypes.string
}
export default ContactLetter
