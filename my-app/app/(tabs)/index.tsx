import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/grenn-bottom.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo a Greencoin</ThemedText>
        <HelloWave />
      </ThemedView>
        <ThemedText type="subtitle">Notícias</ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Havainas entra na jogada e anuncia campanha de reciclagem!
        </ThemedText>
        <Image source={require('@/assets/images/havainas-recicla.webp')} style={styles.news}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Havainas entra na jogada e anuncia campanha de reciclagem!
        </ThemedText>
        <Image source={require('@/assets/images/havainas-recicla.webp')} style={styles.news}/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Havainas entra na jogada e anuncia campanha de reciclagem!
        </ThemedText>
        <Image source={require('@/assets/images/havainas-recicla.webp')} style={styles.news}/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#3CB371',
    borderRadius: 15,
    width:530,
    margin:15, 
    padding:15,
  },
  reactLogo: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    
  },
  news: {
    borderRadius:15,
    width:500,
    height:300,
  },
});
