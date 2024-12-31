import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
   saveProducts: function(products) {
      ipcRenderer.send('saveProducts', products)
   },
   
   loadProducts: function() {
      return ipcRenderer.invoke('loadProducts')
   },

   saveUsers: function(users) {
      ipcRenderer.send('saveUsers', users)
   },
   
   loadUsers: function() {
      return ipcRenderer.invoke('loadUsers')
   },

   saveTransactions: function(transactions) {
      ipcRenderer.send('saveTransactions', transactions)
   },
   
   loadTransactions: function() {
      return ipcRenderer.invoke('loadTransactions')
   }

}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
