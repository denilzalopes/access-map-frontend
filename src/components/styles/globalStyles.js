import {StyleSheet} from 'react-native';
import {theme} from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
  },
});
