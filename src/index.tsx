import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-intents' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnIntents = NativeModules.RnIntents
  ? NativeModules.RnIntents
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

type Uri = {
  schema: string;
  ssp: string;
};

export function sendIntent(action: string, uri?: Uri): Promise<void> {
  return RnIntents.sendIntent(action, uri?.schema ?? '', uri?.ssp ?? '');
}
