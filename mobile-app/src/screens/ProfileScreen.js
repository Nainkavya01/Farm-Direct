import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function ProfileScreen() {
  return <View style={styles.screen}>
    <Text style={styles.kicker}>FARM DIRECT</Text><Text style={styles.title}>Your profile</Text>
    <View style={styles.card}><Text style={styles.heading}>Welcome to Farm Direct</Text><Text style={styles.body}>This profile screen is a UI placeholder. Add real sign-in, profile persistence and secure account management when a backend is available.</Text></View>
    <Text style={styles.note}>Authentication is not implemented. No credentials are collected or stored.</Text>
  </View>;
}
const styles=StyleSheet.create({screen:{flex:1,backgroundColor:"#f8f7f1",padding:20},kicker:{color:"#39734b",fontSize:10,fontWeight:"800",letterSpacing:1.5,marginTop:12},title:{fontSize:30,fontWeight:"900",color:"#183b2b",marginTop:8,marginBottom:20},card:{backgroundColor:"#fffefa",borderRadius:14,padding:18,borderWidth:1,borderColor:"#e5e8df"},heading:{fontWeight:"800",fontSize:16,color:"#1e2b23"},body:{fontSize:13,lineHeight:21,color:"#68736b",marginTop:8},note:{fontSize:11,lineHeight:17,color:"#7b827a",marginTop:16}});
