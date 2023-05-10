interface LoadingProps {
  isLoading: boolean
}
export default function Loading(props: LoadingProps) {
  if (props.isLoading) {
    return <div>Loading...</div>
  } else {
    return <></>
  }
}
