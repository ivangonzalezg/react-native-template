import { Alert, PermissionsAndroid, Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";
import notifee, {
  AndroidImportance,
  AndroidVisibility,
  EventType,
} from "@notifee/react-native";

let onMessage = () => {};
let onForegroundEvent = () => {};

const channelId = "rntemplate";

const showNotificacion = (title = "", body = "", data = {}) => {
  notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      pressAction: {
        id: "default",
      },
    },
    data: { data: JSON.stringify(data) },
  });
};

const configure = async () => {
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging().registerDeviceForRemoteMessages();
  }
  await messaging().requestPermission();
  await notifee.requestPermission();
  if (Platform.OS === "android") {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
  await notifee.createChannel({
    id: channelId,
    name: "Default",
    badge: true,
    description: "Default Channel",
    lights: true,
    vibration: true,
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });
  onMessage = messaging().onMessage((remoteMessage) => {
    showNotificacion(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
      remoteMessage.data,
    );
  });
  messaging().setBackgroundMessageHandler((remoteMessage) =>
    showNotificacion(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
      remoteMessage.data,
    ),
  );
  onForegroundEvent = notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        break;
      case EventType.PRESS:
        Alert.alert(
          "Notification",
          JSON.stringify(JSON.parse(detail.notification.data.data), null, 2),
        );
        break;
    }
  });
  notifee.onBackgroundEvent(async ({ detail }) => {
    await notifee.cancelNotification(detail.notification.id);
  });
  notifee
    .getInitialNotification()
    .then(
      (initialNotification) =>
        initialNotification &&
        Alert.alert(
          "Notification",
          JSON.stringify(
            JSON.parse(initialNotification.notification.data.data),
            null,
            2,
          ),
        ),
    );
};

const getToken = () => messaging().getToken();

const unregister = () => {
  onMessage();
  onForegroundEvent();
};

const notifications = {
  showNotificacion,
  configure,
  getToken,
  unregister,
};

export default notifications;
