// Christmas light promotions run Oct 1 – Dec 24 each year and hide automatically outside that window.
export const isChristmasLightSeason = (date: Date = new Date()) => {
  const month = date.getMonth(); // 0-indexed: 9 = October, 11 = December
  return month === 9 || month === 10 || (month === 11 && date.getDate() <= 24);
};
