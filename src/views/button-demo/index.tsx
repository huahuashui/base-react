import React from "react";
import {connect} from "react-redux";

import SnButton from "../../components/button";
import SnButtonGroup from "../../components/button/src/button-group";

class ButtonDemo extends React.Component<Record<string, any>, {}> {

    constructor(props: Record<string, any>) {
        super(props)
    }

    public componentDidMount(): void {
        console.log('componentDidMount', this);
    }

    public render() {
        return (
            <div style={{marginTop: '10px'}}>
                <div>
                    基础用法
                    <div>
                        <SnButton onClick={() => console.log('默认按钮')}>默认按钮</SnButton>
                        <SnButton type="primary">主要按钮</SnButton>
                        <SnButton type="success">成功按钮</SnButton>
                        <SnButton type="warning">警告按钮</SnButton>
                        <SnButton type="danger">危险按钮</SnButton>
                        <SnButton type="info">信息按钮</SnButton>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <SnButton plain>朴素按钮</SnButton>
                        <SnButton type="primary" plain>主要按钮</SnButton>
                        <SnButton type="success" plain>成功按钮</SnButton>
                        <SnButton type="warning" plain>警告按钮</SnButton>
                        <SnButton type="danger" plain>危险按钮</SnButton>
                        <SnButton type="info" plain>信息按钮</SnButton>
                    </div>
                </div>
                <div>
                    禁用状态
                    <div style={{marginTop: '10px'}}>
                        <SnButton disabled>默认按钮</SnButton>
                        <SnButton type="primary" disabled>主要按钮</SnButton>
                        <SnButton type="success" disabled>成功按钮</SnButton>
                        <SnButton type="warning" disabled>警告按钮</SnButton>
                        <SnButton type="danger" disabled>危险按钮</SnButton>
                        <SnButton type="info" disabled>信息按钮</SnButton>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <SnButton plain disabled>朴素按钮</SnButton>
                        <SnButton type="primary" plain disabled>主要按钮</SnButton>
                        <SnButton type="success" plain disabled>成功按钮</SnButton>
                        <SnButton type="warning" plain disabled>警告按钮</SnButton>
                        <SnButton type="danger" plain disabled>危险按钮</SnButton>
                        <SnButton type="info" plain disabled>信息按钮</SnButton>
                    </div>
                </div>
                <div style={{marginTop: '10px'}}>
                    文字按钮
                    <SnButton type="text">文本按钮</SnButton>
                    <SnButton type="text" disabled>文本按钮</SnButton>
                </div>
                <div>
                    图标按钮
                    <SnButton type="primary" icon="sn-input-clear">文本按钮</SnButton>
                    <SnButton type="primary" icon="sn-input-clear"></SnButton>
                    <SnButton icon="sn-input-clear"></SnButton>
                    <SnButton type="text" icon="sn-input-clear"></SnButton>
                </div>
                <div style={{marginTop: '10px'}}>
                    按钮组
                    <SnButtonGroup>
                        <SnButton type="primary">按钮1</SnButton>
                        <SnButton type="primary">按钮2</SnButton>
                        <SnButton type="primary">按钮3</SnButton>
                    </SnButtonGroup>
                    <SnButtonGroup style={{marginTop: '10px'}}>
                        <SnButton type="success">按钮1</SnButton>
                        <SnButton type="success">按钮2</SnButton>
                        <SnButton type="success">按钮3</SnButton>
                    </SnButtonGroup>
                    <SnButtonGroup style={{marginTop: '10px'}}>
                        <SnButton>按钮1</SnButton>
                        <SnButton>按钮2</SnButton>
                        <SnButton>按钮3</SnButton>
                    </SnButtonGroup>
                    <SnButtonGroup style={{marginTop: '10px'}}>
                        <SnButton type="text">按钮1</SnButton>
                        <SnButton type="text">按钮2</SnButton>
                        <SnButton type="text">按钮3</SnButton>
                    </SnButtonGroup>
                </div>
                <div style={{marginTop: '10px'}}>
                    不同尺寸
                    <SnButton size="large">large</SnButton>
                    <SnButton size="medium">medium</SnButton>
                    <SnButton size="small">small</SnButton>
                    <SnButton size="tiny">tiny</SnButton>
                    <SnButton size="mini">mini</SnButton>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {};
}

export default connect(mapStateToProps)(ButtonDemo);
