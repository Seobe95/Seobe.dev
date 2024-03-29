export const breakPoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '425px',
}

const responsive = {
  mobile: `(max-width: ${breakPoints.small})`,
  tablet: `(max-width: ${breakPoints.medium})`,
  laptop: `(max-width: ${breakPoints.large})`,
  desktop: `(min-width: ${breakPoints.xlarge})`,
}

export default responsive
