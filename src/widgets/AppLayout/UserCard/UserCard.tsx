import { Avatar, Flex, Group, Text, UnstyledButton } from '@mantine/core';
import React from 'react';

export function UserCard() {
  return (
    <UnstyledButton>
      <Flex align="center" gap="sm">
        <Flex direction="column" align="flex-end">
          <Text size="sm" c="indigo" fw="bolder">
            John Doe
          </Text>
          <Text size="xs" c="gray.6">
            Developer
          </Text>
        </Flex>
        <Avatar size="32px" src="https://i.pravatar.cc/150" alt="avatar" />
      </Flex>
    </UnstyledButton>
  );
}
