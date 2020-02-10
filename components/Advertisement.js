import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import ImageLoader from './ImageLoader'

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Advertisement extends React.Component {
  render() {
    const { navigation, advertisement, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, !!advertisement.full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={!!advertisement.horizontal} card flex style={[styles.product, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Advertisement', { advertisement: advertisement })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{uri: advertisement.image}} style={imageStyles}/>
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Advertisement', { advertisement: advertisement })}>
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>{advertisement.title}</Text>
            <Text size={12} style={styles.productTitle}>{advertisement.description}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>{`${!!advertisement.date && advertisement.date}`} {typeof advertisement.price == "number" ? `R$ ${advertisement.price}` : 'Entrada franca'}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Advertisement);

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});