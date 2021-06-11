import {ModuleApp} from "@owd-client/core/index";
import {OwdModuleAppLoadSseEventsContext, OwdModuleAppLoadCommandsContext, OwdModuleAppLoadStoreContext} from "@owd-client/types";

// window components
import WindowSample from "./windows/WindowSample.vue";

export default class SampleModule extends ModuleApp {
  loadModule() {
    return {
      name: "sample",
      singleton: true,
      windows: [
        {
          component: WindowSample,
          name: "WindowSample",
          title: "OWD Sample Module",
          titleMenu: "Sample",
          icon: {
            name: "mdi-application",
            size: "25px",
            offset: {
              y: -2
            }
          },
          menu: true,
          resizable: false,
          size: {
            width: 448,
            height: 240
          },
          position: {
            x: -1,
            y: 0,
            z: 0
          }
        }
      ]
    }
  }

  loadAssets() {
    // import additional assets
  }

  loadStore() {
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  loadStoreInstance({store, terminal}: OwdModuleAppLoadStoreContext) {
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  loadCommands({store, terminal}: OwdModuleAppLoadCommandsContext) {
    return {
      'sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }

  loadSseEvent({store}: OwdModuleAppLoadSseEventsContext) {
    return {
      'open-sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }
}