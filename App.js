import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from './style/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

        <View style={[
          styles.mainheader,
          {backgroundColor: '#27005D'}
        ]}>

        <View style={styles.contentmargin}>
        <Image 
        source={require('./src/image/profile.png')} 
        style={{width: 100, height: 100}}
        />
          <Text style={[styles.name,
            {fontSize: 30, fontWeight: "bold"}
          ]}>Earl Mike H. Sarabia</Text>
          <Text style={[styles.name,
            {fontSize: 20, color: '#FFC436'}
          ]}>Information Technology 3</Text>
        </View>

      </View>

        <View style={styles.container2}>
          <Text style={[
          {color: 'black' ,fontSize: 25, marginRight: 230}
          ]}>My Subjects</Text>

          <View style={styles.subheader}>
            <View style={styles.contentflex}>
            
              <Text style={styles.subtext}>ELEC 2</Text>
                <Text style={styles.subtxt2}>Web Development/ Web Enterprise{'\n'}Units: 3</Text>
                
            </View>
          </View>

          <View style={styles.subheader}>
              <View style={styles.contentflex}>
                
              <Text style={styles.subtext}>ELEC 3</Text>
                <Text style={styles.subtxt2}>Mobile Application using Google Platform{'\n'}Units: 3</Text>
                
            </View>
          </View>

          <View style={styles.subheader}>
            <View style={styles.contentflex}>
              
                <Text style={styles.subtext}>IT 311</Text>
                  <Text style={styles.subtxt2}>Software Engineering{'\n'}Units: 3</Text>
                  
              </View>
          </View>

          <View style={styles.subheader}>
            <View style={styles.contentflex}>
              
                <Text style={styles.subtext}>IT 312</Text>
                  <Text style={styles.subtxt2}>Information Assurance and Security 2{'\n'}Units: 3</Text>
                  
              </View>
          </View>

          <View style={styles.subheader}>
              <View style={styles.contentflex}>
                
              <Text style={styles.subtext}>RESEARCH</Text>
                <Text style={styles.subtxt2}>Methods of Research{'\n'}Units: 3</Text>
                
            </View>
          </View>
          <Text style={[
            {color: '#525FE1' ,
            fontSize: 15,
            marginTop: 15,
            marginLeft: 205}
            ]}>Click here to see more...</Text>
      </View>
    </View>

    
  );
}
