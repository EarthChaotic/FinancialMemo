import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from './../components/styles';

const Welcome = ({navigation, route}) => {
  const {name , email} = route.params;
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/favicon.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome to </PageTitle>
          <SubTitle welcome={true}>{name||'ABCD'}</SubTitle>
          <SubTitle welcome={true}>{email|| 'ABCD@gmail.com'}</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/favicon.png')} />
            <Line />
            <StyledButton onPress={() => {navigation.navigate('Login')}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;