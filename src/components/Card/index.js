import React, {Component} from 'react';
import {Card as BCard} from '@blueprintjs/core';


class CardNew extends Component {
    render() {
        const {children, className,...rest} = this.props;
        const allClassName = `bg-main pt-elevation-2 ${className || ''}`;
        return (
            <BCard className={allClassName} {...rest}>
                {children}
            </BCard>
        );
    }
}

export default CardNew;