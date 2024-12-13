import { useCallback } from 'react';
import BasicList from './BasicList';
import './CardsList.css';

export default function CardsList({
    config,
    listData,
    dataDef,
    pkey
}) {
    const cardsListTemplate = useCallback(
        (item) => '<div class="card clickable">'
            + '<ul class="tips inline-list">'
            + (dataDef.tips || []).map(tip => `
                <li class="card-tip ${tip.mainClass} ${(tip.calculateClasses || ((obj) => []))(item?.data || item).join(' ')}">
                    ${(tip.calculateValue || ((obj) => obj[tip.attr]))(item?.data || item)}
                </li>
            `).join('')
            + '</ul>'
            + '<ul class="data-info inline-list">'
            + (dataDef.data || []).map(field => `
                <li class="card-info ${field.primary ? 'primary' : ''} ${field.eager ? 'eager-info' : ''}">
                    <label
                        class="upper-label"
                        ${field.primary ? 'aria-hidden="false"': ''}
                    >${field.label}</label>
                    <span class="card-data">
                        ${(field.calculateValue || ((obj) => obj[field.attr]))(item?.data || item)}
                    </span>
                </li>
            `).join('')
            + '</ul>'
            + '</div>',
        []
    );
    return (
        <div className="nhids-cards-list-container">
            <BasicList
                config={config}
                listData={listData}
                templateMethod={cardsListTemplate}
                pkey={pkey}
            />
        </div>
    );
}