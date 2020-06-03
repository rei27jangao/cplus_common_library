import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CountryInput, NumberInput, Dialog } from 'cplus_common_library'
import { Button } from 'reactstrap';
import { containerStyles } from '../styles'

const TestComponent02: React.FC = () => {
  const textInput = useRef(null);
  const afterConfirmation = () => alert("This function will work when user clicks OK in the Dialog");
  const [modal, setModal] = useState(false);
  return (
    <div style={containerStyles}>
      <CountryInput
        isRequired={true}
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
        className='form-control'
        innerRef={textInput}
      />
      <NumberInput
        isRequired={true}
        isDecimal={true}
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
      />
      <Dialog 
        innerRef={textInput}
        type="confirm"
        headerText="Confirmation"
        bodyText="Are you sure to proceed?"
        okText="OK"
        cancelText="CANCEL"
        callback={() => afterConfirmation()}
        isOpen={modal}
        toggleDialog={() => setModal(!modal)}
      />
      <Button onClick={() => setModal(!modal)}>Open Dialog</Button>
    </div>
  )
}

export default TestComponent02
