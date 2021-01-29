import React, {FC, useState} from 'react';
import styled from '@emotion/styled';
import ReactModal from "react-modal";

// Types
import {UserPoap, PoapEvent} from 'lib/types';

// UI Components
import Container from 'ui/styled/Container';
import Token from 'ui/components/Token';
import InteractiveToken from 'ui/components/InteractiveToken';

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 0;
`;
const TokensWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const ModalContent = styled.div`
  position: relative;
`;
const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 22px;
  border: 0;
  background: var(--font-color-2);
  color: var(--system-white);
  font-family: var(--alt-font);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 22px;
  height: 22px;
`;
const ModalToken = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 40px;
  div {
    width: 150px;
    height: 150px;
  }
`;
const ModalTitle = styled.h1`
  font-family: var(--alt-font);
  text-align: center;
  color: var(--main-color);
`;
const ModalSubtitle = styled.p`
  font-family: var(--main-font);
  text-align: center;
  color: var(--font-color-1);
`;
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    width: '300px'
  }
};

// Component type
type UserTokenProps = {
  tokens: UserPoap[];
  events: PoapEvent[];
};


const UserTokens: FC<UserTokenProps> = ({tokens, events}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<PoapEvent | null>(null);


  const onEventClick = (event: PoapEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Wrapper>
        <TokensWrapper>
          {events.map((event) => {
            const userHasPoap = tokens.filter((token) => token.event.id === event.id).length > 0;
            return (
              <InteractiveToken
                key={event.id}
                image={event.image_url}
                name={event.name}
                description={event.description}
                withCheck={userHasPoap}
                withOpacity={!userHasPoap}
                onClick={() => onEventClick(event)}
              />
            );
          })}
        </TokensWrapper>
      </Wrapper>

      {selectedEvent && (
        <ReactModal
          isOpen={isModalOpen}
          style={customStyles}
          contentLabel={selectedEvent.name}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={closeModal}
        >
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
            <ModalToken>
              <Token name={selectedEvent.name} image={selectedEvent.image_url} />
            </ModalToken>
            <ModalTitle>{selectedEvent.name}</ModalTitle>
            <ModalSubtitle>{selectedEvent?.description}</ModalSubtitle>
          </ModalContent>
        </ReactModal>
      )}
    </Container>
  )
};

export default UserTokens;
