
import { Mode, OrderBy, OrderByPrice, OrderByPublished } from './enums';

export const modeStepLabels: Map<Mode, string[]> = new Map([
    [Mode.CREATE, ['Публикуване на обява', 'Добавяне на снимки', 'Преглед на обявата']],
    [Mode.EDIT, ['Редактиране на обява', 'Редактиране на снимки', 'Преглед на обявата']]
]
);

export const orders: Map<OrderBy, string> = new Map([
    [OrderBy.NEWEST, 'Най-нови'],
    [OrderBy.PRICE_LOWEST, 'Цена - най-ниска'],
    [OrderBy.PRICE_HIGHEST, 'Цена - най-висока']
]);

export const priceОrders: Map<OrderByPrice, string> = new Map([
    [OrderByPrice.ALL, 'Всички'],
    [OrderByPrice.LEV, 'В лева'],
    [OrderByPrice.EUR, 'В евро'],
    [OrderByPrice.USD, 'В долари']
]);

export const publishОrders: Map<OrderByPublished, string> = new Map([
    [OrderByPublished.ALL, 'Всички'],
    [OrderByPublished.TODAY, 'Днес'],
    [OrderByPublished.LAST_THREE_DAYS, 'Последните 3 дена'],
    [OrderByPublished.LAST_SEVEN_DAYS, 'Последните 7 дена'],
    [OrderByPublished.LAST_FOURTEEN_DAYS, 'Последните 14 дена'],
    [OrderByPublished.LAST_MONTH, 'Послдния 1 месец']
]);