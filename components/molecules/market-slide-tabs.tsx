import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors, fonts, sizes} from '../../theme';
import TabIndicator from '../atoms/tab-indicator';

const MarketSlideTabs = ({
  MarketTabs,
  scrollX,
  onMarketTabPress,
}: {
  MarketTabs: MarketTabsProps[];
  scrollX: Animated.Value;
  onMarketTabPress: (index: number) => void;
}) => {
  const [measureLayout, setMeasureLayout] = useState<any[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let ml: any[] = [];

    MarketTabs.forEach((tab: MarketTabsProps) => {
      tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x: number, y: number, width: number, height: number) => {
          ml.push({
            x,
            y,
            width,
            height,
          });
          if (ml.length === MarketTabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, [MarketTabs]);

  return (
    <View
      ref={containerRef}
      style={{
        marginTop: sizes.radius,
        marginHorizontal: sizes.radius,
        borderRadius: sizes.radius,
        backgroundColor: colors.gray,
      }}>
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      <View style={{flexDirection: 'row'}}>
        {MarketTabs.map((item: MarketTabsProps, index: number) => {
          return (
            <TouchableOpacity
              key={`Market-${item.id}`}
              style={{flex: 1}}
              onPress={() => onMarketTabPress(index)}>
              <View
                ref={item.ref}
                style={{
                  paddingHorizontal: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 45,
                }}>
                <Text style={{color: colors.white, ...fonts.h3}}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MarketSlideTabs;
