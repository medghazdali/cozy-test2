import React from 'react'
import PropTypes from 'prop-types'
import ContactLetter from './ContactLetter'

const ContactHeaderRow = props => {
  const { categorizedContacts, selectedAlphabet, onClickAlphabet } = props
  return (
    <div className="divider">
      {Object.entries(categorizedContacts).map(([header]) => (
        <ContactLetter
          key={header}
          header={header}
          selectedAlphabet={selectedAlphabet}
          onClickAlphabet={onClickAlphabet}
        />
      ))}
    </div>
  )
}

ContactHeaderRow.propTypes = {
  categorizedContacts: PropTypes.object.isRequired,
  onClickAlphabet: PropTypes.func.isRequired,
  selectedAlphabet: PropTypes.string
}
export default ContactHeaderRow
