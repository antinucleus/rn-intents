# rn-intents

Send intent with data.

## Installation

```sh
npm install rn-intents
```

## Usage

- Some intents require some data, so we have to provide this data to intent. You can see explanation below.

- Assume that our application will be able to manage files on device.

- First we have to add these permissions to **AndroidManifest.xml**

  ```
  <uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />

   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

  ```

- Application only read data from external storage with these permissions. For writing data to storage, also application must have **all file access** permission.

- For that, application should open automatically **all file access** permission settings for user.

- Therefore we have to launch intent with
  **MANAGE_APP_ALL_FILES_ACCESS_PERMISSION** action and this action requires package name of the application.

```js
import { sendIntent } from 'rn-intents';

type Uri = { schema: string, ssp: string };

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
```

- Or another action does not require any data. For example **LOCATION_SOURCE_SETTINGS** action.
- Application can launch this action without providing any data:

```js
import { sendIntent } from 'rn-intents';

const handleOpenLocationSourceSettings = async () => {
  const ACTION_NAME: string = 'android.settings.LOCATION_SOURCE_SETTINGS';

  try {
    //LOCATION_SOURCE_SETTINGS intent does not require uri.

    await sendIntent(ACTION_NAME);
  } catch (error) {
    console.log('Error occured : ', error);
  }
};
```

- Also you can check example folder.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
