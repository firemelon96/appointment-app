import { Copyright } from './copyright';
import { Header } from './header';
import { Navigation } from './navigation';
import { Toggle } from './toggle';
import { Wrapper } from './wrapper';

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Header />
      <Navigation />
      <Copyright />
    </Wrapper>
  );
};
