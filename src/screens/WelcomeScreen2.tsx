import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image } from 'react-native';
// import Setup from '../navigation/AppNavigator'

const WelcomeScreen2 = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.skipText}>Skip &gt; </Text>
      </TouchableOpacity>

      {/* Titles  */}
      <View style={styles.titleWrapper}>
      <Text style={styles.title}>Welcome</Text>
      
      <Text style={styles.title}>
        To <Text style={styles.subtitle}>Homeasy</Text>
      </Text>
    </View>

      <Text style={styles.description}>
        Control your home with Alexa and Google Assistant
      </Text>

       <Image
        source={require('../../assets/images/welcome2image.png')}
        style={styles.image}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Welcome3')}
      >
        <Text style={styles.nextText}>Next &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 50,
    backgroundColor: '#fff',
  },
  skipButton: {
    alignSelf: 'flex-end',
    padding: 10,
     marginTop:20,
  },
  skipText: {
    color: '#757575',
    fontSize: 16,

  },
  titleWrapper: {
  marginTop: 20,       // less space above titles
  marginBottom: 10,    // tighten space before description
  alignItems: "center",
},
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 40,
    color: '#53CDF9',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    color: '#757575',
    textAlign: 'center',
     marginBottom: 15,    // tighter spacing before image
  paddingHorizontal: 30,
  fontWeight:'400',
  },
  //
 image: {
    marginTop: 70,
    width: 334,
    height: 334,
    resizeMode: 'contain', // or 'cover', 'stretch', etc.
  },
  nextButton: {
    backgroundColor: '#53CDF9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    width: 350,
    height: 47,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop:90,
    
   
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center",
  },
});

export default WelcomeScreen2;
