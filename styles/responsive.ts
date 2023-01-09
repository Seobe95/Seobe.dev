export const breakPoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '576px',
}

const theme = {
  mobile: `(max-width: ${breakPoints.small})`,
  tablet: `(max-width: ${breakPoints.medium})`,
  laptop: `(max-width: ${breakPoints.large})`,
  desktop: `(min-width: ${breakPoints.xlarge})`,
}

export default theme
