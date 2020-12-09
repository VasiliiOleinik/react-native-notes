import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title } from 'native-base';


export const Navbar = ({ title }) => {
  return (
    <Header>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};
