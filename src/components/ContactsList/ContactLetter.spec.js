import React from 'react';
import AppLike from '../../tests/Applike';
import ContactLetter from './ContactLetter';
import { mount } from 'enzyme'

describe('ContactLetter', () => {
    it('should show letter', () => {
      const contactLetterInstance = (
        <AppLike>
          <ContactLetter header={"a"} />
        </AppLike>
      )

      const contactLetter = mount(contactLetterInstance)
      const letter = contactLetter.find('div')
      expect(letter).toBeDefined()
      expect(letter.text()).toEqual("a")
    })
});