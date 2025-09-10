import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
<SafeAreaProvider>
     <AppNavigator />
</SafeAreaProvider>
  
 );
};

export default App;