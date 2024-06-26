import Navigationbar from '../../components/Navigationbar/Navigationbar';
import Banner from '../../components/Banner';
import * as colors from '../../theme/colors';
import { H1, H3, B1, H2 } from '../../components/text/Text';
import Button from "../../components/button/Button";
import { StyledCard, StyledFeatureCard } from './Home.styles';
import { Block, Col, Container, Row } from '../../components/blocks/Blocks';
import React from 'react';

export default function home() {
  return (
    <div style={{ backgroundColor: colors.white }}>
      <Navigationbar />
      <Banner />
      {/* benefits section */}
      <Row height='72px' />
      <Container className=''>
        <Row className='d-row justify-content-between'>
          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>Built on Arbitrum</H3>
            <Block className='mt-2'><H1 color={colors.accentDark} >Secure & Scalable</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              Arbitrum is secured by Ethereum, and saves gas fees by moving computations and data storage off of the main chain.
            </B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Learn More' />
          </StyledCard>

          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>No-code Design</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Highly Accessible</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              Made for anyone to use. Create and manage projects on Ethereum and Arbitrum One without any coding.
            </B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Learn More' />
          </StyledCard>

          <StyledCard className='p-1'>
            <H3 color={colors.secondaryMideum}>DAO Controlled</H3>
            <Block className='mt-2'><H1 color={colors.accentDark}>Community Owned</H1></Block>
            <Block className='mt-4'><B1 className='mb-5'>
              TRAX token holders can vote on future products, features, and staking & farming rewards for the platform..</B1></Block>
            <Button size={'sm'} primary className='mt-4' label='Learn More' />
          </StyledCard>
        </Row>
      </Container>
    </div>
  )
}
