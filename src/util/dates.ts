import dayjs from 'dayjs';

export function getDateParts(date?: Date) {
  if (!date) return null;

  const d = dayjs(date);

  return {
    D: d.format('D'),
    DD: d.format('DD'),
    ddd: d.format('ddd'),
    M: d.format('M'),
    MM: d.format('MM'),
    MMM: d.format('MMM'),
    MMMM: d.format('MMMM'),
    h: d.format('h'),
    hh: d.format('hh'),
    s: d.format('s'),
    ss: d.format('ss'),
    A: d.format('A'),
    a: d.format('a'),
  };
}

export function convertDateToDatetimeLocal(date: Date) {
  console.log('>>>', date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
