import {View, Text, FlatList, Image, Animated} from 'react-native';
import React, {MutableRefObject} from 'react';
import {LineChart} from 'react-native-chart-kit';

import {colors, fonts, metrics, sizes} from '../../theme';
import {CoinProps} from '../../types';
import {icons} from '../../constants';

const MarketList = ({
  scrollX,
  MarketTabs,
  loading,
  coins,
  marketTabScollViewRef,
}: {
  scrollX: Animated.Value;
  MarketTabs: MarketTabsProps[];
  loading: boolean;
  coins: CoinProps[];
  marketTabScollViewRef: MutableRefObject<null>;
}) => {
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Animated.FlatList
      ref={marketTabScollViewRef}
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
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      renderItem={() => {
        return (
          <View
            style={{
              flex: 1,
              width: metrics.width,
            }}>
            <FlatList
              data={coins}
              keyExtractor={item => item.id}
              renderItem={({item}: {item: CoinProps}) => {
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
                          labels: [],
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
                        bezier
                        style={{
                          paddingRight: 0,
                        }}
                      />
                    </View>
                    {/* values text */}
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
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
                        {item.price_change_percentage_7d_in_currency !== 0 && (
                          <Image
                            source={icons.upArrowIcon}
                            style={{
                              height: 10,
                              width: 10,
                              tintColor: priceColor,
                              transform:
                                item.price_change_percentage_7d_in_currency > 0
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
  );
};

export default MarketList;
