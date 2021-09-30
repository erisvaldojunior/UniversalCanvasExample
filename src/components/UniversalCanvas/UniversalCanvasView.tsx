import React from 'react';
import NewCanvas from 'react-native-new-canvas';

const UniversalCanvasView = ({
  onCanvasCreate,
  onTouchStart,
  onTouchMove,
  onTouchEnd,

  onMouseDown,
  onMouseMove,
  onMouseUp,
  style,
}) => {
  return (
    <NewCanvas
      onCanvasCreate={onCanvasCreate}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={style}
    />
  );
};
export default UniversalCanvasView;
