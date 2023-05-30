# React Native Project Structure

## Folder structure

- `src`: This folder is the main container of all the code inside the app.
  - `api`: Contains the settings required to connect to a remote server using axios.
  - `assets`: Store all fonts, icons and images, etc.
  - `components`: Store any common component used through the app (such as a generic button).
  - `constants`: Store any type of constant that the app may use.
  - `contexts`: Contains all contexts used in the app or some group of screens.
  - `database`: Contains the configuration to connect to SQLite using react-native-sqlite-storage. Generally used for offline mode.
  - `hooks`: Contains all hooks used in the app.
  - `modules`: Have the Native Modules created for the app.
  - `screens`: Folder that contains all the app screens.
  - `services`: Contains all services used in the app.
  - `translate`: Settings for the app to support multiple languages, recommend to use i18n-js and react-native-localize.
  - `utils`: Folder to store any common function such as calcutate radius, different date formatting functions, etc.
  - `App.js`: Main component that starts the whole app.
  - `routes.js`: File to store the routes keys.
- `index.js`: Entry point of the appp as per React Native standards.

## Usage

To create a new app using this template there are two options:

### Option 1

Follow this [guide](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3) for Android. For iOS update the Bundle Identifier and the app Display Name in xCode general settings.

### Option 2

Using [react-native-rename](https://github.com/junedomingo/react-native-rename). Only need to define the app name, package name for Android and Bundle Identifier for iOS

## Configurations for firebase

Replace the following files:

1. `./ios/GoogleService-Info.plist`

2. `./android/app/google-services.json`

### For notifications

For android:
Replace the `com.google.firebase.messaging.default_notification_channel_id` meta-data in android manifest

For iOS:
Follow this steps [https://rnfirebase.io/messaging/usage/ios-setup](https://rnfirebase.io/messaging/usage/ios-setup)

Be careful with the bundle identifier 

APN is stored in google drive

## Author

- [**Ivan Gonzalez**](https://ivangonzalez.co) - _Full-Stack Developer_ - [ivangonzalezg](https://github.com/ivangonzalezg)
