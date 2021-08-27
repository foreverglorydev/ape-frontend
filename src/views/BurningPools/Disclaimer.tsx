import React, { useState } from 'react'
import { Text, Button, Flex, InjectedModalProps, Checkbox, Heading, Modal } from '@apeswapfinance/uikit'
import styled from 'styled-components'

interface RiskDisclaimerProps extends InjectedModalProps {
  onSuccess: () => void
}

const GradientModalHeader = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: 24px;
  padding-top: 24px;
`

const RiskDisclaimer: React.FC<RiskDisclaimerProps> = ({ onSuccess, onDismiss }) => {
  const [acknowledgeRisk, setAcknowledgeRisk] = useState(false)

  const handleSetAcknowledgeRisk = () => {
    setAcknowledgeRisk(!acknowledgeRisk)
  }

  const handleConfirm = () => {
    onSuccess()
    onDismiss()
  }

  const StyledModal = styled.div`
    min-width: 325px;
    max-width: 450px;
  `

  const StyledText = styled(Text)`
    font-family: Poppins;
    font-weight: 700;
  `

  const StyledButton = styled(Button)`
    background: #ffb300;
  `

  const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <Modal title="Welcome To Burning Pools!" hideCloseButton bodyPadding="20px">
      <StyledModal>
        <div>
          <Heading size="md" mb="24px" paddingTop="25px" textAlign="center">
            Burning Pools Disclaimer
          </Heading>
          <StyledText as="p" color="textSubtle" mb="24px" fontFamily="poppins">
            Burning pools will lock and burn staked tokens in return for reward tokens. There is no guarantee to make
            back your initial investment.
          </StyledText>
          <label htmlFor="checkbox" style={{ display: 'block', cursor: 'pointer', marginBottom: '24px' }}>
            <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
            <Flex alignItems="center">
              <div id="checkbox" style={{ flex: 'none' }}>
                <Checkbox id="checkbox" scale="sm" checked={acknowledgeRisk} onChange={handleSetAcknowledgeRisk} />
              </div>
              <Text ml="8px">
                I understand that burning pools will burn my staked tokens in return for reward tokens
              </Text>
            </Flex>
          </label>
          <ButtonWrapper>
            <StyledButton onClick={handleConfirm} disabled={!acknowledgeRisk}>
              Continue
            </StyledButton>
          </ButtonWrapper>
        </div>
      </StyledModal>
    </Modal>
  )
}

export default RiskDisclaimer
