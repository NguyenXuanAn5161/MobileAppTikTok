import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import { Video } from 'expo-av';
import { getMusicNoteAnimation } from './Utils';
import { windowHeight, windowWidth } from '../video/constain';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();


export default function VideoItem({data, isActive}) {
    const {uri, caption, channelName, musicName, avatarUri, likes, comments} = data;

    const discAnimatedValue = useRef(new Animated.Value(0)).current;
    const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
    const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

    const discAnimation = {
      transform: [{
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']      
        }),
      },],
    };

    const musicNoteAnimation1 = getMusicNoteAnimation(musicNoteAnimatedValue1, false);

    const musicNoteAnimation2 = getMusicNoteAnimation(musicNoteAnimatedValue2, true);

    const discAnimationLoopRef = useRef();
    const musicAnimationLoopRef = useRef();

    const triggerAnimation = useCallback(() => {
      discAnimationLoopRef.current = Animated.loop(
        Animated.timing(discAnimatedValue, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      )
      discAnimationLoopRef.current.start();
      musicAnimationLoopRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(musicNoteAnimatedValue1, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(musicNoteAnimatedValue2, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          })
        ])
      )
      musicAnimationLoopRef.current.start();
    }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2]);

    useEffect(() => {
      if(isActive){
        triggerAnimation();
      }else{
        discAnimationLoopRef.current?.stop();
        musicAnimationLoopRef.current?.stop();
        discAnimatedValue.setValue(0);
        musicNoteAnimatedValue1.setValue(0);
        musicNoteAnimatedValue2.setValue(0);
      }
    }, [isActive, triggerAnimation , discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2]);

    const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.container, {height: 210}]}>
      <Video 
        source={{uri}} 
        style={styles.video} 
        resizeMode='cover' 
        isLooping
        useNativeControls
        pause={!isActive}
      />

      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <View style={styles.musicNameContainer}>
          <Image source={require('../../assets/images/heart.png')} 
                style={[styles.musicNameIcon]}
                />
                <Text style={styles.musicName}>{likes}</Text>
          </View>
        </View>
        
      </View>

      
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '35%',

  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }, 
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection:{
    flex: 4,
  },
  bottomRightSection:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName:{
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  musicNameIcon:{
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  musicDisc:{
    width: 40,
    height: 40,
  },
  verticalBar:{
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem:{
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon:{
    width: 32,
    height: 32,
  },
  verticalBarText:{
    color: 'white',
    marginTop: 4,
  },
  avatarContainer:{
    marginBottom: 48,
  },
  avatar:{
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton:{
    position: 'absolute',
    bottom: -8,
  },
  followIcon:{
    width: 21,
    height: 21,
  },
  floatingMusicNote:{
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  tabVerticalBarIcon:{
    tintColor: 'red',
  }
})