import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len = 5) {
  let result = '';
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const Cal = () => {
  const { roomId } = useParams(); // Get room ID from URL

  React.useEffect(() => {
    let myMeeting = async (element) => {
      const appID = 639306747;
      const serverSecret = "3e1ddf697e04ccb660a22e10a64d8a5e";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId || randomID(5), 
        randomID(5), 
        randomID(5)
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.origin}/room/${roomId || randomID(5)}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    myMeeting(document.getElementById('meetingContainer'));
  }, [roomId]);

  return (
    <div
      id="meetingContainer"
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default Cal;
