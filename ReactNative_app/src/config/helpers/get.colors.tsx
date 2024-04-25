import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (image: string) => {
  const fallbaclColor = 'grey';
  const colors = await ImageColors.getColors(image, {
    fallback: fallbaclColor,
  });

  switch (colors.platform) {
    case 'android':
      return colors.dominant ?? fallbaclColor;
    case 'ios':
      return colors.background ?? fallbaclColor;
    default:
      return fallbaclColor;
  }
};
