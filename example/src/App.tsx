import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { sendIntent } from 'rn-intents';

type Uri = { schema: string; ssp: string };

export default function App() {
  const handleOpenManageAppAllFilesAccessPermission = async () => {
    // Action name that will be handled
    const ACTION_NAME: string =
      'android.settings.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION';

    // If action requires data we can provide it.
    // For example MANAGE_APP_ALL_FILES_ACCESS_PERMISSION action requires uri below:

    const uri: Uri = {
      schema: 'package',
      ssp: 'com.rnintentsexample',
    };

    try {
      await sendIntent(ACTION_NAME, uri);
    } catch (error) {
      console.log('Error occured : ', error);
    }
  };

  const handleOpenLocationSourceSettings = async () => {
    const ACTION_NAME: string = 'android.settings.LOCATION_SOURCE_SETTINGS';

    try {
      //LOCATION_SOURCE_SETTINGS intent does not require uri.

      await sendIntent(ACTION_NAME);
    } catch (error) {
      console.log('Error occured : ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open manage app all files permission"
        onPress={handleOpenManageAppAllFilesAccessPermission}
      />
      <Button
        title="Open location source settings"
        onPress={handleOpenLocationSourceSettings}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
