// Секции главной — прямые потомки контейнера с классом .section.
export const getSections = (container) => [...container.querySelectorAll(':scope > .section')];
