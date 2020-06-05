import React, { useRef, useState } from 'react'
import { CountryInput, NumberInput, Dialog } from 'cplus_common_library'
import { Button } from 'reactstrap'
import { containerStyles } from '../styles'

const TestComponent02 = () => {
  const [dialog, setDialog] = useState(false)
  const contryInput = useRef(null)
  const numberInput = useRef(null)
  const refDialog = useRef(null)
  return (
    <div style={containerStyles}>
      <CountryInput
        isRequired
        value=''
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Invalid country code format.'
        }}
        attrs={{
          name: 'inputForm',
          title: 'Country Code',
          placeholder: 'Enter a Country code',
          style: { width: '50%' }
        }}
        className=''
        innerRef={contryInput}
        onChange={() => console.log('country name change')}
      />
      <NumberInput
        isRequired
        value=''
        isDecimal
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Format incorrect'
        }}
        attrs={{
          name: 'number',
          title: 'Input Number',
          placeholder: 'Enter a number',
          min: 5,
          max: 10,
          style: { width: '50%' }
        }}
        onChange={() => console.log('number change')}
        innerRef={numberInput}
      />
      <Dialog
        type='confirm'
        headerText='Confirmation'
        bodyText='Are you sure to proceed?'
        okText='OK'
        closeText='CANCEL'
        isOpen={dialog}
        headerClassName='text-danger'
        okButtonClassName='primary'
        closeButtonClassName='danger'
        toggleDialog={() => setDialog(!dialog)}
        callback={() => alert('This function will work when user clicks OK')}
        onOpened={() => console.log('Dialog Open')}
        onClosed={() => console.log('Dialog Close')}
        innerRef={refDialog}
      />
      <Button onClick={() => setDialog(!dialog)}>Open Dialog</Button>
    </div>
  )
}

export default TestComponent02
