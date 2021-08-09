import {ModuleApp} from "@owd-client/core/index";
import {OwdModuleAppSetupSseEventsContext, OwdModuleAppSetupCommandsContext, OwdModuleAppSetupStoreContext} from "@owd-client/types";

// window components
import WindowChat from "./windows/WindowChat.vue";

export default class ChatModule extends ModuleApp {
  setup() {
    return {
      name: "chat",
      singleton: true,
      windows: [
        {
          component: WindowChat,
          name: "WindowChat",
          title: "OWD Chat Module",
          titleMenu: "Chat",
          icon: {
            name: "mdi-chat",
            size: "25px",
            offset: {
              y: -1
            }
          },
          menu: true,
          resizable: true,
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

  setupAssets() {
    // import additional assets
  }

  setupStore() {
    // define store structure for your module
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  setupStoreInstance({store, terminal}: OwdModuleAppSetupStoreContext) {
    // define store structure for your window instance
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  setupCommands({store, terminal}: OwdModuleAppSetupCommandsContext) {
    // define terminal command callbacks
    return {
      'chat': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowChat'
        });
      }
    }
  }

  setupSseEvent({store}: OwdModuleAppSetupSseEventsContext) {
    // define SSE event callbacks
    return {
      'open-chat': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowChat'
        });
      }
    }
  }
}