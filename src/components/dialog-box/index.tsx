import React from 'react'
import * as types from './types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fa from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export const Dialog: React.FC<types.DialogType> = ({
  type,
  headerText,
  bodyText,
  okText,
  cancelText,
  callback,
  toggleDialog,
  isOpen
}) => {
  const afterConfirmation = () => {
    toggleDialog()
    callback()
  }

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggle={toggleDialog}>
        <ModalHeader toggle={toggleDialog}>
          {type === 'success' ? (
            <FontAwesomeIcon icon={fa.faCheck} color='#28C7B1' size='lg' />
          ) : type === 'warning' ? (
            <FontAwesomeIcon
              icon={fa.faExclamationTriangle}
              color='#FECC68'
              size='lg'
            />
          ) : type === 'error' ? (
            <FontAwesomeIcon
              icon={fa.faExclamationCircle}
              color='#E54E66'
              size='lg'
            />
          ) : type === 'confirm' ? (
            <FontAwesomeIcon icon={fa.faTasks} color='#6B7376' size='lg' />
          ) : (
            <FontAwesomeIcon icon={fa.faCheck} color='#28C7B1' size='lg' />
          )}{' '}
          {headerText}
        </ModalHeader>
        <ModalBody>{bodyText}</ModalBody>
        <ModalFooter>
          {type === 'warning' ||
            (type === 'confirm' && (
              <Button onClick={toggleDialog} color='light'>
                {cancelText}
              </Button>
            ))}
          <Button
            onClick={() => afterConfirmation()}
            color={
              type === 'warning' || type === 'confirm' ? 'danger' : 'light'
            }
          >
            {okText}
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}
