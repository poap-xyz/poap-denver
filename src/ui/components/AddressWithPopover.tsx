import React, {FC, useState} from 'react';
import styled from '@emotion/styled';
import Blockies from 'react-blockies';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Helpers
import {links, reduceAddress} from 'lib/helpers';

// Constants
import {BREAKPOINTS, FONT_SIZE} from 'lib/styles';

// Components
import Button from 'ui/components/Button';

// Types
import {UserPoap} from 'lib/types';

type AddressWithPopoverProps = {
  account: string;
  tokens: UserPoap[];
  disconnectAction: () => void;
};

type ScrollerProps = {
  grid: boolean;
};

// Styled Components
const Wrapper = styled.div`
  cursor: pointer;
  border: 1px solid var(--system-light-grey);
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;

  .blockie {
    margin: 2px 0 0 10px;

    canvas {
      border-radius: 24px;
    }
  }

  .address {
    color: var(--font-color-1);
    font-size: ${FONT_SIZE.md};
    padding: 2px 10px 0 5px;

    .short-address {
      display: none;
    }

    @media (max-width: ${BREAKPOINTS.sm}) {
      .full-address {
        display: none;
      }
      .short-address {
        display: flex;
      }
    }
  }

  .poaps {
    background: var(--system-light-grey);
    border-radius: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: row;
    &.long {
      width: 90px;
    }
    &.short1 {
      width: 45px;
    }
    &.short2 {
      width: 55px;
    }
    &.short3 {
      width: 65px;
    }

    @media (max-width: ${BREAKPOINTS.xs}) {
      display: none;
    }

    .badge {
      background: white;
      height: 26px;
      width: 26px;
      padding: 1px;
      border-radius: 20px;
      position: absolute;

      &:first-of-type {
        left: 10px;
      }

      &:nth-of-type(2) {
        left: 25px;
      }

      &:nth-of-type(3) {
        left: 40px;
      }

      img {
        width: 100%;
        vertical-align: top;
        border-radius: 50%;
      }
    }

    .extra-badges {
      position: absolute;
      right: 10px;
      top: 2px;
      color: var(--font-color-1);
    }
  }
`;
const CustomTippy = styled(Tippy)`
  background: var(--system-white);
  box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  border-radius: 10px;
  .tippy-content {
    background: var(--system-white);
    pointer-events: auto !important;
    border-radius: 10px;
  }
  .tippy-arrow {
    color: var(--system-white);
    box-shadow: -2px -2px 5px rgba(0,0,0,.06);
  }
`;
const TippyHeader = styled.div`
  color: var(--main-color);
  font-family: var(--alt-font);
  font-size: ${FONT_SIZE.md};
  font-weight: bold;
  padding: 10px 0;
`;
const TippyFooter = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;
const PoapDisplay = styled.div<ScrollerProps>`
  .scroller {
    max-height: 300px;
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
    overflow: auto;
    display: grid;
    grid-template-columns: ${({ grid }) => (grid ? '1fr 1fr 1fr' : '1fr')};
    grid-column-gap: 10px;
    overscroll-behavior: none;
    .badge {
      width: 75px;
      height: 75px;
      margin: 0 auto 10px;
      border-radius: 6px;
      box-shadow: 0px 4px 4px rgba(187, 196, 239, 0.34);
      padding: 10px;
      img {
        width: 100%;
        border-radius: 100%;
      }
    }
    .empty {
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: var(--secondary-color);
      font-family: var(--alt-font);
      padding: 10px 0;
    }
  }
`;


const AddressWithPopover: FC<AddressWithPopoverProps> = ({account, tokens, disconnectAction}) => {
  const [visible, setVisible] = useState(true);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);


  let content = (
    <PoapDisplay grid={!!(tokens && tokens.length > 0)}>
      <TippyHeader>
        My POAPs
      </TippyHeader>
      <div className={'scroller'}>
        {tokens && (
          <>
            {tokens.map((poap: UserPoap) => (
              <a
                href={links.poap.token(poap.tokenId)}
                target={'_blank'}
                key={poap.tokenId}
                rel="noopener noreferrer"
              >
                <div className={'badge'}>
                  <img src={poap.event.image_url} alt={poap.event.name} />
                </div>
              </a>
            ))}
            {tokens.length === 0 && <div className={'empty'}>No POAPs found</div>}
          </>
        )}
      </div>
      <TippyFooter>
        <Button text={'disconnect wallet'} action={disconnectAction} />
      </TippyFooter>
    </PoapDisplay>
  );

  return (
    <CustomTippy content={content} visible={visible} onClickOutside={hide}>
      <Wrapper onClick={visible ? hide : show}>
        <div className={'blockie'}>
          <Blockies seed={account} size={6} />
        </div>
        <div className={'address'}>
          <span className={'full-address'}>{account}</span>
          <span className={'short-address'}>{reduceAddress(account)}</span>
        </div>
        {tokens && tokens.length > 0 && (
          <div className={`poaps ${tokens.length <= 3 ? `short${tokens.length}` : 'long'}`}>
            {tokens.slice(0, 3).map((token) => {
              return (
                <div className={'badge'} key={token.tokenId}>
                  <img src={token.event.image_url} alt={token.event.name} />
                </div>
              );
            })}
            {tokens.length > 3 && <div className={'extra-badges'}>+ {tokens.slice(3).length}</div>}
          </div>
        )}
      </Wrapper>
    </CustomTippy>
  )
};

export default AddressWithPopover;
