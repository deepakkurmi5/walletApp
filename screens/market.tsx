import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
} from 'react-native';
import React, {RefObject, createRef, useRef} from 'react';

import MainLayout from './main-layout';
import {CoingeckoApiParams, icons} from '../constants';
import SafeArea from '../components/atoms/safe-area';
import HeaderBar from '../components/atoms/header-bar';
import i18n from '../i18n';
import {marketTabs} from '../constants';
import {colors, fonts, metrics, sizes} from '../theme';
import TextButton from '../components/atoms/text-button';
import useCoinMarket from '../hooks/use-coin-market';
import {LineChart} from 'react-native-chart-kit';

interface MarketTabsProps {
  id: string;
  title: string;
  ref?: RefObject<View>;
}

const MarketTabs = marketTabs.map(tab => ({
  ...tab,
  ref: createRef<View>(),
}));

const Market = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {data: coins, isLoading: coinLoading} = useCoinMarket({
    ...CoingeckoApiParams,
  });

  if (coinLoading) {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <SafeArea>
      <MainLayout>
        <HeaderBar title={i18n.MarketTitle} />

        {/* Tabs bar commoment */}
        <View
          style={{
            marginTop: sizes.radius,
            marginHorizontal: sizes.radius,
            borderRadius: sizes.radius,
            backgroundColor: colors.gray,
          }}>
          <View style={{flexDirection: 'row'}}>
            {MarketTabs.map((item: MarketTabsProps) => {
              return (
                <TouchableOpacity key={`Market-${item.id}`} style={{flex: 1}}>
                  <View
                    ref={item.ref}
                    style={{
                      paddingHorizontal: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
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

        {/* button commoment */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: sizes.radius,
            marginHorizontal: sizes.radius,
          }}>
          <TextButton lable="USD" />
          <TextButton
            lable="% (7d)"
            containerStyle={{
              marginLeft: sizes.base,
            }}
          />
          <TextButton
            lable="Top"
            containerStyle={{
              marginLeft: sizes.base,
            }}
          />
        </View>

        {/* List commoment */}

        <Animated.FlatList
          data={MarketTabs}
          contentContainerStyle={{
            marginTop: sizes.padding,
          }}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: metrics.width,
                }}>
                <FlatList
                  data={coins}
                  keyExtractor={item => item.id}
                  renderItem={({
                    item,
                    index,
                  }: {
                    item: {price_change_percentage_7d_in_currency: number};
                    index: number;
                  }) => {
                    let priceColor =
                      item.price_change_percentage_7d_in_currency === 0
                        ? colors.lightGray3
                        : item.price_change_percentage_7d_in_currency > 0
                        ? colors.lightGreen
                        : colors.red;

                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingHorizontal: sizes.padding,
                          marginBottom: sizes.radius,
                        }}>
                        {/* coin text */}
                        <View
                          style={{
                            flex: 1.5,
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={{uri: item.image}}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                          />
                          <Text
                            style={{
                              marginLeft: sizes.radius,
                              color: colors.white,
                              ...fonts.h3,
                            }}>
                            {item.name}
                          </Text>
                        </View>
                        {/* chart section */}

                        <View style={{flex: 1, alignItems: 'center'}}>
                          <LineChart
                            withVerticalLabels={false}
                            withHorizontalLabels={false}
                            withDots={false}
                            withInnerLines={false}
                            withVerticalLines={false}
                            withOuterLines={false}
                            data={{
                              datasets: [
                                {
                                  data: item.sparkline_in_7d.price,
                                },
                              ],
                            }}
                            width={100}
                            height={60}
                            chartConfig={{
                              color: () => priceColor,
                            }}
                            bazier
                            style={{
                              paddingRight: 0,
                            }}
                          />
                        </View>
                        {/* values text */}
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: colors.white,
                              ...fonts.h4,
                            }}>
                            ${item.current_price}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                            }}>
                            {item.price_change_percentage_7d_in_currency !==
                              0 && (
                              <Image
                                source={icons.upArrowIcon}
                                style={{
                                  height: 10,
                                  width: 10,
                                  tintColor: priceColor,
                                  transform:
                                    item.price_change_percentage_7d_in_currency >
                                    0
                                      ? [{rotate: '45deg'}]
                                      : [{rotate: '125deg'}],
                                }}
                              />
                            )}
                            <Text
                              style={{
                                marginLeft: 5,
                                color: priceColor,
                                ...fonts.body5,
                              }}>
                              {item.price_change_percentage_7d_in_currency.toFixed(
                                2,
                              )}
                              %
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </MainLayout>
    </SafeArea>
  );
};

export default Market;
