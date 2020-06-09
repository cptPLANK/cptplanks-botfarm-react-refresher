import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = ({monsters}) => (
        <div className="card-list">
            {monsters.map((monster, index) => <Card
                monster={monster}
                key={index}
                />)} 
        </div>);