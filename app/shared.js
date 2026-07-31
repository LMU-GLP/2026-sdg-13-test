// Shared demo state for the HeatWatch prototype.
// No backend: state lives in localStorage, and BroadcastChannel pushes
// live updates between the dashboard tab and the check-in tab.

const STORAGE_KEY = "heatwatch_demo_v1";
const CHANNEL_NAME = "heatwatch_demo_channel";
const LIVE_FARMER_ID = "live1";
const CHECKIN_WINDOW_SECONDS = 45; // compressed stand-in for the noon-5pm window

const channel = new BroadcastChannel(CHANNEL_NAME);

function seedFarmers() {
  return [
    {
      id: "f1", name: "Han Yeong-su", age: 72, plot: "Miryang, plot 3",
      status: "overdue", lastCheckIn: null, dueLabel: "12:40 PM", resolvedAt: null,
    },
    {
      id: "f2", name: "Choi Sun-ja", age: 81, plot: "Jinju, greenhouse row 2",
      status: "overdue", lastCheckIn: null, dueLabel: "1:15 PM", resolvedAt: null,
    },
    {
      id: "f3", name: "Oh Deok-bae", age: 68, plot: "Naju, rice paddy",
      status: "due_soon", lastCheckIn: null, dueLabel: "2:00 PM", resolvedAt: null,
    },
    {
      id: "f4", name: "Jang Mi-suk", age: 75, plot: "Gimje, field 9",
      status: "on_time", lastCheckIn: "11:05 AM", dueLabel: null, resolvedAt: null,
    },
    {
      id: "f5", name: "Song Cheol-min", age: 79, plot: "Buyeo, orchard",
      status: "resolved", lastCheckIn: null, dueLabel: "12:15 PM", resolvedAt: "12:58 PM",
    },
    {
      id: LIVE_FARMER_ID, name: "Kang Bok-hee", age: 83, plot: "Hadong, tea field",
      status: "due_soon", lastCheckIn: null, dueLabel: null,
      deadline: Date.now() + CHECKIN_WINDOW_SECONDS * 1000, isLive: true,
    },
  ];
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = { farmers: seedFarmers() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return resetState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  channel.postMessage({ type: "update" });
}

function resetState() {
  const initial = { farmers: seedFarmers() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  channel.postMessage({ type: "update" });
  return initial;
}

function getFarmer(state, id) {
  return state.farmers.find((f) => f.id === id);
}

function startNewCheckinWindow(state) {
  const farmer = getFarmer(state, LIVE_FARMER_ID);
  farmer.status = "due_soon";
  farmer.lastCheckIn = null;
  farmer.resolvedAt = null;
  farmer.deadline = Date.now() + CHECKIN_WINDOW_SECONDS * 1000;
  return farmer;
}

function nowLabel() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function onStateChange(callback) {
  channel.onmessage = (msg) => {
    if (msg.data && msg.data.type === "update") callback();
  };
  // Fallback for browsers/contexts where BroadcastChannel messages
  // don't fire in the originating logic path (e.g. reopened tabs).
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) callback();
  });
}

const STATUS_LABEL = {
  overdue: "Overdue",
  due_soon: "Due soon",
  on_time: "Checked in",
  resolved: "Resolved",
};

const STATUS_ORDER = { overdue: 0, due_soon: 1, on_time: 2, resolved: 3 };
