import React, { useMemo, useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable, StyleSheet } from "react-native";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

const CATEGORIES = ["All", "Vegetables", "Fruits", "Grains"];

export default function HomeScreen({ addToCart }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => PRODUCTS.filter(p =>
    (category === "All" || p.category === category) &&
    `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>GOOD FOOD. FAIRER FARMING.</Text>
      <Text style={styles.title}>Fresh from farms.{"\n"}Closer to home.</Text>
      <Text style={styles.subtitle}>Discover seasonal produce and the people who grow it.</Text>
      <TextInput value={query} onChangeText={setQuery} placeholder="Search produce..." style={styles.search} accessibilityLabel="Search produce"/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        {CATEGORIES.map(c => <Pressable key={c} onPress={() => setCategory(c)} style={[styles.chip, category===c && styles.activeChip]}><Text style={[styles.chipText,category===c && styles.activeText]}>{c}</Text></Pressable>)}
      </ScrollView>
      <View style={styles.sectionRow}><Text style={styles.sectionTitle}>The farmstand</Text><Text style={styles.count}>{visible.length} items</Text></View>
      {visible.map(product => <ProductCard key={product.id} product={product} onAdd={addToCart}/>)}
      {!visible.length && <Text style={styles.empty}>No matching produce. Try another search.</Text>}
      <Text style={styles.disclaimer}>Portfolio prototype · All listings and prices are illustrative.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen:{flex:1,backgroundColor:"#f8f7f1"},content:{padding:20,paddingBottom:36},
  kicker:{color:"#39734b",fontSize:10,fontWeight:"800",letterSpacing:1.5,marginTop:12},
  title:{fontSize:34,lineHeight:40,fontWeight:"900",color:"#183b2b",marginTop:10},
  subtitle:{fontSize:14,lineHeight:21,color:"#68736b",marginTop:10,marginBottom:18},
  search:{backgroundColor:"white",borderColor:"#e5e8df",borderWidth:1,borderRadius:10,padding:13,fontSize:14},
  filters:{marginVertical:16,flexGrow:0},chip:{paddingHorizontal:15,paddingVertical:9,borderRadius:30,borderWidth:1,borderColor:"#dfe4da",marginRight:8},
  activeChip:{backgroundColor:"#204b35",borderColor:"#204b35"},chipText:{fontSize:12,color:"#526056",fontWeight:"600"},activeText:{color:"white"},
  sectionRow:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:12},
  sectionTitle:{fontSize:21,fontWeight:"800",color:"#1e2b23"},count:{fontSize:11,color:"#68736b"},
  empty:{textAlign:"center",padding:25,color:"#68736b"},disclaimer:{fontSize:10,color:"#7b827a",marginTop:10,lineHeight:16}
});
