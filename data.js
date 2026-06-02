(function () {
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
  const exerciseXp = 5;

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

  window.GymLogData = {
    tips,
    quotes,
    levels,
    baseWorkouts,
    coreExercises,
    stretches,
    cardioTypes,
    repChoices,
    phaseIds,
    exerciseXp,
    createDefaultSchema
  };
})();
