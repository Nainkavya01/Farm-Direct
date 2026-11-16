import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ProductCard({ product, onAdd }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{product.emoji}</Text>
      <Text style={styles.category}>{product.category.toUpperCase()}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.farmer}>{product.farmer} · demo listing</Text>
      <View style={styles.row}>
        <Text style={styles.price}>₹{product.price} <Text style={styles.unit}>/ {product.unit}</Text></Text>
        <Pressable accessibilityRole="button" onPress={() => onAdd(product)} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{backgroundColor:"#fffefa",borderRadius:16,padding:16,marginBottom:12,borderWidth:1,borderColor:"#e5e8df"},
  emoji:{fontSize:34,marginBottom:8},category:{fontSize:10,fontWeight:"800",letterSpacing:1,color:"#39734b"},
  name:{fontSize:16,fontWeight:"800",color:"#1e2b23",marginTop:4},farmer:{fontSize:11,color:"#68736b",marginTop:5},
  row:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:14},
  price:{fontWeight:"800",fontSize:16,color:"#204b35"},unit:{fontSize:11,fontWeight:"400",color:"#68736b"},
  button:{backgroundColor:"#204b35",paddingVertical:9,paddingHorizontal:16,borderRadius:8},
  buttonText:{color:"white",fontWeight:"700",fontSize:12}
});
