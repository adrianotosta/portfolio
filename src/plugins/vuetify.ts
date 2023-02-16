// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaults = {
  VBtn: { 
    color: 'primary',
    variant: 'flat',
    rounded: 'pill',
  },
};

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#000',
  }
};

export default createVuetify({
  components,
  directives,
  defaults,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
});
