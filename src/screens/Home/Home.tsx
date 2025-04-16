import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyle';
import { Logo } from '../../components/Logo/Logo'
import { Button } from '../../components/Button/Button'

export function Home() {
  return (
    <>
    <Logo />
    <Button />
    </>
  );
}