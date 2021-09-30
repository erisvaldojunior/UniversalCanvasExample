import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import UniversalCanvas from './src/components/UniversalCanvas';
import {useSimplePencil} from './src/hooks/useSimplePencil';

const App = () => {
  const canvasRef: any = React.useRef(null);
  const simplePencil = useSimplePencil();

  const initCanvas = (canvas: any) => {
    if (canvasRef?.current) {
      return;
    }
    canvasRef.current = canvas;
  };

  const draw = (evt: any) => {
    simplePencil.draw(canvasRef.current, evt);
  };

  const exitDraw = (evt: any) => {
    simplePencil.exitDraw();
  };

  const startDraw = (evt: any) => {
    console.log(
      'App.tsx startDraw canvas ' + canvasRef.current + ' evt ' + evt,
    );
    simplePencil.startDraw(canvasRef.current, evt);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <UniversalCanvas
          onCanvasCreate={initCanvas}
          onTouchStart={evt => {
            startDraw(evt);
          }}
          onTouchMove={evt => {
            draw(evt);
          }}
          onTouchEnd={evt => {
            exitDraw(evt);
          }}
          style={styles.universalCanvasStyle}
          onMouseDown={evt => {
            startDraw(evt);
          }}
          onMouseMove={evt => {
            draw(evt);
          }}
          onMouseUp={evt => {
            exitDraw(evt);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  canvasContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
  },
  universalCanvasStyle: {
    backgroundColor: 'blue',
    height: 1000,
    width: 350,
  },
});

export default App;
