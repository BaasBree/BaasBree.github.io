const STORAGE_KEY = "gymlog.v3";

const todayKey = () => new Date().toISOString().slice(0, 10);

const tips = [
  "Muscles grow during rest, not during the workout.",
  "Breathe out when you push or pull, breathe in on the way back.",
  "Stop every set with 1-2 reps in reserve.",
  "Rest 60-90 seconds when strength is the goal.",
  "Clean reps beat heavy messy reps.",
  "Warm up first, then chase progress.",
  "If all sets hit the top reps, add weight next time.",
  "Your form is part of the score."
];

const quotes = [
  "You choose again today. Choose yourself.",
  "Small sessions become serious strength.",
  "Show up first. Motivation can catch up later.",
  "One more clean rep is still progress.",
  "Discipline is built in quiet moments.",
  "Make today count, even if it is simple.",
  "The streak starts with one honest session.",
  "You do not need perfect. You need present."
];

const levels = [
  { name: "Beginner", xp: 0 },
  { name: "Amateur", xp: 200 },
  { name: "Rookie Athlete", xp: 500 },
  { name: "Strong Starter", xp: 1000 },
  { name: "Gym Warrior", xp: 2000 },
  { name: "Beast Mode", xp: 3500 }
];

const baseWorkouts = [
  {
    id: "push",
    day: "Tuesday",
    title: "Push Day",
    phase: "Fase 1",
    xp: 50,
    warmup: "Rowing / bike / incline walk - RPE 5-6 (10 min)",
    exercises: [
      { name: "Chest Press Machine", sets: 3, reps: "8-12", rest: 75, note: "Increase weight after 3x12" },
      { name: "Assisted Dips", sets: 3, reps: "6-10", rest: 90, note: "Reduce assist at 3x10" },
      { name: "Incline Chest Press", sets: 2, reps: "8-12", rest: 75, note: "Upper chest focus" },
      { name: "Triceps Rope Pushdown", sets: 2, reps: "10-15", rest: 60, note: "Elbows steady" },
      { name: "Face Pulls", sets: 2, reps: "15-20", rest: 60, note: "Posture exercise" }
    ]
  },
  {
    id: "pull",
    day: "Thursday",
    title: "Pull Day",
    phase: "Fase 1",
    xp: 50,
    warmup: "Rowing / bike / incline walk - RPE 5-6 (10 min)",
    exercises: [
      { name: "Assisted Pull-ups", sets: 4, reps: "5-8", rest: 90, note: "Reduce assist at 4x8" },
      { name: "Seated Cable Row", sets: 3, reps: "8-12", rest: 75, note: "Neutral grip" },
      { name: "Lat Pulldown", sets: 2, reps: "10-12", rest: 75, note: "Pull elbows down" },
      { name: "Reverse Pec Deck", sets: 2, reps: "12-20", rest: 60, note: "Rear delts" },
      { name: "Pallof Press", sets: 2, reps: "10-12", rest: 60, note: "Per side" }
    ]
  },
  {
    id: "legs",
    day: "Saturday",
    title: "Legs + Back",
    phase: "Fase 1",
    xp: 60,
    warmup: "Bike or rower - RPE 5-6 (10 min)",
    exercises: [
      { name: "Leg Press", sets: 3, reps: "10-12", rest: 90, note: "Full control" },
      { name: "Romanian Deadlift DB", sets: 3, reps: "8-12", rest: 90, note: "Stay with one hamstring choice for 4 weeks" },
      { name: "One-arm Cable Row", sets: 3, reps: "10-12", rest: 60, note: "Per side" },
      { name: "Pec Deck / Cable Fly", sets: 2, reps: "12-15", rest: 60, note: "Slow stretch" },
      { name: "Cable Biceps Curl", sets: 2, reps: "10-15", rest: 60, note: "No swinging" }
    ]
  },
  {
    id: "xtra",
    day: "Sunday",
    title: "Xtra Day",
    phase: "Fase 1",
    xp: 30,
    warmup: "Easy cardio - RPE 5-6 (25 min)",
    exercises: [
      { name: "Dead Bug", sets: 2, reps: "10", rest: 45, note: "Per side" },
      { name: "Side Plank", sets: 2, reps: "30-45s", rest: 45, note: "Per side" },
      { name: "Bird Dog", sets: 2, reps: "8", rest: 45, note: "2 sec hold" },
      { name: "Band Pull-aparts", sets: 2, reps: "20", rest: 45, note: "Light and clean" }
    ]
  }
];

const coreExercises = [
  { name: "Plank", meta: "3 sets - 45s - Hips level", timed: true },
  { name: "Dead Bug", meta: "3 sets - 10 reps - Per side", timed: false },
  { name: "Side Plank", meta: "2 sets - 30s - Per side", timed: true },
  { name: "Bicycle Crunches", meta: "3 sets - 20 reps - Slow and controlled", timed: false },
  { name: "Mountain Climbers", meta: "3 sets - 30s - Core tight", timed: true },
  { name: "Leg Raises", meta: "3 sets - 12 reps - Lower back flat", timed: false },
  { name: "Bird Dog", meta: "2 sets - 8 reps - Per side, 2 sec", timed: false },
  { name: "Hollow Body Hold", meta: "3 sets - 20s - Arms overhead", timed: true }
];

const stretches = [
  { name: "Child's Pose", meta: "Back and breathing - 60 sec" },
  { name: "Downward Dog", meta: "Hamstrings and calves - 45 sec" },
  { name: "Cobra Stretch", meta: "Abs and chest - 30 sec" },
  { name: "Hip Flexor Stretch", meta: "Hips and quads - 45 sec per side" },
  { name: "Hamstring Stretch", meta: "Back legs - 45 sec per side" },
  { name: "Thread the Needle", meta: "Shoulders and upper back - 45 sec per side" },
  { name: "Figure Four Stretch", meta: "Glutes and hips - 45 sec per side" },
  { name: "Chest Doorway Stretch", meta: "Chest and front shoulders - 45 sec" }
];

const cardioTypes = [
  { id: "running", name: "Running", shape: "circle" },
  { id: "cycling", name: "Cycling", shape: "diamond" },
  { id: "rowing", name: "Rowing", shape: "square" }
];

const repChoices = ["6", "8", "10", "12", "16"];
const phaseIds = ["phase1", "phase2", "phase3"];
const EXERCISE_XP = 5;

function makePhaseWorkouts(phaseNumber) {
  return baseWorkouts.map((workout) => ({
    ...structuredClone(workout),
    phase: `Fase ${phaseNumber}`,
    exercises: workout.exercises.map((exercise, index) => ({
      ...exercise,
      name: phaseNumber === 1 ? exercise.name : `${exercise.name} ${phaseNumber}.${index + 1}`,
      note: phaseNumber === 1 ? exercise.note : `Dummy phase ${phaseNumber} - edit this`
    }))
  }));
}

function createDefaultSchema() {
  return {
    phase1: { label: "Fase 1", workouts: makePhaseWorkouts(1) },
    phase2: { label: "Fase 2", workouts: makePhaseWorkouts(2) },
    phase3: { label: "Fase 3", workouts: makePhaseWorkouts(3) }
  };
}

const defaultState = {
  xp: 0,
  completions: [],
  gymVisits: [],
  gymVisitPrompts: [],
  doneExercises: {},
  exerciseXpGranted: {},
  repsLog: {},
  kgLog: {},
  activeExercises: {},
  schema: createDefaultSchema(),
  activePhase: "phase1",
  editPhase: "phase1",
  editWorkout: "push",
  menuTab: "nav",
  cardio: { running: [], cycling: [], rowing: [] },
  progress: [],
  profile: {
    startBodyWeight: "",
    startMuscleWeight: "",
    startFatPercentage: "",
    age: "",
    height: ""
  },
  activeRest: 60,
  activeCoreTimer: 30,
  activeStretchTimer: 45,
  openCardio: "running",
  progressTab: "stats",
  lastOpenDate: todayKey(),
  trainingSessionStartedAt: "",
  trainingSessionKey: todayKey(),
  randomTip: tips[Math.floor(Math.random() * tips.length)],
  randomQuote: quotes[Math.floor(Math.random() * quotes.length)],
  customTips: [],
  customQuotes: []
};

let state = loadState();
state.randomTip = randomDifferent(getTipList(), state.randomTip);
state.randomQuote = randomDifferent(getQuoteList(), state.randomQuote);
saveState();
let currentRoute = { page: "home" };
let previousRoute = { page: "home" };
let timer = null;
let timerLeft = 0;
let timerRunning = false;
let holdTimer = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return migrateState(saved);
  } catch {
    return structuredClone(defaultState);
  }
}

function migrateState(saved) {
  const fresh = structuredClone(defaultState);
  if (!saved) return fresh;
  const merged = {
    ...fresh,
    ...saved,
    cardio: { ...fresh.cardio, ...(saved.cardio || {}) },
    profile: { ...fresh.profile, ...(saved.profile || {}) },
    gymVisits: saved.gymVisits || [],
    gymVisitPrompts: saved.gymVisitPrompts || [],
    schema: saved.schema || fresh.schema,
    customTips: saved.customTips || [],
    customQuotes: saved.customQuotes || [],
    activeExercises: saved.activeExercises || {},
    exerciseXpGranted: saved.exerciseXpGranted || {},
    repsLog: saved.repsLog || {},
    kgLog: saved.kgLog || {},
    activePhase: saved.activePhase || "phase1",
    editPhase: saved.editPhase || "phase1",
    editWorkout: saved.editWorkout || "push",
    menuTab: saved.menuTab || "nav",
    trainingSessionStartedAt: saved.trainingSessionStartedAt || "",
    trainingSessionKey: saved.trainingSessionKey || todayKey()
  };
  if (!saved.schema) merged.schema.phase1.workouts = structuredClone(baseWorkouts);
  return merged;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function autoResetDailyTrainingState() {
  const now = Date.now();
  const started = state.trainingSessionStartedAt ? new Date(state.trainingSessionStartedAt).getTime() : 0;
  const expired = !started || now - started > 24 * 60 * 60 * 1000;
  if (!expired) return;
  state.openReps = "";
  state.menuTab = "nav";
  state.lastOpenDate = todayKey();
  state.trainingSessionStartedAt = new Date().toISOString();
  state.trainingSessionKey = `${todayKey()}:${now}`;
  saveState();
}

function $(selector) {
  return document.querySelector(selector);
}

function render() {
  autoResetDailyTrainingState();
  const app = $("#app");
  if (currentRoute.page === "home") app.innerHTML = renderHome();
  if (currentRoute.page === "menu") app.innerHTML = renderMenu();
  if (currentRoute.page === "workout") app.innerHTML = renderWorkout(currentRoute.id);
  if (currentRoute.page === "stretch") app.innerHTML = renderStretch();
  if (currentRoute.page === "cardio") app.innerHTML = renderCardio();
  if (currentRoute.page === "core") app.innerHTML = renderCore();
  if (currentRoute.page === "progress") app.innerHTML = renderProgress();
  if (currentRoute.page === "schemaEdit") app.innerHTML = renderSchemaEdit();
  if (currentRoute.page === "quotesEdit") app.innerHTML = renderQuotesEdit();
  bindEvents();
  syncTimerDisplay();
}

function navigate(page, id) {
  if (page === "menu" && currentRoute.page === "menu") {
    currentRoute = previousRoute;
    render();
    return;
  }
  if (page === "menu") {
    previousRoute = { ...currentRoute };
    state.menuTab = "nav";
    saveState();
  }
  currentRoute = { page, id };
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function getLevelInfo() {
  const current = [...levels].reverse().find((level) => state.xp >= level.xp) || levels[0];
  const next = levels.find((level) => level.xp > state.xp);
  const base = current.xp;
  const target = next ? next.xp : current.xp + 1000;
  const pct = Math.min(100, Math.round(((state.xp - base) / (target - base)) * 100));
  return { current, next, target, pct };
}

function thisWeekCompletions() {
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  start.setHours(0, 0, 0, 0);
  return state.gymVisits.filter((date) => new Date(date) >= start);
}

function getStreakDays() {
  const dates = [...new Set([
    ...state.completions.map((item) => item.date),
    ...state.gymVisits
  ])].sort().reverse();
  if (!dates.length) return 0;
  let cursor = new Date(todayKey());
  let streak = 0;
  const dateSet = new Set(dates);
  while (dateSet.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function getActiveWorkouts() {
  return state.schema[state.activePhase]?.workouts || state.schema.phase1.workouts;
}

function getEditableWorkouts() {
  return state.schema[state.editPhase]?.workouts || state.schema.phase1.workouts;
}

function getWorkout(id) {
  return getActiveWorkouts().find((item) => item.id === id) || getActiveWorkouts()[0];
}

function totalSets(workout) {
  return workout.exercises.reduce((sum, ex) => sum + Number(ex.sets || 0), 0);
}

function getTipList() {
  return [...tips, ...(state.customTips || [])].filter(Boolean);
}

function getQuoteList() {
  return [...quotes, ...(state.customQuotes || [])].filter(Boolean);
}

function dailyKey(group, index = "") {
  return `${state.trainingSessionKey}:${state.activePhase}:${group}${index !== "" ? `:${index}` : ""}`;
}

function renderHome() {
  const level = getLevelInfo();
  const workouts = getActiveWorkouts();
  const phaseLabel = state.schema[state.activePhase]?.label || "Fase 1";
  return `
    <main class="screen">
      <header class="topbar">
        <h1 class="brand">GYMLOG</h1>
        <button class="menu-button" data-nav="menu" aria-label="Open menu"><span></span></button>
      </header>

      <section class="level-panel panel">
        <div class="level-row">
          <div class="level-name">${level.current.name}</div>
          <div class="level-xp">${state.xp} XP / ${level.target}</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="--value:${level.pct}%"></div></div>
        <div class="next-level">${level.next ? `${level.next.xp - state.xp} XP to ${level.next.name}` : "Keep building"}</div>
      </section>

      <section class="stats-grid">
        <div class="stat-card panel">
          <div class="stat-label">Streak</div>
          <div class="stat-value">${getStreakDays()} days</div>
        </div>
        <div class="stat-card panel">
          <div class="stat-label">This Week</div>
          <div class="stat-value">${thisWeekCompletions().length} visits</div>
        </div>
        <div class="stat-card panel">
          <div class="stat-label">Phase</div>
          <div class="stat-value">${phaseLabel}</div>
        </div>
      </section>

      <button class="tip-card" data-random-tip>
        <p class="tip-text">${state.randomTip}</p>
      </button>

      <div class="section-label">Training Days - ${phaseLabel}</div>
      <section class="workout-list">
        ${workouts.map((workout) => `
          <button class="home-card workout-card" data-workout="${workout.id}">
            <div>
              <div class="card-day">${workout.day}</div>
              <div class="card-title">${workout.title}</div>
              <div class="card-meta">${workout.exercises.length} exercises - ${totalSets(workout)} sets</div>
            </div>
            <div class="arrow">-&gt;</div>
          </button>
        `).join("")}
      </section>

      <div class="section-label">More</div>
      <section class="more-list">
        ${moreButton("stretch", "Stretch & Yoga", "Mobility & recovery", "diamond")}
        ${moreButton("cardio", "Cardio", "Running - Cycling - Rowing", "circle")}
        ${moreButton("core", "Core", "Abs & stability - anytime", "solid-diamond")}
      </section>

      <div class="section-label">Progress</div>
      <button class="home-card more progress-home" data-nav="progress">
        <span class="shape triangle"></span>
        <div>
          <div class="card-title">Progress</div>
          <div class="card-meta">Body stats - Gym visits - Levels</div>
        </div>
      </button>

      <button class="quote-card" data-random-quote>
        <strong>"${state.randomQuote}"</strong>
      </button>
    </main>
  `;
}

function moreButton(page, title, meta, shape) {
  return `
    <button class="home-card more" data-nav="${page}">
      <span class="shape ${shape}"></span>
      <div>
        <div class="card-title">${title}</div>
        <div class="card-meta">${meta}</div>
      </div>
    </button>
  `;
}

function renderWorkout(id) {
  const workouts = getActiveWorkouts();
  const workout = getWorkout(id);
  const doneCount = workout.exercises.filter((_, index) => isExerciseDone(workout.id, index)).length;
  const completionId = `${state.activePhase}-${workout.id}`;
  const completed = hasCompletion(completionId);
  return `
    <main class="screen">
      <header class="topbar">
        <button class="back-button" data-nav="home">&larr; Back</button>
        <button class="menu-button" data-nav="menu" aria-label="Open menu"><span></span></button>
      </header>

      <h1 class="page-title">${workout.title}</h1>
      <p class="subtitle">${workout.phase} - ${workout.day}</p>
      <div class="divider"></div>

      <div class="badge-row">
        ${workouts.map((item) => `
          <button class="day-badge ${item.id === workout.id ? "active" : ""}" data-workout="${item.id}">
            ${item.day}
          </button>
        `).join("")}
      </div>

      <div class="row" style="margin-top:14px;">
        <span></span>
        <span class="subtitle">${doneCount} / ${workout.exercises.length} exercises</span>
      </div>

      <section class="warmup-card panel">
        <div class="warmup-title">WARM-UP</div>
        <div class="warmup-copy">${workout.warmup}</div>
      </section>

      ${renderTimerPanel()}

      <section class="exercise-list">
        ${workout.exercises.map((exercise, index) => renderExercise(workout, exercise, index)).join("")}
      </section>

      <button class="finish-button ${completed ? "completed" : ""}" data-finish="${completionId}" data-xp="${workout.xp}">
        ${completed ? "Workout completed today" : `Finish workout +${workout.xp} XP`}
      </button>
    </main>
  `;
}

function renderTimerPanel() {
  return `
    <section class="timer-panel panel">
      <div class="timer-label">REST</div>
      ${[30, 60, 90].map((seconds) => `
        <button class="timer-choice ${state.activeRest === seconds ? "active" : ""}" data-rest="${seconds}">
          ${seconds}s
        </button>
      `).join("")}
      <button class="start-timer ${timerRunning ? "stop" : ""}" data-start-timer>${timerRunning ? "Stop timer" : "Start rest"}</button>
      <div class="timer-display ${timerRunning ? "active" : ""}" id="timerDisplay">${timerRunning ? `${timerLeft}s` : ""}</div>
    </section>
  `;
}

function renderExercise(workout, exercise, index) {
  const done = isExerciseDone(workout.id, index);
  const active = isExerciseActive(workout.id, index);
  const open = state.openReps === `${state.activePhase}-${workout.id}-${index}`;
  const repValue = getRepsValue(workout.id, index);
  const kgValue = getKgValue(workout.id, index);
  return `
    <article class="exercise-card card ${done ? "done" : ""} ${active ? "active" : ""}" data-select-exercise="${workout.id}" data-exercise-index="${index}">
      <div class="exercise-main">
        <div class="exercise-number">${index + 1}</div>
        <div>
          <h2 class="exercise-title">${exercise.name}</h2>
          <div class="exercise-meta">${exercise.sets} sets - ${exercise.reps} reps - ${exercise.rest}s rest</div>
          <div class="exercise-note">${exercise.note}</div>
        </div>
        <button class="done-check ${done ? "checked" : ""}" data-toggle-exercise="${workout.id}" data-exercise-index="${index}" aria-label="Mark exercise done"></button>
      </div>
      <div class="exercise-actions">
        <label class="kg-box">
          <span>kg</span>
          <input type="number" min="0" step="0.5" inputmode="decimal" value="${escapeHtml(kgValue)}" placeholder="-" data-save-kg="${workout.id}" data-exercise-index="${index}">
        </label>
        <button class="reps-toggle" data-hold-reps="${workout.id}" data-exercise-index="${index}">
          ${repValue ? `${repValue} reps` : "hold reps"}
        </button>
        <div class="reps-panel ${open ? "open" : ""}">
          ${repChoices.map((choice) => `
            <button class="rep-choice ${repValue === choice ? "active" : ""}" data-save-reps="${workout.id}" data-exercise-index="${index}" data-rep-value="${choice}">
              ${choice}
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderStretch() {
  const completed = hasCompletion("stretch");
  return `
    <main class="screen">
      ${renderPageTop("Stretch & Yoga", "Mobility & recovery")}
      ${renderStretchTimerPanel()}
      <section class="stretch-grid">
        ${stretches.map((stretch, index) => `
          <article class="stretch-card card ${isExerciseActive("stretch", index) ? "active" : ""} ${isExerciseDone("stretch", index) ? "done" : ""}" data-select-timed="stretch" data-exercise-index="${index}" data-timer-seconds="${getCoreSeconds(stretch.meta)}">
            <div class="pose-art" aria-hidden="true"></div>
            <div>
              <h2 class="pose-title">${stretch.name}</h2>
              <div class="pose-meta">${stretch.meta}</div>
            </div>
            <button class="done-check ${isExerciseDone("stretch", index) ? "checked" : ""}" data-toggle-exercise="stretch" data-exercise-index="${index}" aria-label="Mark stretch done"></button>
          </article>
        `).join("")}
      </section>
      <button class="finish-button ${completed ? "completed" : ""}" data-finish="stretch" data-xp="15">
        ${completed ? "Stretch completed today" : "Finish stretch +15 XP"}
      </button>
    </main>
  `;
}

function renderStretchTimerPanel() {
  return `
    <section class="timer-panel panel">
      <div class="timer-label">STRETCH TIMER</div>
      <div class="timer-chip">${state.activeStretchTimer}s selected</div>
      <button class="start-timer ${timerRunning ? "stop" : ""}" data-start-stretch-timer>${timerRunning ? "Stop timer" : "Start timer"}</button>
      <div class="timer-display ${timerRunning ? "active" : ""}" id="timerDisplay">${timerRunning ? `${timerLeft}s` : ""}</div>
    </section>
  `;
}

function renderCardio() {
  return `
    <main class="screen">
      ${renderPageTop("Cardio", "Running - Cycling - Rowing", "circle")}
      <section class="accordion-list">
        ${cardioTypes.map((type, index) => renderCardioCard(type, index)).join("")}
      </section>
    </main>
  `;
}

function renderCardioCard(type, index) {
  const sessions = state.cardio[type.id] || [];
  const open = state.openCardio === type.id;
  const active = isExerciseActive("cardio", index);
  const done = isExerciseDone("cardio", index);
  return `
    <article class="accordion-card card ${open ? "open" : ""} ${active ? "active" : ""} ${done ? "done" : ""}" data-select-cardio="${type.id}" data-exercise-index="${index}">
      <button class="accordion-head" data-open-cardio="${type.id}" data-exercise-index="${index}">
        <span class="shape ${type.shape}"></span>
        <span>
          <span class="accordion-title">${type.name}</span>
          <span class="accordion-meta">${sessions.length} sessions</span>
        </span>
        <span class="cardio-actions">
          <span class="caret">${open ? "^" : "v"}</span>
          <span class="done-check ${done ? "checked" : ""}" data-toggle-exercise="cardio" data-exercise-index="${index}" role="button" aria-label="Mark cardio done"></span>
        </span>
      </button>
      <div class="accordion-body">
        <div class="section-label" style="margin-top:0;">Log Session</div>
        <div class="form-grid">
          <label class="field">
            <span>Date</span>
            <input class="input" type="date" data-cardio-field="${type.id}:date" value="${todayKey()}">
          </label>
          <div class="form-grid two">
            <label class="field">
              <span>Duration (min)</span>
              <input class="input" type="number" min="0" step="1" inputmode="decimal" placeholder="-" data-cardio-field="${type.id}:duration">
            </label>
            <label class="field">
              <span>Distance (km)</span>
              <input class="input" type="number" min="0" step="0.01" inputmode="decimal" placeholder="-" data-cardio-field="${type.id}:distance">
            </label>
          </div>
          <label class="field">
            <span>Feeling / RPE</span>
            <select class="input" data-cardio-field="${type.id}:rpe">
              <option value="">Choose</option>
              ${[1,2,3,4,5,6,7,8,9,10].map((n) => `<option value="${n}">${n}</option>`).join("")}
            </select>
          </label>
          <button class="primary-button" data-log-cardio="${type.id}">+ Log session</button>
        </div>
        <div class="session-list">
          ${sessions.length ? sessions.slice().reverse().map((session) => `
            <div class="session-row">
              <div>
                <div class="session-title">${session.date}</div>
                <div class="session-meta">${session.duration || "-"} min - ${session.distance || "-"} km - RPE ${session.rpe || "-"}</div>
              </div>
              <span class="shape circle"></span>
            </div>
          `).join("") : `<div class="empty">No sessions yet</div>`}
        </div>
      </div>
    </article>
  `;
}

function renderCore() {
  const completed = hasCompletion("core");
  return `
    <main class="screen">
      ${renderPageTop("Core Training", "Anywhere, anytime", "solid-diamond")}
      ${renderCoreTimerPanel()}
      <section class="exercise-list">
        ${coreExercises.map((exercise, index) => `
          <article class="exercise-card card ${isExerciseDone("core", index) ? "done" : ""} ${isExerciseActive("core", index) ? "active" : ""}" data-select-timed="core" data-exercise-index="${index}" data-timer-seconds="${getCoreSeconds(exercise.meta)}">
            <div class="exercise-main">
              <div></div>
              <div>
                <h2 class="exercise-title">${exercise.name}</h2>
                <div class="exercise-meta">${exercise.meta}</div>
              </div>
              <button class="done-check ${isExerciseDone("core", index) ? "checked" : ""}" data-toggle-exercise="core" data-exercise-index="${index}" aria-label="Mark exercise done"></button>
            </div>
          </article>
        `).join("")}
      </section>
      <button class="finish-button ${completed ? "completed" : ""}" data-finish="core" data-xp="30">
        ${completed ? "Core completed today" : "Finish core +30 XP"}
      </button>
    </main>
  `;
}

function renderCoreTimerPanel() {
  return `
    <section class="timer-panel panel">
      <div class="timer-label">CORE TIMER</div>
      <div class="timer-chip">${state.activeCoreTimer}s selected</div>
      <button class="start-timer ${timerRunning ? "stop" : ""}" data-start-core-timer>${timerRunning ? "Stop timer" : "Start timer"}</button>
      <div class="timer-display ${timerRunning ? "active" : ""}" id="timerDisplay">${timerRunning ? `${timerLeft}s` : ""}</div>
    </section>
  `;
}

function getCoreSeconds(meta) {
  const match = String(meta).match(/(\d+)\s*(?:sec(?:onds?)?|s)\b/i);
  return match ? Number(match[1]) : 30;
}

function renderProgress() {
  const level = getLevelInfo();
  return `
    <main class="screen">
      ${renderPageTop("Progress", "Body stats - Levels - Growth", "triangle")}
      <section class="level-panel panel">
        <div class="level-row">
          <div class="level-name">${level.current.name}</div>
          <div class="level-xp">${state.xp} XP</div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="--value:${level.pct}%"></div></div>
        <div class="next-level">${level.next ? `${level.next.xp - state.xp} XP to ${level.next.name}` : "Max level for now"}</div>
      </section>
      <section class="stats-grid">
        <div class="stat-card panel">
          <div class="stat-label">Gym Visits</div>
          <div class="stat-value">${state.gymVisits.length}</div>
        </div>
        <div class="stat-card panel">
          <div class="stat-label">This Week</div>
          <div class="stat-value">${thisWeekCompletions().length}</div>
        </div>
        <div class="stat-card panel">
          <div class="stat-label">Streak</div>
          <div class="stat-value">${getStreakDays()}</div>
        </div>
      </section>

      <div class="segmented">
        ${["stats", "personal", "history"].map((tab) => `
          <button class="seg-button ${state.progressTab === tab ? "active" : ""}" data-progress-tab="${tab}">
            ${tab === "stats" ? "Stats" : tab === "personal" ? "Personal" : "History"}
          </button>
        `).join("")}
      </div>

      ${state.progressTab === "stats" ? renderProgressStats() : ""}
      ${state.progressTab === "personal" ? renderPersonalInfo() : ""}
      ${state.progressTab === "history" ? renderHistory() : ""}
    </main>
  `;
}

function renderProgressStats() {
  return `
    <section class="chart-card card">
      ${renderChart()}
      <div class="legend">
        <span class="body">Body weight</span>
        <span class="muscle">Muscle weight</span>
        <span class="fat">Fat percentage</span>
      </div>
    </section>
    <section class="card" style="padding:18px;margin-top:16px;">
      <div class="section-label" style="margin-top:0;">Add Measurement</div>
      <div class="form-grid">
        <label class="field"><span>Date</span><input class="input" type="date" data-progress-field="date" value="${todayKey()}"></label>
        <div class="form-grid two">
          <label class="field"><span>Body weight</span><input class="input" type="number" step="0.1" data-progress-field="bodyWeight" placeholder="kg"></label>
          <label class="field"><span>Muscle weight</span><input class="input" type="number" step="0.1" data-progress-field="muscleWeight" placeholder="kg"></label>
        </div>
        <label class="field"><span>Fat percentage</span><input class="input" type="number" step="0.1" data-progress-field="fatPercentage" placeholder="%"></label>
        <button class="primary-button" data-save-progress>Save measurement</button>
      </div>
    </section>
  `;
}

function renderChart() {
  const entries = state.progress.slice(-8);
  if (!entries.length) {
    return `<div class="empty">No progress data yet</div>`;
  }
  const width = 360;
  const height = 180;
  const pad = 20;
  const values = entries.flatMap((item) => [item.bodyWeight, item.muscleWeight, item.fatPercentage]).filter((value) => value !== "" && !Number.isNaN(Number(value))).map(Number);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const scaleY = (value) => {
    if (max === min) return height / 2;
    return height - pad - ((Number(value) - min) / (max - min)) * (height - pad * 2);
  };
  const scaleX = (index) => pad + (index * (width - pad * 2)) / Math.max(1, entries.length - 1);
  const line = (key) => entries.map((item, index) => `${scaleX(index)},${scaleY(item[key])}`).join(" ");
  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Progress chart">
      <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#2a2a2a" />
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#2a2a2a" />
      <polyline points="${line("bodyWeight")}" fill="none" stroke="#ff631c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <polyline points="${line("muscleWeight")}" fill="none" stroke="#34d399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <polyline points="${line("fatPercentage")}" fill="none" stroke="#b45cff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      ${entries.map((item, index) => `<text x="${scaleX(index)}" y="${height - 4}" text-anchor="middle" fill="#6f737a" font-size="10">${item.date.slice(5)}</text>`).join("")}
    </svg>
  `;
}

function renderPersonalInfo() {
  const p = state.profile;
  return `
    <section class="card" style="padding:18px;">
      <div class="form-grid">
        <div class="form-grid two">
          <label class="field"><span>Start body weight</span><input class="input" type="number" step="0.1" data-profile="startBodyWeight" value="${p.startBodyWeight}" placeholder="kg"></label>
          <label class="field"><span>Start muscle weight</span><input class="input" type="number" step="0.1" data-profile="startMuscleWeight" value="${p.startMuscleWeight}" placeholder="kg"></label>
        </div>
        <div class="form-grid two">
          <label class="field"><span>Age</span><input class="input" type="number" step="1" data-profile="age" value="${p.age}" placeholder="years"></label>
          <label class="field"><span>Height</span><input class="input" type="number" step="1" data-profile="height" value="${p.height}" placeholder="cm"></label>
        </div>
        <label class="field"><span>Start fat percentage</span><input class="input" type="number" step="0.1" data-profile="startFatPercentage" value="${p.startFatPercentage}" placeholder="%"></label>
        <button class="primary-button" data-save-profile>Save personal info</button>
      </div>
    </section>
  `;
}

function renderHistory() {
  const rows = state.progress.slice().reverse();
  return `
    <section class="simple-list">
      ${rows.length ? rows.map((item) => `
        <div class="session-row">
          <div>
            <div class="session-title">${item.date}</div>
            <div class="session-meta">Body ${item.bodyWeight || "-"} kg - Muscle ${item.muscleWeight || "-"} kg - Fat ${item.fatPercentage || "-"}%</div>
          </div>
          <span class="shape triangle"></span>
        </div>
      `).join("") : `<div class="empty">No measurements yet</div>`}
    </section>
  `;
}

function renderSchemaEdit() {
  const phase = state.schema[state.editPhase];
  const workouts = getEditableWorkouts();
  const workout = workouts.find((item) => item.id === state.editWorkout) || workouts[0];
  if (workout && workout.id !== state.editWorkout) state.editWorkout = workout.id;
  return `
    <main class="screen">
      ${renderPageTop("Schema Edit", "Adjust phases, days and exercises")}
      <div class="section-label">Phases</div>
      <div class="segmented">
        ${phaseIds.map((id) => `
          <button class="seg-button ${state.editPhase === id ? "active" : ""}" data-schema-phase="${id}">
            ${state.schema[id].label}
          </button>
        `).join("")}
      </div>
      ${state.editPhase !== "phase1" ? `
        <button class="small-button copy-button" data-copy-phase="phase1">Copy Fase 1 into ${phase.label}</button>
      ` : ""}

      <div class="section-label">Training Days</div>
      <div class="badge-row">
        ${workouts.map((item) => `
          <button class="day-badge ${item.id === workout.id ? "active" : ""}" data-edit-workout="${item.id}">
            ${item.day}
          </button>
        `).join("")}
      </div>

      <section class="card edit-card">
        <div class="form-grid two">
          <label class="field"><span>Day</span><input class="input" data-workout-field="day" value="${escapeHtml(workout.day)}"></label>
          <label class="field"><span>Title</span><input class="input" data-workout-field="title" value="${escapeHtml(workout.title)}"></label>
        </div>
        <div class="form-grid two">
          <label class="field"><span>XP</span><input class="input" type="number" data-workout-field="xp" value="${workout.xp}"></label>
          <label class="field"><span>Phase label</span><input class="input" data-phase-label value="${escapeHtml(phase.label)}"></label>
        </div>
        <label class="field"><span>Warm-up</span><textarea class="input textarea" data-workout-field="warmup">${escapeHtml(workout.warmup)}</textarea></label>
      </section>

      <div class="section-label">Exercises</div>
      <section class="exercise-list">
        ${workout.exercises.map((exercise, index) => renderExerciseEdit(exercise, index)).join("")}
      </section>
      <button class="primary-button" data-add-exercise>Add exercise</button>
    </main>
  `;
}

function renderExerciseEdit(exercise, index) {
  return `
    <article class="card edit-card">
      <div class="row">
        <strong>${index + 1}. Exercise</strong>
        <button class="small-button danger" data-delete-exercise="${index}">Delete</button>
      </div>
      <div class="form-grid">
        <label class="field"><span>Name</span><input class="input" data-exercise-field="${index}:name" value="${escapeHtml(exercise.name)}"></label>
        <div class="form-grid two">
          <label class="field"><span>Sets</span><input class="input" type="number" min="1" data-exercise-field="${index}:sets" value="${exercise.sets}"></label>
          <label class="field"><span>Reps range</span><input class="input" data-exercise-field="${index}:reps" value="${escapeHtml(exercise.reps)}"></label>
        </div>
        <div class="form-grid two">
          <label class="field"><span>Rest sec</span><input class="input" type="number" min="0" data-exercise-field="${index}:rest" value="${exercise.rest}"></label>
          <label class="field"><span>Detail</span><input class="input" data-exercise-field="${index}:note" value="${escapeHtml(exercise.note)}"></label>
        </div>
      </div>
    </article>
  `;
}

function renderQuotesEdit() {
  return `
    <main class="screen">
      ${renderPageTop("Quotes Edit", "One line is one tip or quote")}
      <section class="card edit-card">
        <label class="field">
          <span>Extra sport tips</span>
          <textarea class="input textarea large-textarea" data-edit-tips>${escapeHtml((state.customTips || []).join("\n"))}</textarea>
        </label>
        <label class="field">
          <span>Extra motivation quotes</span>
          <textarea class="input textarea large-textarea" data-edit-quotes>${escapeHtml((state.customQuotes || []).join("\n"))}</textarea>
        </label>
        <button class="primary-button" data-save-quotes>Save quotes</button>
      </section>
    </main>
  `;
}

function renderMenu() {
  return `
    <main class="screen menu-screen">
      <header class="topbar">
        <div>
          <h1 class="brand">GYMLOG</h1>
          <div class="menu-subtitle">Menu</div>
        </div>
        <button class="menu-button" data-nav="menu" aria-label="Close menu"><span></span></button>
      </header>
      <div class="divider"></div>

      ${renderMenuTabs()}
      ${renderMenuContent()}

      <section class="menu-settings">
        <div class="setting-row"><span>Dark Mode</span><span>Always on ◆</span></div>
      </section>
    </main>
  `;
}

function renderMenuTabs() {
  const tabs = [
    { id: "nav", icon: "⌂", label: "Nav" },
    { id: "phase", icon: "🏁", label: "Phase" },
    { id: "edit", icon: "⚙", label: "Edit" },
    { id: "info", icon: "📈", label: "Stats" },
    { id: "data", icon: "↺", label: "Data" }
  ];
  return `
    <section class="menu-tabs">
      ${tabs.map((tab) => `
        <button class="menu-tab ${state.menuTab === tab.id ? "active" : ""}" data-menu-tab="${tab.id}">
          <span class="menu-tab-icon">${tab.icon}</span>
          <span>${tab.label}</span>
        </button>
      `).join("")}
    </section>
  `;
}

function renderMenuContent() {
  if (state.menuTab === "edit") {
    return `
      <section class="menu-nav compact-menu">
        <button class="menu-link" data-menu-action="schema"><span class="menu-glyph">⚙</span>Schema Edit</button>
        <button class="menu-link" data-menu-action="quotes"><span class="menu-glyph">✎</span>Quotes Edit</button>
      </section>
    `;
  }
  if (state.menuTab === "info") {
    return `
      <section class="menu-nav compact-menu">
        <button class="menu-link" data-menu-action="personal"><span class="menu-glyph">☉</span>Personal Info</button>
        <button class="menu-link" data-nav="progress"><span class="menu-glyph">📈</span>Progress</button>
      </section>
    `;
  }
  if (state.menuTab === "data") {
    return `
      <section class="menu-nav compact-menu">
        <button class="menu-link" data-menu-action="export"><span class="menu-glyph">⇩</span>Export Backup</button>
        <div class="menu-note">Daily workout checks reset automatically. Your XP, weights, reps, cardio and progress stay saved.</div>
      </section>
    `;
  }
  if (state.menuTab === "phase") {
    return `
      <section class="menu-nav compact-menu">
        ${phaseIds.map((id) => `
          <button class="menu-link" data-set-active-phase="${id}">
            <span class="menu-glyph">${state.activePhase === id ? "🏁" : "◇"}</span>${state.schema[id].label}
          </button>
        `).join("")}
      </section>
    `;
  }
  return `
    <nav class="menu-nav">
      <button class="menu-link" data-nav="home"><span class="menu-glyph">⌂</span>Home</button>
      <button class="menu-link" data-nav="stretch"><span class="menu-glyph">♢</span>Stretch</button>
      <button class="menu-link" data-nav="cardio"><span class="menu-glyph">◉</span>Cardio</button>
      <button class="menu-link" data-nav="core"><span class="menu-glyph">◆</span>Core</button>
      <button class="menu-link" data-nav="progress"><span class="menu-glyph">▲</span>Progress</button>
    </nav>
  `;
}

function renderPageTop(title, subtitle, shape = "") {
  return `
    <header class="topbar">
      <button class="back-button" data-nav="home">&larr; Back</button>
      <button class="menu-button" data-nav="menu" aria-label="Open menu"><span></span></button>
    </header>
    <div class="row">
      <div>
        <h1 class="page-title compact">${shape ? `<span class="shape ${shape}" style="margin-right:10px;"></span>` : ""}${title}</h1>
        <p class="subtitle">${subtitle}</p>
      </div>
    </div>
    <div class="divider"></div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.nav));
  });
  document.querySelectorAll("[data-workout]").forEach((button) => {
    button.addEventListener("click", () => navigate("workout", button.dataset.workout));
  });
  document.querySelectorAll("[data-random-tip]").forEach((button) => {
    button.addEventListener("click", () => {
      state.randomTip = randomDifferent(getTipList(), state.randomTip);
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-random-quote]").forEach((button) => {
    button.addEventListener("click", () => {
      state.randomQuote = randomDifferent(getQuoteList(), state.randomQuote);
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-rest]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeRest = Number(button.dataset.rest);
      saveState();
      render();
    });
  });
  const timerButton = $("[data-start-timer]");
  if (timerButton) timerButton.addEventListener("click", () => toggleTimer(state.activeRest));
  const coreTimerButton = $("[data-start-core-timer]");
  if (coreTimerButton) coreTimerButton.addEventListener("click", () => toggleTimer(state.activeCoreTimer));
  const stretchTimerButton = $("[data-start-stretch-timer]");
  if (stretchTimerButton) stretchTimerButton.addEventListener("click", () => toggleTimer(state.activeStretchTimer));
  document.querySelectorAll("[data-toggle-exercise]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleExercise(button.dataset.toggleExercise, Number(button.dataset.exerciseIndex));
      render();
    });
  });
  document.querySelectorAll("[data-select-exercise]").forEach((card) => {
    card.addEventListener("click", () => {
      selectExercise(card.dataset.selectExercise, Number(card.dataset.exerciseIndex));
      render();
    });
  });
  document.querySelectorAll("[data-select-timed]").forEach((card) => {
    card.addEventListener("click", () => {
      selectTimedItem(card.dataset.selectTimed, Number(card.dataset.exerciseIndex), Number(card.dataset.timerSeconds));
      render();
    });
  });
  document.querySelectorAll("[data-hold-reps]").forEach((button) => {
    const open = (event) => {
      event.preventDefault();
      state.openReps = `${state.activePhase}-${button.dataset.holdReps}-${button.dataset.exerciseIndex}`;
      saveState();
      render();
    };
    button.addEventListener("pointerdown", () => {
      holdTimer = setTimeout(() => open(new Event("hold")), 450);
    });
    button.addEventListener("pointerup", () => clearTimeout(holdTimer));
    button.addEventListener("pointerleave", () => clearTimeout(holdTimer));
    button.addEventListener("click", (event) => event.stopPropagation());
    button.addEventListener("contextmenu", open);
  });
  document.querySelectorAll("[data-save-reps]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      saveReps(button.dataset.saveReps, Number(button.dataset.exerciseIndex), button.dataset.repValue);
      render();
    });
  });
  document.querySelectorAll("[data-save-kg]").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("input", () => {
      saveKg(input.dataset.saveKg, Number(input.dataset.exerciseIndex), input.value);
    });
  });
  document.querySelectorAll("[data-finish]").forEach((button) => {
    button.addEventListener("click", () => finishActivity(button.dataset.finish, Number(button.dataset.xp)));
  });
  document.querySelectorAll("[data-open-cardio]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.openCardio = button.dataset.openCardio;
      selectExercise("cardio", Number(button.dataset.exerciseIndex));
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-select-cardio]").forEach((card) => {
    card.addEventListener("click", () => {
      state.openCardio = card.dataset.selectCardio;
      selectExercise("cardio", Number(card.dataset.exerciseIndex));
      render();
    });
  });
  document.querySelectorAll("[data-log-cardio]").forEach((button) => {
    button.addEventListener("click", () => logCardio(button.dataset.logCardio));
  });
  document.querySelectorAll("[data-core-timer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCoreTimer = Number(button.dataset.coreTimer);
      saveState();
      render();
      setTimeout(() => startTimer(state.activeCoreTimer), 0);
    });
  });
  document.querySelectorAll("[data-core-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCoreTimer = Number(button.dataset.corePreset);
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-progress-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.progressTab = button.dataset.progressTab;
      saveState();
      render();
    });
  });
  const saveProgress = $("[data-save-progress]");
  if (saveProgress) saveProgress.addEventListener("click", saveProgressEntry);
  const saveProfile = $("[data-save-profile]");
  if (saveProfile) saveProfile.addEventListener("click", saveProfileInfo);
  document.querySelectorAll("[data-menu-action]").forEach((button) => {
    button.addEventListener("click", () => handleMenuAction(button.dataset.menuAction));
  });
  document.querySelectorAll("[data-menu-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.menuTab = button.dataset.menuTab;
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-set-active-phase]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePhase = button.dataset.setActivePhase;
      saveState();
      showToast(`${state.schema[state.activePhase].label} active`);
      navigate("home");
    });
  });
  document.querySelectorAll("[data-schema-phase]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editPhase = button.dataset.schemaPhase;
      state.editWorkout = getEditableWorkouts()[0]?.id || "push";
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-edit-workout]").forEach((button) => {
    button.addEventListener("click", () => {
      state.editWorkout = button.dataset.editWorkout;
      saveState();
      render();
    });
  });
  document.querySelectorAll("[data-workout-field]").forEach((input) => {
    input.addEventListener("input", () => updateWorkoutField(input.dataset.workoutField, input.value));
  });
  document.querySelectorAll("[data-phase-label]").forEach((input) => {
    input.addEventListener("input", () => {
      state.schema[state.editPhase].label = input.value || state.schema[state.editPhase].label;
      saveState();
    });
  });
  document.querySelectorAll("[data-exercise-field]").forEach((input) => {
    input.addEventListener("input", () => updateExerciseField(input.dataset.exerciseField, input.value));
  });
  const addExercise = $("[data-add-exercise]");
  if (addExercise) addExercise.addEventListener("click", addNewExercise);
  document.querySelectorAll("[data-delete-exercise]").forEach((button) => {
    button.addEventListener("click", () => deleteExercise(Number(button.dataset.deleteExercise)));
  });
  document.querySelectorAll("[data-copy-phase]").forEach((button) => {
    button.addEventListener("click", () => copyPhase(button.dataset.copyPhase, state.editPhase));
  });
  const saveQuotes = $("[data-save-quotes]");
  if (saveQuotes) saveQuotes.addEventListener("click", saveQuotesEdit);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function randomDifferent(list, current) {
  if (list.length <= 1) return list[0];
  let next = current;
  while (next === current) {
    next = list[Math.floor(Math.random() * list.length)];
  }
  return next;
}

function isExerciseDone(group, index) {
  return Boolean(state.doneExercises[dailyKey(group, index)]);
}

function toggleExercise(group, index) {
  const key = dailyKey(group, index);
  const isNowDone = !state.doneExercises[key];
  state.doneExercises[key] = isNowDone;
  if (isNowDone) {
    awardExerciseXp(key);
    promptGymVisitOnce();
  }
  saveState();
}

function awardExerciseXp(key) {
  if (state.exerciseXpGranted[key]) return;
  state.exerciseXpGranted[key] = true;
  state.xp += EXERCISE_XP;
}

function promptGymVisitOnce() {
  const date = todayKey();
  if (state.gymVisits.includes(date) || state.gymVisitPrompts.includes(date)) return;
  state.gymVisitPrompts.push(date);
  if (confirm("Gym visit toevoegen voor vandaag?")) {
    state.gymVisits.push(date);
    showToast("Gym visit saved");
  }
}

function isExerciseActive(group, index) {
  return state.activeExercises[dailyKey(group)] === Number(index);
}

function selectExercise(group, index) {
  state.activeExercises[dailyKey(group)] = Number(index);
  saveState();
}

function selectTimedItem(group, index, seconds) {
  selectExercise(group, index);
  if (group === "core") state.activeCoreTimer = seconds || state.activeCoreTimer;
  if (group === "stretch") state.activeStretchTimer = seconds || state.activeStretchTimer;
  saveState();
}

function getRepsValue(workoutId, exerciseIndex) {
  const saved = state.repsLog[dailyKey(workoutId, exerciseIndex)] || "";
  if (Array.isArray(saved)) return saved.find(Boolean) || "";
  return saved;
}

function saveReps(workoutId, exerciseIndex, value) {
  state.repsLog[dailyKey(workoutId, exerciseIndex)] = value;
  state.openReps = "";
  saveState();
  showToast("Reps saved");
}

function getKgValue(workoutId, exerciseIndex) {
  return state.kgLog[dailyKey(workoutId, exerciseIndex)] || "";
}

function saveKg(workoutId, exerciseIndex, value) {
  state.kgLog[dailyKey(workoutId, exerciseIndex)] = value;
  saveState();
}

function hasCompletion(id) {
  return state.completions.some((item) => item.id === id && item.date === todayKey());
}

function finishActivity(id, xp) {
  if (hasCompletion(id)) {
    showToast("Already completed today. XP stays fair.");
    return;
  }
  state.completions.push({
    id,
    xp,
    date: todayKey(),
    time: new Date().toISOString()
  });
  state.xp += xp;
  saveState();
  showToast(`Nice work. +${xp} XP`);
  render();
}

function logCardio(type) {
  const get = (field) => document.querySelector(`[data-cardio-field="${type}:${field}"]`)?.value || "";
  const session = {
    date: get("date") || todayKey(),
    duration: get("duration"),
    distance: get("distance"),
    rpe: get("rpe"),
    time: new Date().toISOString()
  };
  if (!session.duration && !session.distance) {
    showToast("Add duration or distance first");
    return;
  }
  state.cardio[type].push(session);
  state.completions.push({
    id: `cardio-${type}-${Date.now()}`,
    xp: 25,
    date: session.date,
    time: new Date().toISOString()
  });
  state.xp += 25;
  saveState();
  showToast("Cardio logged. +25 XP");
  render();
}

function saveProgressEntry() {
  const get = (field) => document.querySelector(`[data-progress-field="${field}"]`)?.value || "";
  const entry = {
    date: get("date") || todayKey(),
    bodyWeight: get("bodyWeight"),
    muscleWeight: get("muscleWeight"),
    fatPercentage: get("fatPercentage")
  };
  if (!entry.bodyWeight && !entry.muscleWeight && !entry.fatPercentage) {
    showToast("Add at least one measurement");
    return;
  }
  const existingIndex = state.progress.findIndex((item) => item.date === entry.date);
  if (existingIndex >= 0) {
    state.progress[existingIndex] = entry;
  } else {
    state.progress.push(entry);
  }
  state.progress.sort((a, b) => a.date.localeCompare(b.date));
  saveState();
  showToast("Progress saved");
  render();
}

function saveProfileInfo() {
  document.querySelectorAll("[data-profile]").forEach((input) => {
    state.profile[input.dataset.profile] = input.value;
  });
  saveState();
  showToast("Personal info saved");
}

function currentEditableWorkout() {
  const workouts = getEditableWorkouts();
  return workouts.find((item) => item.id === state.editWorkout) || workouts[0];
}

function updateWorkoutField(field, value) {
  const workout = currentEditableWorkout();
  if (!workout) return;
  workout[field] = field === "xp" ? Number(value || 0) : value;
  saveState();
}

function updateExerciseField(payload, value) {
  const [indexText, field] = payload.split(":");
  const workout = currentEditableWorkout();
  const exercise = workout?.exercises[Number(indexText)];
  if (!exercise) return;
  exercise[field] = ["sets", "rest"].includes(field) ? Number(value || 0) : value;
  saveState();
}

function addNewExercise() {
  const workout = currentEditableWorkout();
  if (!workout) return;
  workout.exercises.push({
    name: "New Exercise",
    sets: 2,
    reps: "8-12",
    rest: 60,
    note: "Edit this detail"
  });
  saveState();
  render();
}

function deleteExercise(index) {
  const workout = currentEditableWorkout();
  if (!workout || !workout.exercises[index]) return;
  if (!confirm("Delete this exercise?")) return;
  workout.exercises.splice(index, 1);
  saveState();
  render();
}

function copyPhase(sourceId, targetId) {
  if (sourceId === targetId || !state.schema[sourceId] || !state.schema[targetId]) return;
  if (!confirm(`Copy ${state.schema[sourceId].label} into ${state.schema[targetId].label}?`)) return;
  const label = state.schema[targetId].label;
  state.schema[targetId].workouts = structuredClone(state.schema[sourceId].workouts).map((workout) => ({
    ...workout,
    phase: label
  }));
  saveState();
  render();
  showToast(`${label} copied`);
}

function saveQuotesEdit() {
  const splitLines = (value) => value.split("\n").map((line) => line.trim()).filter(Boolean);
  state.customTips = splitLines($("[data-edit-tips]")?.value || "");
  state.customQuotes = splitLines($("[data-edit-quotes]")?.value || "");
  saveState();
  showToast("Quotes saved");
}

function exportBackup() {
  const backup = {
    app: "GYMLOG",
    version: STORAGE_KEY,
    exportedAt: new Date().toISOString(),
    data: state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `gymlog-backup-${todayKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Backup exported");
}

function handleMenuAction(action) {
  if (action === "personal") {
    state.progressTab = "personal";
    saveState();
    navigate("progress");
    return;
  }
  if (action === "export") {
    exportBackup();
    return;
  }
  if (action === "schema") {
    navigate("schemaEdit");
    return;
  }
  if (action === "quotes") {
    navigate("quotesEdit");
  }
}

function toggleTimer(seconds) {
  if (timerRunning) {
    stopTimer("Timer stopped");
    render();
    return;
  }
  startTimer(seconds);
}

function startTimer(seconds) {
  clearTimer();
  timerLeft = seconds;
  timerRunning = true;
  const display = $("#timerDisplay");
  if (!display) {
    showToast(`${seconds}s timer started`);
    return;
  }
  display.classList.add("active");
  updateTimerDisplay(display);
  timer = setInterval(() => {
    timerLeft -= 1;
    syncTimerDisplay();
    if (timerLeft <= 0) {
      clearTimer();
      showToast("Rest done. Go again.");
      syncTimerDisplay();
    }
  }, 1000);
  render();
}

function updateTimerDisplay(display) {
  display.textContent = `${Math.max(0, timerLeft)}s`;
}

function syncTimerDisplay() {
  const display = $("#timerDisplay");
  if (!display) return;
  display.classList.toggle("active", timerRunning);
  if (timerRunning) updateTimerDisplay(display);
}

function stopTimer(message) {
  clearTimer();
  if (message) showToast(message);
}

function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  timerRunning = false;
}

let toastTimer = null;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

window.addEventListener("beforeunload", saveState);

render();
