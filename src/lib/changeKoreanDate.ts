export function changeKoreanDate (date: string): string {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}