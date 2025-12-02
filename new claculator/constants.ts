export const FALL_ASLEEP_MINUTES = 15;
export const SLEEP_CYCLE_MINUTES = 90;

export const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
// Generate minutes 00-59 as strings with padding
export const MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
export const MERIDIEMS = ['AM', 'PM'];

// Tailwind classes for the wheel picker
export const WHEEL_ITEM_HEIGHT = 48; // px
export const VISIBLE_ITEMS = 5; // number of items visible in the picker