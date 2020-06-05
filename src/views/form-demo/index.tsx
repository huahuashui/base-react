import React from "react";

import SnForm from "../../components/form";
import SnFormItem from "../../components/form/src/form-item";

export default class FormDemo extends React.Component<Record<string, any>, {}> {

    constructor(props: Record<string, any>) {
        super(props)
    }

    public componentDidMount(): void {

    }

    public render() {
        return (
            <div style={{marginTop: '10px'}}>
                表单示例
                <SnForm>
                    <SnFormItem>
                        111
                    </SnFormItem>
                </SnForm>
            </div>
        );
    }
}
