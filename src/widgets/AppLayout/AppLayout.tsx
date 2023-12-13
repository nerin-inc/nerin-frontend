import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { AppShell, Burger, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { UserCard } from './UserCard';
import { Header } from './Header';
import { Navbar } from './Navbar';

export interface IAppLayoutProps {
  header: React.ReactNode;
  navbar: React.ReactNode;
}

export function AppLayout() {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      layout="alt"
      header={{ height: '64', collapsed: !pinned }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: opened, mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
