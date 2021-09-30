import React from 'react';
import UniversalCanvasView from './UniversalCanvasView';

export type UniversalCanvasProps = {
  onCanvasCreate: (canvas: any) => void;
  onTouchStart: (evt: any) => void;
  onTouchMove: (evt: any) => void;
  onTouchEnd: (evt: any) => void;
  onMouseDown: (evt: any) => void;
  onMouseMove: (evt: any) => void;
  onMouseUp: (evt: any) => void;
  style: any;
};

const UniversalCanvas = React.memo((props: UniversalCanvasProps) => {
  const {
    onCanvasCreate,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    style,
  } = props;

  return (
    <UniversalCanvasView
      onCanvasCreate={onCanvasCreate}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={style}
    />
  );
});

export default UniversalCanvas;
