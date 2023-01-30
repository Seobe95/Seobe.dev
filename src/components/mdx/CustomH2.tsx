function childrenHandler(value: string) {
  return value.replaceAll(' ', '-')
}

export default function CustomH2(props: any) {
  const value = childrenHandler(props.children)
  return <h2 id={value} {...props} />
}
