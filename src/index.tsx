import { getResponsiveValue } from './util';

export interface defaultSizeProps {
  width: number,
  height: number
}

const enableOnlySmallSize: boolean = true;

const defaultSize: defaultSizeProps = {
  width: 375,
  height: 812,
};

function widthResponsive(width: number) {

  const ratio = (width / defaultSize.width) * 100;
  const responsiveWidth = getResponsiveValue('WIDTH', ratio);
  if (enableOnlySmallSize && responsiveWidth > width) {
    return width;
  }
  return responsiveWidth;
}

function heightResponsive(height: number) {

  const ratio = (height / defaultSize.height) * 100;
  const responsiveHeight = getResponsiveValue('HEIGHT', ratio);

  if (enableOnlySmallSize && responsiveHeight > height) {
    return height;
  }

  return responsiveHeight;
}

function fontResponsive(font: number) {
  const ratio = ((font / defaultSize.width) * 100);
  const responsiveFont = getResponsiveValue('FONT', ratio);

  if (enableOnlySmallSize && responsiveFont > font) {
    return font;
  }

  return responsiveFont;
}

export {
  widthResponsive,
  heightResponsive,
  fontResponsive,
};
