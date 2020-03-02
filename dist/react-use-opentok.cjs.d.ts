// Type definitions for react-use-opentok 2.2
// Project: https://pjchender.github.io/react-use-opentok/
// Definitions by: MaxRink <https://github.com/Mwjrink>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as OT from '@opentok/client';

interface SessionOptions {
  connectionEventsSuppressed?: boolean;
  iceConfig?: {
    includeServers: 'all' | 'custom';
    transportPolicy: 'all' | 'relay';
    customServers: {
      urls: string | Array<string>;
      username?: string;
      credential?: string;
    }[];
  };
}

declare module 'react-use-opentok' {
  function useOpenTok(): [
    {
      isSessionInitialized: boolean;
      connectionId: string | undefined;
      connections: Array<OT.Connection>;

      isSessionConnected: boolean;

      session: OT.Session;
      subscribers: Array<OT.Subscriber>;
      publisher: Record<string, OT.Publisher>;

      streams: Array<OT.Stream>;
    },
    {
      initSessionAndConnect: (_: {
        apiKey: string;
        sessionId: string;
        token: string;
        sessionOptions?: SessionOptions;
      }) => Promise<void>;

      initSession: (_: {
        apiKey: string;
        sessionId: string;
        sessionOptions?: SessionOptions;
      }) => Promise<void>;

      connectSession: (token: string, sessionToConnect: OT.Session) => Promise<void>;
      disconnectSession: () => void;

      publish: (_: {
        name: string;
        element: HTMLElement | string;
        options?: OT.PublisherProperties;
      }) => Promise<void>;

      unpublish: (_: { name: string }) => void;

      subscribe: (_: {
        stream: OT.Stream;
        element: HTMLElement | string;
        options?: OT.SubscriberProperties;
      }) => void;

      unsubscribe: (_: OT.Subscriber) => void;

      sendSignal: (_: { type?: string; data?: string }) => void;
    }
  ];

  export = useOpenTok;
}
