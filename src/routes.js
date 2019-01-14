import { createAppContainer, createStackNavigator } from 'react-navigation';

import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

const Routes = createAppContainer(
  createStackNavigator({
    Repositories,
    Issues,
  }),
);

export default Routes;
