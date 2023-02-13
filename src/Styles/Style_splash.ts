import {StyleSheet} from 'react-native';
import {COLORS} from '../Constantes/Constantes';

const Style_splash = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    top: 200,
    width: 80,
    height: 80,
    borderRadius: 17,
  },
  text: {
    fontSize: 16,
    color: COLORS.blanc,
    top: 10,
  },
  load: {
    flex: 1 / 2,
    top: 140,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    top: 130,
    flex: 1 / 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Style_splash;
