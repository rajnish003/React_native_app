import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

type SwitchControlProps = {
  value?: boolean; 
  initialValue?: boolean;
  onValueChange?: (value: boolean) => void;
};

const SwitchControl: React.FC<SwitchControlProps> = ({
    value,
  initialValue = false,
  onValueChange,
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#d3d3d3', true: '#03A9F4' }}
        thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
        ios_backgroundColor="#d3d3d3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchControl;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 16,
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // marginVertical: 6,
    // shadowColor: '#000',
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
