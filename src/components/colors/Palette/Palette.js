import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { Color, Shade } from './Palette.style';

const Palette = ({ color, name }) => {
  console.log(color, name);
  const palette = Object.keys(color).map(shade => ({
    shade,
    value: color[shade],
  }));

  const orderedPalette = palette.reduce((acc, item) => {
    if (item.shade === '500') {
      return [item, ...acc, item];
    }
    return [...acc, item];
  }, []);

  const darkColors = ['#3f3f3f', '#232323', '#000000'];

  return (
    <Color>
      <h4>{name}</h4>
      {orderedPalette.map(hue => {
        const { shade, value } = hue;
        return (
          <Shade
            style={{ backgroundColor: value }}
            key={uniqueId()}
            invertColor={darkColors.includes(value)}
          >
            <span>{shade}</span>
            <span>{value}</span>
          </Shade>
        );
      })}
    </Color>
  );
};

export default Palette;
