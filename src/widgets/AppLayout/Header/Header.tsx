import { Flex, Title } from '@mantine/core';
import React from 'react';
import { UserCard } from '../UserCard';

export function Header() {
  return (
    <Flex h="100%" align="center" justify="space-between">
      <Title order={3}>Header</Title>
      <UserCard />
    </Flex>
  );
}
