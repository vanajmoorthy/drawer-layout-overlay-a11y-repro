import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        overlayAccessibilityLabel="Close drawer"
        renderDrawerContent={() => (
          <View style={{ flex: 1, padding: 24 }}>
            <Text>Drawer content</Text>
          </View>
        )}
      >
        <View style={{ flex: 1, padding: 24, paddingTop: 64 }}>
          <Text>Screen title</Text>
          <Button title="Open drawer" onPress={() => setOpen(true)} />
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
}
