import { Mode } from './enums';

export const modeStepLabels: Map<Mode, string[]> = new Map([
    [Mode.CREATE, ['Публикуване на обява', 'Добавяне на снимки', 'Преглед на обявата']],
    [Mode.EDIT, ['Редактиране на обява', 'Редактиране на снимки', 'Преглед на обявата']]
]
);