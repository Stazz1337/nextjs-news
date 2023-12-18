export function formatDate(inputDate: string) {
  let date = new Date(inputDate);
  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  } as any;
  let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}
