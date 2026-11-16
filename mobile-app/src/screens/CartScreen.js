import React from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";

export default function CartScreen({ cart, updateQuantity }) {
  const entries = Object.values(cart);
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>YOUR SELECTION</Text><Text style={styles.title}>Your basket</Text>
      {!entries.length ? <Text style={styles.empty}>Your basket is empty. Visit the farmstand to add produce.</Text> : entries.map(item =>
        <View key={item.id} style={styles.item}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <View style={styles.details}><Text style={styles.name}>{item.name}</Text><Text style={styles.meta}>₹{item.price} · Qty {item.quantity}</Text>
            <View style={styles.controls}><Pressable onPress={() => updateQuantity(item, -1)} style={styles.qty}><Text>−</Text></Pressable><Text>{item.quantity}</Text><Pressable onPress={() => updateQuantity(item, 1)} style={styles.qty}><Text>+</Text></Pressable></View>
          </View>
          <Text style={styles.price}>₹{item.price * item.quantity}</Text>
        </View>
      )}
      <View style={styles.total}><Text style={styles.totalLabel}>Demo subtotal</Text><Text style={styles.totalPrice}>₹{total}</Text></View>
      <Text style={styles.note}>Checkout and payments are not connected in this learning prototype.</Text>
    </ScrollView>
  );
}
const styles=StyleSheet.create({
  screen:{flex:1,backgroundColor:"#f8f7f1"},content:{padding:20},kicker:{color:"#39734b",fontSize:10,fontWeight:"800",letterSpacing:1.5,marginTop:12},
  title:{fontSize:30,fontWeight:"900",color:"#183b2b",marginTop:8,marginBottom:20},empty:{color:"#68736b",lineHeight:22,paddingVertical:20},
  item:{backgroundColor:"#fffefa",borderRadius:14,padding:14,marginBottom:10,flexDirection:"row",alignItems:"center",gap:10},
  emoji:{fontSize:28},details:{flex:1},name:{fontWeight:"800",color:"#1e2b23"},meta:{fontSize:11,color:"#68736b",marginTop:3},
  controls:{flexDirection:"row",alignItems:"center",gap:12,marginTop:9},qty:{width:26,height:26,borderRadius:7,backgroundColor:"#e8f0e5",alignItems:"center",justifyContent:"center"},
  price:{fontWeight:"800",color:"#204b35"},total:{borderTopWidth:1,borderColor:"#e5e8df",paddingTop:18,marginTop:12,flexDirection:"row",justifyContent:"space-between"},
  totalLabel:{fontWeight:"700",color:"#68736b"},totalPrice:{fontWeight:"900",fontSize:20,color:"#183b2b"},note:{fontSize:11,color:"#7b827a",marginTop:18,lineHeight:17}
});
