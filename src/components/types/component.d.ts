import * as React from "react";

/** SnUI component common definition */
export interface SnUIComponent<P = {}, S = {}> extends React.Component<P, S> {

}

/** SnUI component props common definition */
export interface SnUIComponentProps {
    style?: Record<string, string>;
    className?: string;
}

/** Component size definition for button, input, etc */
export type SnUIComponentSize = 'large' | 'medium' | 'small' | 'tiny' | 'mini';

/** Horizontal alignment */
export type SnUIHorizontalAlignment = 'left' | 'center' | 'right';
