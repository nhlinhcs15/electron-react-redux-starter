import { app, BrowserWindow, dialog, ipcMain, IpcMainEvent } from 'electron';
import path from 'path';

let win: BrowserWindow | undefined;
const lock = app.requestSingleInstanceLock();

function openFolderPicker(event: IpcMainEvent, defaultPath: string) {
  const folder = dialog.showOpenDialogSync(win!, {
    title: 'Select a folder',
    defaultPath,
    properties: ['openDirectory'],
  });

  if (folder && folder.length > 0) {
    event.returnValue = folder[0];
  } else {
    event.returnValue = '';
  }
}

function exitAppWithConfirm() {
  if (win) {
    const result = dialog.showMessageBoxSync(win, {
      title: 'Exit',
      message: 'Do you want to exit this app?',
      detail: 'If you exit this app, all progress will be stop.',
      type: 'question',
      buttons: ['No', 'Yes'],
    });
    if (result === 1) {
      app.exit();
    }
  }
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    minWidth: 500,
    minHeight: 400,
    width: 800,
    height: 600,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      // devTools: true,
      devTools: process.env.NODE_ENV !== 'production',
    },
  });
  if (process.env.NODE_ENV === 'development') {
    win?.loadURL('http://localhost:9000');
  } else {
    win?.loadURL(`file://${path.join(__dirname, 'index.html')}`);
  }
  win.on('close', (e) => {
    e.preventDefault();
    exitAppWithConfirm();
  });
}

function restoreWindow() {
  if (win) {
    win.show();
    if (win.isMaximized()) {
      win.restore();
    }
    win.focus();
  }
}

function appReady() {
  createWindow();
  ipcMain.on('openFolderPicker', openFolderPicker);
}

if (!lock) {
  app.exit();
} else {
  app.on('second-instance', restoreWindow);
  app.on('ready', appReady);
}
