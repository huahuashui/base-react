/** SnUI component common definition */
import * as React from "react";


export interface SnUIComponent<P = {}, S = {}> extends React.Component<P, S> {

}

/** Component size definition for button, input, etc */
export type SnUIComponentSize = 'large' | 'medium' | 'small' | 'tiny' | 'mini';

/** Horizontal alignment */
export type SnUIHorizontalAlignment = 'left' | 'center' | 'right';
