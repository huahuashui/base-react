import React from "react";
import {RouteComponentProps} from "base-react/node_modules/@types/react-router";

export default class Page1 extends React.Component<RouteComponentProps> {

    constructor(props: RouteComponentProps) {
        super(props)
    }

    public render() {
        return (
            <div>
                <p>page1</p>
            </div>
        );
    }
}
