import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, sizes, fonts} from '../../theme';
import {icons} from '../../constants';

const TopCryptocurrency = ({
  coins,
  loading,
}: {
  coins: {
    id: string;
    price_change_percentage_7d_in_currency: number;
    current_price: number;
    name: string;
    image: string;
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
    <>
      {!loading && (
        <FlatList
          data={coins}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            marginTop: 30,
            paddingHorizontal: sizes.padding,
          }}
          ListHeaderComponent={
            <View style={{marginBottom: sizes.radius}}>
              <Text style={{color: colors.white, ...fonts.h3, fontSize: 18}}>
                Top Cryptocurrency
              </Text>
            </View>
          }
          renderItem={({item}) => {
            console.log('item', item);

            let priceColor =
              item.price_change_percentage_7d_in_currency === 0
                ? colors.lightGray3
                : item.price_change_percentage_7d_in_currency > 0
                ? colors.lightGreen
                : colors.red;

            return (
              <TouchableOpacity
                style={{
                  height: 55,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{width: 35}}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 50,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: colors.white, ...fonts.body3}}>
                    {item.name}
                  </Text>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      textAlign: 'right',
                      color: colors.white,
                      ...fonts.h4,
                    }}>
                    $ {item.current_price}
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
                      {item.price_change_percentage_7d_in_currency}%
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={<View style={{marginBottom: 50}} />}
        />
      )}
    </>
  );
};

export default TopCryptocurrency;
