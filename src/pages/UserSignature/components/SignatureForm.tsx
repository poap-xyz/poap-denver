import React, {FC, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Clipboard from 'react-clipboard.js';

// Constants
import {FONT_SIZE, LINE_HEIGHT} from 'lib/styles';

// Types
import {UserPoap} from 'lib/types';

// UI Components
import Container from 'ui/styled/Container';
import Button from 'ui/components/Button';

// Assets
import copy from 'assets/images/copy.svg';

// Styled Components
const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0;
`;
const ErrorMessage = styled.div`
  max-width: 80%;
  margin: 20px auto;
  padding: 20px 40px;
  border-radius: 10px;
  background: var(--system-error);
  color: var(--system-white);
  line-height: ${LINE_HEIGHT.md};
`;
const SuccessMessage = styled.div`
  max-width: 80%;
  margin: 20px auto;
  padding: 20px 40px;
  border-radius: 10px;
  background: var(--system-success);
  color: var(--system-white);
  line-height: ${LINE_HEIGHT.md};
`;
const ResultPreview = styled.div`

  .result{
    text-align: left;
    max-width: 80%;
    margin: 20px auto;
    padding: 20px 40px;
    border-radius: 10px;
    background: var(--system-light-grey);
    overflow: hidden;
    
    pre {
      overflow: scroll;
    }
  }
  
  button {
    text-transform: uppercase;
    color: var(--main-color);
    border-color: var(--main-color);
    font-size: ${FONT_SIZE.md};
    line-height: ${LINE_HEIGHT.md};
    border-radius: 100px;
    padding: 12px 48px 10px;
    font-family: var(--main-font) !important;
    background: transparent;
    cursor: pointer;
    width: 280px;
    
    img {
      margin-right: 10px;
      width: 15px;
    }
  
    &:hover {
      background: var(--main-color-contrast);
    }
  }
  
`;

// Component type
type UserTokenProps = {
  account: string;
  tokens: UserPoap[];
  mainAction: (msg: string) => Promise<string>;
  fallbackAction: () => void;
};

const SignatureForm: FC<UserTokenProps> = ({account, tokens, mainAction, fallbackAction}) => {
  // State
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [signature, setSignature] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  // Constants
  const message = `I am the owner of account ${account.toLowerCase()} and I want to apply for a Builder discount!`;
  const result = {
    address: account.toLowerCase(),
    msg: message,
    sig: signature,
    tokens: tokens ? tokens.length : 0
  };
  const formattedResult = JSON.stringify(result, undefined, 4);

  // Methods
  const signMessage = async () => {
    setIsSigning(true);
    setError(false);
    try {
      let _signature = await mainAction(message);
      setSignature(_signature);
    } catch (e) {
      console.log('Error while signing');
      console.log(e);

      // Error 4001 - User denied message signature
      if (e && (!e.code || e.code !== 4001)) {
        setError(true);
      }
    } finally {
      setIsSigning(false);
    }
  }
  const onCopySuccess = () => setCopied(true);

  if (tokens && tokens.length === 0 && !process.env.REACT_APP_ENABLE_SIGNATURE_ALWAYS) {
    return (
      <Wrapper>
        <Button action={fallbackAction} text={'Disconnect wallet'}/>
      </Wrapper>
    )
  }

  return (
    <Container>
      <Wrapper>
        {!signature && (
          <Button action={signMessage} text={'Sign'} loading={isSigning}/>
        )}
        {error && (
          <ErrorMessage>
            There was a problem getting your signature. Please try again, and if the problem persists join our telegram
            for support.
          </ErrorMessage>
        )}

        {signature && (
          <>
            <SuccessMessage>
              Done! Now copy the full message below and paste it on the Devcon Application form.
              <br/>
              NOTE: please, do not edit the result as it may invalidate your signature!
            </SuccessMessage>
            <ResultPreview>
              <div className={'result'}>
                <pre>{formattedResult}</pre>
              </div>
              <Clipboard data-clipboard-text={formattedResult} onSuccess={onCopySuccess}>
                <img src={copy} alt={'Copy to clipboard'} />
                {copied ? 'copied!' : 'copy to clipboard'}
              </Clipboard>
            </ResultPreview>
          </>
        )}
      </Wrapper>
    </Container>
  )
};

export default SignatureForm;
