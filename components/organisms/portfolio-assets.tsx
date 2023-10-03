import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, fonts, sizes} from '../../theme';
import i18n from '../../i18n';
import {icons} from '../../constants';

const PortfolioAssets = ({
  myHolding,
  loading,
}: {
  myHolding: {
    id: string;
    price_change_percentage_7d_in_currency: number;
    current_price: number;
    name: string;
    image: string;
    total: number;
    qty: number;
    symbol: string;
  }[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={myHolding}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        marginTop: sizes.padding,
        paddingHorizontal: sizes.padding,
      }}
      ListHeaderComponent={
        <View>
          <Text
            style={{
              ...fonts.h2,
              color: colors.white,
            }}>
            {i18n.PortfolioAssetsTitle}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: sizes.radius,
            }}>
            <Text style={{flex: 1, color: colors.lightGray3}}>
              {i18n.PortfoloAssetsHeaderOne}
            </Text>
            <Text
              style={{flex: 1, color: colors.lightGray3, textAlign: 'right'}}>
              {i18n.PortfoloAssetsHeaderTwo}
            </Text>
            <Text
              style={{flex: 1, color: colors.lightGray3, textAlign: 'right'}}>
              {i18n.PortfoloAssetsHeaderThree}
            </Text>
          </View>
        </View>
      }
      renderItem={({item}) => {
        let priceColor =
          item.price_change_percentage_7d_in_currency === 0
            ? colors.lightGray3
            : item.price_change_percentage_7d_in_currency > 0
            ? colors.lightGreen
            : colors.red;

        return (
          <TouchableOpacity style={{flexDirection: 'row', height: 55}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}}
                style={{width: 20, height: 20}}
              />
              <Text
                style={{
                  marginLeft: sizes.radius,
                  color: colors.white,
                  ...fonts.h4,
                }}>
                {item.name}
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'right',
                  color: colors.white,
                  ...fonts.h4,
                  lineHeight: 15,
                }}>
                ${item.current_price.toLocaleString()}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
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
                    lineHeight: 15,
                  }}>
                  {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                </Text>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'right',
                  color: colors.white,
                  ...fonts.h4,
                  lineHeight: 15,
                }}>
                $ {item.total.toLocaleString()}
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  color: colors.lightGray3,
                  ...fonts.body5,
                  lineHeight: 15,
                }}>
                {item.qty} {item.symbol.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PortfolioAssets;
