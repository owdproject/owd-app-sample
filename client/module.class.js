import {ModuleApp} from '@owd-client/core';

export default class SampleModule extends ModuleApp {
  constructor(context) {
    super(context)
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

  loadStoreInstance({store, terminal}) {
    return {
      state: {},
      getters: {},
      mutations: {},
      actions: {}
    }
  }

  loadCommands({store, terminal}) {
    return {
      'sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }

  loadSseEvent({store}) {
    return {
      'open-sample': function () {
        store.dispatch('core/windows/windowCreate', {
          name: 'WindowSample'
        });
      }
    }
  }
}