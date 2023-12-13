import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { UserCard } from './UserCard';
import { Header } from './Header';

export interface IAppLayoutProps {
  header: React.ReactNode;
  navbar: React.ReactNode;
}

export function AppLayout({ header, navbar, main }: IAppLayoutProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: '64' }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: opened, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>1st section</AppShell.Section>
        <AppShell.Section>2st section</AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
