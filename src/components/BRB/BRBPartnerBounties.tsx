// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, Image, ItemH, ItemV, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import Arrow from '@site/static/assets/website/brb/schedules/arrow.svg';

// Internal Configs
import { brbPartnersBountyList } from '@site/src/config/BRBPartnersBountyList';
import { device } from '@site/src/config/globals';

export const PartnerBounties = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.tablet);

  const openLink = (link: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      return;
    }
  };

  return (
    <PartnerBountiesContainer ref={sectionRef}>
      <ItemH gap="24px" margin="0px 0px 60px">
        <Header>Partners {isMobile && <br />} Bounties</Header>
        <Button
          background="#e64de9"
          display="flex"
          maxWidth="187px"
          alignItems="center"
          borderRadius="8px"
          padding="8px 16px 6px 16px"
          height="33px"
          margin='0 0 0 0'
          fontFamily="Glancyr, sans-serif"
          style={{ cursor: 'pointer' }}
          onClick={() =>
            openLink(
              "https://zv9atndluia.typeform.com/brb-interested"
            )
          }
        >
          <Span
            fontSize="16px"
            fontWeight="400"
            letterSpacing="0.3"
            margin="0 5px 0 0"
          >
            Register to participate
          </Span>
          <ArrowSmall />
        </Button>
      </ItemH>
      
      {brbPartnersBountyList?.map((item, i) => (
        <PartnerLine
          key={i}
          onClick={() => openLink(item?.link)}
          disabled={item?.link ? false : true}
        >
          <PartnersLogo
            src={require(`@site/static/assets/website/brb/partners/${item.srcref}.webp`).default}
            srcSet={`${require(`@site/static/assets/website/brb/partners/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/partners/${item.srcref}@3x.webp`).default} 3x`}
            alt={item.alt}
            style={{ scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}` }}
          />

          <BountyDescription>
            {item.text}
          </BountyDescription>

          <BountyItem>
            <PriceSpan
              fontSize="32px"
              fontWeight="400"
            >
              ${item.price.toLocaleString()}
            </PriceSpan>

            <BountyButton className="buttonId">
              <ViewBountyText>View Bounty</ViewBountyText>
              <ArrowSmall />
            </BountyButton>
          </BountyItem>
        </PartnerLine>
      ))}
    </PartnerBountiesContainer>
  );
};

const PartnerBountiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px 50px 0px;
  @media (max-width: 768px) {
    margin: 20px 0px 70px 0px;
  }
  @media (min-width: 1400px) {
    margin: 110px 0px 160px 0px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: "Glancyr", sans-serif;
  color: #fff;
  margin:0px;
`;

const PartnerLine = styled.div`
  background: #1b1b25;
  width: 1280px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid transparent;
  margin: 8px 0px;
  position: relative;

  @media (max-width: 1281px) {
    width: 90%;
  }

  &:hover {
    border: ${(props) => (props.disabled ? '1px solid transparent' : '1px solid #E64DE9')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    & .buttonId {
      background: ${(props) => (!props.disabled ? '#E64DE9 !important' : 'transparent')};
    }
  }

  @media ${device.tablet} {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PartnersLogo = styled(Image)`
  width: auto;
  height: auto;
  max-width: 140px;
  max-height: 50px;
  opacity: 0.75;
`;

const ViewBountyText = styled(Span)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  color: var(--ifm-color-primary-inverse);

  @media ${device.mobileS} {
    flex: 1;
  }
`;

const BountyButton = styled.div`
  min-width: 114px;
  max-width: ${(props) => props.maxWidth || '114px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0px 0px;
  border: 1px solid ${(props) => props.borderColor || '#e64de9'};
  background: ${(props) => props.background || 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`;

const ArrowSmall = styled(Arrow)`
  width: 8px;
  position: relative;
  top: 0.1em;
`;

const BountyDescription = styled(Span)`
  font-weight: 400;
  font-size: 18px;
  color: var(--ifm-color-primary-inverse);

  margin: 10px 20px;
  left: 200px;
  right: 0;
  width: 100%;

  @media (max-width: 1291px) {
    max-width: 400px;
  }

  @media (max-width: 1000px) {
    max-width: 250px;
  }
  @media ${device.tablet} {
    margin: 16px 0px;
    position: relative;
    width: 100%;
    left: 0px;
  }
`;

const PriceSpan = styled(Span)`
  color: var(--ifm-color-primary-inverse);
  font-weight: 400;
`;

const BountyItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  gap: 38px;
  @media ${device.tablet} {
    margin-left: 0px;
    width: 100%;
    justify-content: space-between;
  }
`;
