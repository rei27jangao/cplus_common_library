import React, { useRef, useState } from 'react'
import { CountryInput, NumberInput, Dialog } from 'cplus_common_library'
import { Button, Label } from 'reactstrap'
import { containerStyles } from '../styles'

const TestComponent02 = () => {
  const [dialog, setDialog] = useState(false)
  const contryInput = useRef(null)
  const numberInput = useRef(null)
  const refDialog = useRef(null)
  return (
    <div style={containerStyles}>
      <Label>Country Code</Label>
      <CountryInput
        isRequired
        value=''
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Invalid country code format.'
        }}
        innerProps={{
          name: 'inputForm',
          title: 'Country Code',
          placeholder: 'Enter a Country code',
        }}
        inputInlineStyle={{width: '50%'}}
        className=''
        innerRef={contryInput}
        minLength={2}
        maxLength={3}
        onChange={() => console.log('country name change')}
      />
      <Label>Input Number</Label>
      <NumberInput
        isRequired
        value=''
        isDecimal={true}
        decimalPlace={3}
        min={5}
        max={10}
        texts={{
          empty: 'Please fill the required field',
          invalid: 'Format incorrect'
        }}
        innerProps={{
          name: 'number',
          title: 'Input Number',
          placeholder: 'Enter a number'
        }}
        inputInlineStyle={{ width: '50%' }}
        onChange={() => console.log('number change')}
        innerRef={numberInput}
      />
      <br />
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
