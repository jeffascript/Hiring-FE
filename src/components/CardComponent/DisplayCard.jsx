import React from 'react';
import { Card } from 'antd';

export default function DisplayCard(props) {
    return (
        <div className="divCard">
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
           
        </Card>
        </div>
    );
}
