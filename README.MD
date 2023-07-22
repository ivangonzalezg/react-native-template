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

# React Native README

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.js` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
