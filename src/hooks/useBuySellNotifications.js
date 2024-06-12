import { useEffect } from 'react';
import { sendSmsNotification } from '../services/smsService';

const useBuySellNotifications = (indications, phoneNumber) => {
  useEffect(() => {
    if (indications.buy) {
      sendSmsNotification(phoneNumber, 'Buy indication: ' + indications.buy);
    }
    if (indications.sell) {
      sendSmsNotification(phoneNumber, 'Sell indication: ' + indications.sell);
    }
  }, [indications, phoneNumber]);
};

export default useBuySellNotifications;