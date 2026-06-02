(function () {
  const STORAGE_KEY = "gymlog.v3";

  function read() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  function write(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function load(defaultState, migrateState) {
    const saved = read();
    if (!saved) return structuredClone(defaultState);
    return migrateState(saved);
  }

  function exportBackup(state, todayKey) {
    const backup = {
      app: "GYMLOG",
      version: STORAGE_KEY,
      exportedAt: new Date().toISOString(),
      data: state
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gymlog-backup-${todayKey()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  window.GymLogStorage = {
    key: STORAGE_KEY,
    load,
    save: write,
    exportBackup
  };
})();
