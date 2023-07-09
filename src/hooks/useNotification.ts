const useNotification = () => {
  const handleEnableNotification = async () => {
    const notification = await Notification.requestPermission(
      (permission: NotificationPermission) => {
        if (permission === "granted") {
          new Notification("CLUB ECOMMERCE", {
            body: "Olá Leonardo, tudo bem ?",
          });
        }
      }
    );

    return notification;
  };

  return {
    handleEnableNotification,
  };
};

export default useNotification;
