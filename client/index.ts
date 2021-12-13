import {ModuleApp, useDesktopApps} from "@owd-client/core/index";
import {OwdModuleAppSetupSseEventsContext, OwdModuleAppSetupCommandsContext, OwdModuleAppSetupStoreContext} from "@owd-client/types";

// window components
import WindowSample from "./windows/WindowSample.vue";

export default class SampleModule extends ModuleApp {
  setup() {
    return {
      name: "sample",
      singleton: true,
      windows: [
        {
          component: WindowSample,
          name: "WindowSample",
          title: "Sample module",
          titleMenu: "Sample",
          icon: {
            name: "mdi mdi-application",
            size: "25px",
            offset: {
              y: -1
            }
          },
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
    return {
      'sample': function () {
        const desktopApps = useDesktopApps()
        const projectsModuleApp = desktopApps.findApp('sample')

        if (projectsModuleApp) {
          projectsModuleApp
            .createWindow('WindowSample')
            .onMounted(windowInstance => windowInstance.open(true))

          terminal.writeln("Window opened");
        }
      }
    }
  }

  setupSseEvent({store}: OwdModuleAppSetupSseEventsContext) {
    return {
      'open-sample': function () {
        const desktopApps = useDesktopApps()
        const projectsModuleApp = desktopApps.findApp('sample')

        if (projectsModuleApp) {
          projectsModuleApp
            .createWindow('WindowSample')
            .onMounted(windowInstance => windowInstance.open(true))
        }
      }
    }
  }
}