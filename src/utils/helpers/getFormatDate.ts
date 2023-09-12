export function getFormatDate(date: string) {
  return new Date(date).toLocaleDateString('es-ar', { weekday:"short", year:"2-digit", month:"short", day:"2-digit"})
}