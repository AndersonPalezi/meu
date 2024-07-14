declare module 'react-scroll' {
    import * as React from 'react';

    interface ScrollLinkProps {
        to: string;
        containerId?: string;
        activeClass?: string;
        spy?: boolean;
        smooth?: boolean | string;
        offset?: number;
        duration?: number | string;
        delay?: number;
        isDynamic?: boolean;
        onSetActive?: (to: string) => void;
        onSetInactive?: (to: string) => void;
        ignoreCancelEvents?: boolean;
        hashSpy?: boolean;
        saveHashHistory?: boolean;
        spyThrottle?: number;
        [key: string]: unknown; // Use `unknown` em vez de `any`
    }

    export class Link extends React.Component<ScrollLinkProps> {}
}
