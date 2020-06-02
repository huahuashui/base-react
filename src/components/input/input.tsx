import * as React from "react";

interface SnInputProps {

}

export default class SnInput extends React.Component {

    constructor(props: SnInputProps) {
        super(props)
    }

    render() {
        return (
            <div className="sn-input">
                <input type="text"/>
            </div>
        )
    }
}
