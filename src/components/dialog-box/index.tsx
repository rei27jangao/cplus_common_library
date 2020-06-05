import React, { useEffect } from 'react'
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
  closeText,
  callback,
  toggleDialog,
  isOpen,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  closeButtonClassName,
  okButtonClassName,
  hideCloseButton,
  onOpened,
  onClosed,
  innerRef
}) => {
  useEffect(() => {
    isOpen && onOpened()
  }, [isOpen])

  const afterConfirmation = () => {
    toggleDialog()
    callback()
  }

  const onclose = () => {
    toggleDialog()
    onClosed()
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        toggle={toggleDialog}
        className={className}
        ref={innerRef}
      >
        <ModalHeader toggle={toggleDialog} className={headerClassName}>
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
          ) : type === 'info' ? (
            <FontAwesomeIcon icon={fa.faInfoCircle} color='#6B7376' size='lg' />
          ) : (
            <FontAwesomeIcon icon={fa.faCheck} color='#28C7B1' size='lg' />
          )}{' '}
          {headerText}
        </ModalHeader>
        <ModalBody className={bodyClassName}>{bodyText}</ModalBody>
        <ModalFooter className={footerClassName}>
          {!hideCloseButton && (
            <Button onClick={() => onclose()} color={closeButtonClassName}>
              {closeText}
            </Button>
          )}
          <Button onClick={() => afterConfirmation()} color={okButtonClassName}>
            {okText}
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}
