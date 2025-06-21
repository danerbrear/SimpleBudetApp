import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NavigationProvider, ThemeProvider, ThemeContext } from './app/providers';
import { GoalsView } from './features/goals/view/GoalsView';

function App(): React.JSX.Element {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <NavigationContainer theme={theme}>
        <NavigationProvider>
          <GoalsView />
        </NavigationProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
