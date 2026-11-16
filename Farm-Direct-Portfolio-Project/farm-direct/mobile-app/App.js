import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  const [cart, setCart] = useState({});
  const addToCart = product => setCart(current => {
    const old = current[product.id];
    return {...current, [product.id]: {...product, quantity: (old?.quantity || 0) + 1}};
  });
  const updateQuantity = (product, delta) => setCart(current => {
    const next = {...current};
    const quantity = (next[product.id]?.quantity || 0) + delta;
    if (quantity <= 0) delete next[product.id];
    else next[product.id] = {...next[product.id], quantity};
    return next;
  });
  const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  return <>
    <StatusBar style="dark"/>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:"#204b35",tabBarInactiveTintColor:"#879087",tabBarStyle:{backgroundColor:"#fffefa",borderTopColor:"#e5e8df",height:62,paddingBottom:8,paddingTop:7}}}>
        <Tab.Screen name="Home">{props => <HomeScreen {...props} addToCart={addToCart}/>}</Tab.Screen>
        <Tab.Screen name={`Basket${count ? ` (${count})` : ""}`}>{props => <CartScreen {...props} cart={cart} updateQuantity={updateQuantity}/>}</Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  </>;
}
