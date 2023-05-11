function childrenHandler(value: string) {
  if (typeof value !== 'string') {
    // value가 문자열이 아닌 경우 처리할 로직 추가
    return value
  }
  return value.replaceAll(/ /g, '-')
}

export default function CustomH2(props: any) {
  const value = childrenHandler(props.children)
  return <h2 id={value} {...props} />
}
