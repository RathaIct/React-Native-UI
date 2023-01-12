/**
 * @format
 */

import { AppRegistry } from 'react-native';
import main from './src/main';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => main);
