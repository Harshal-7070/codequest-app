import { useState, useEffect, useRef } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const PATHS = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "#3B82F6",
    bg: "#1E3A5F",
    tagline: "Learn the world's most loved language",
    units: [
      {
        id: "u1",
        title: "First Steps",
        icon: "🌱",
        lessons: [
          {
            id: "l1",
            title: "Hello, World!",
            xp: 15,
            type: "intro",
            exercises: [
              {
                type: "multiple_choice",
                question: "What does print() do in Python?",
                code: 'print("Hello, World!")',
                options: ["Displays output to the screen", "Creates a variable", "Defines a function", "Imports a module"],
                answer: 0,
                explanation: "print() is Python's built-in function for displaying output to the console.",
              },
              {
                type: "fill_blank",
                question: "Complete the code to print 'Hi there!'",
                code: '____("Hi there!")',
                blanks: ["print"],
                hint: "The function that shows output starts with 'p'",
              },
              {
                type: "arrange",
                question: "Arrange the words to create a valid print statement:",
                words: ['"Hello"', "print", "(", ")"],
                answer: ['print', '(', '"Hello"', ')'],
              },
              {
                type: "tap_correct",
                question: "Which is the correct Python print statement?",
                options: ['print("Hey")', 'Print("Hey")', 'PRINT("Hey")', 'printf("Hey")'],
                answer: 0,
                explanation: "Python is case-sensitive. 'print' must be lowercase.",
              },
            ],
          },
          {
            id: "l2",
            title: "Variables",
            xp: 20,
            type: "concept",
            exercises: [
              {
                type: "multiple_choice",
                question: "What will x hold after this code?",
                code: "x = 42",
                options: ["The number 42", "The string '42'", "Nothing", "An error"],
                answer: 0,
                explanation: "In Python, = assigns a value to a variable. x now holds the integer 42.",
              },
              {
                type: "fill_blank",
                question: "Store the value 'Alice' in a variable called name:",
                code: 'name ____ "Alice"',
                blanks: ["="],
                hint: "The assignment operator is a single character",
              },
              {
                type: "multiple_choice",
                question: "Which variable name is valid in Python?",
                options: ["my_name", "2name", "my-name", "my name"],
                answer: 0,
                explanation: "Variable names can't start with numbers or contain hyphens/spaces.",
              },
              {
                type: "code_output",
                question: "What will this code print?",
                code: 'city = "Tokyo"\nprint(city)',
                options: ["Tokyo", '"Tokyo"', "city", "Error"],
                answer: 0,
                explanation: "print(city) outputs the value stored in city, not the variable name.",
              },
            ],
          },
          {
            id: "l3",
            title: "Data Types",
            xp: 25,
            type: "concept",
            exercises: [
              {
                type: "multiple_choice",
                question: "What type is the value 3.14?",
                code: "pi = 3.14",
                options: ["float", "int", "str", "bool"],
                answer: 0,
                explanation: "Numbers with decimal points are floats (floating-point numbers).",
              },
              {
                type: "tap_correct",
                question: "Which is a string (text) in Python?",
                options: ['"Hello"', '42', 'True', '3.14'],
                answer: 0,
                explanation: "Strings are wrapped in quotes. 42 is int, True is bool, 3.14 is float.",
              },
              {
                type: "fill_blank",
                question: "Complete the boolean value:",
                code: "is_raining = ____",
                blanks: ["True"],
                hint: "Boolean values are True or False (capitalize first letter)",
              },
            ],
          },
        ],
      },
      {
        id: "u2",
        title: "Decisions",
        icon: "🔀",
        locked: true,
        lessons: [
          {
            id: "l4",
            title: "If Statements",
            xp: 25,
            type: "concept",
            exercises: [
              {
                type: "multiple_choice",
                question: "What will this print?",
                code: 'age = 20\nif age >= 18:\n    print("Adult")',
                options: ["Adult", "Nothing", "age", "Error"],
                answer: 0,
                explanation: "Since 20 >= 18 is True, the indented block runs and prints 'Adult'.",
              },
              {
                type: "arrange",
                question: "Build a correct if statement:",
                words: ["score", ">", "if", "50:", "print(\"Pass\")"],
                answer: ["if", "score", ">", "50:", "print(\"Pass\")"],
              },
            ],
          },
          {
            id: "l5",
            title: "Else & Elif",
            xp: 30,
            type: "challenge",
            exercises: [
              {
                type: "multiple_choice",
                question: "What does 'elif' mean in Python?",
                options: ["else if", "end if", "else loop", "elif is invalid"],
                answer: 0,
                explanation: "elif is short for 'else if' — it checks another condition if the previous one was False.",
              },
            ],
          },
        ],
      },
      {
        id: "u3",
        title: "Loops",
        icon: "🔄",
        locked: true,
        lessons: [
          {
            id: "l6",
            title: "For Loops",
            xp: 30,
            type: "concept",
            exercises: [
              {
                type: "code_output",
                question: "How many times will 'Hi' be printed?",
                code: "for i in range(3):\n    print('Hi')",
                options: ["3 times", "2 times", "4 times", "Once"],
                answer: 0,
                explanation: "range(3) generates [0, 1, 2] — three values, so the loop runs 3 times.",
              },
            ],
          },
          {
            id: "l7",
            title: "While Loops",
            xp: 35,
            type: "challenge",
            exercises: [
              {
                type: "multiple_choice",
                question: "When does a while loop stop?",
                code: "while condition:\n    # code",
                options: ["When condition becomes False", "After 10 runs", "When it hits break only", "Never"],
                answer: 0,
                explanation: "A while loop keeps running as long as its condition is True. It stops when the condition becomes False.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "js",
    name: "JavaScript",
    icon: "⚡",
    color: "#F59E0B",
    bg: "#3D2E00",
    tagline: "The language of the web",
    units: [
      {
        id: "ju1",
        title: "Basics",
        icon: "🌟",
        lessons: [
          {
            id: "jl1",
            title: "Console & Variables",
            xp: 15,
            type: "intro",
            exercises: [
              {
                type: "multiple_choice",
                question: "How do you declare a variable in modern JavaScript?",
                code: "___ name = 'Alice';",
                options: ["let", "var only", "variable", "def"],
                answer: 0,
                explanation: "Modern JS uses let (can change) and const (can't change). var is older and less preferred.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    color: "#EF4444",
    bg: "#3D0A0A",
    tagline: "Build the structure of the web",
    units: [
      {
        id: "hu1",
        title: "Tags & Elements",
        icon: "🏗️",
        lessons: [
          {
            id: "hl1",
            title: "Your First Tag",
            xp: 10,
            type: "intro",
            exercises: [
              {
                type: "multiple_choice",
                question: "What does HTML stand for?",
                options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "HyperText Modern Layout"],
                answer: 0,
                explanation: "HTML = HyperText Markup Language. It's the standard language for creating web pages.",
              },
            ],
          },
        ],
      },
    ],
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function XPBar({ xp, maxXP = 300, level }) {
  const pct = Math.min((xp / maxXP) * 100, 100);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ fontSize: 13, color: "#94A3B8", whiteSpace: "nowrap", fontFamily: "'Space Mono', monospace" }}>
        LVL {level}
      </div>
      <div style={{ flex: 1, height: 8, background: "#1E293B", borderRadius: 99, overflow: "hidden", border: "1px solid #334155" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, #22D3EE, #3B82F6)",
            borderRadius: 99,
            transition: "width 0.6s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: "0 0 10px #22D3EE88",
          }}
        />
      </div>
      <div style={{ fontSize: 12, color: "#64748B", whiteSpace: "nowrap", fontFamily: "'Space Mono', monospace" }}>
        {xp}/{maxXP}
      </div>
    </div>
  );
}

function StreakFlame({ streak }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#FF6B1520", border: "1px solid #FF6B1540", borderRadius: 20, padding: "4px 12px" }}>
      <span style={{ fontSize: 18, filter: streak > 0 ? "none" : "grayscale(1)" }}>🔥</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: "bold", color: streak > 0 ? "#FF6B15" : "#475569" }}>
        {streak}
      </span>
    </div>
  );
}

function HeartBar({ hearts }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3].map(i => (
        <span key={i} style={{ fontSize: 18, filter: i <= hearts ? "none" : "grayscale(1) opacity(0.3)", transition: "all 0.3s" }}>❤️</span>
      ))}
    </div>
  );
}

function GemCount({ gems }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#7C3AED20", border: "1px solid #7C3AED40", borderRadius: 20, padding: "4px 12px" }}>
      <span style={{ fontSize: 16 }}>💎</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, fontWeight: "bold", color: "#A78BFA" }}>{gems}</span>
    </div>
  );
}

// ─── EXERCISE COMPONENTS ─────────────────────────────────────────────────────

function CodeBlock({ code }) {
  if (!code) return null;
  return (
    <div style={{
      background: "#0D1117",
      border: "1px solid #21262D",
      borderRadius: 12,
      padding: "16px 20px",
      margin: "16px 0",
      fontFamily: "'Space Mono', monospace",
      fontSize: 14,
      lineHeight: 1.7,
      color: "#E6EDF3",
      whiteSpace: "pre",
      overflowX: "auto",
      boxShadow: "0 4px 20px #00000050",
    }}>
      {code.split("\n").map((line, i) => (
        <div key={i} style={{ display: "flex", gap: 16 }}>
          <span style={{ color: "#30363D", userSelect: "none", minWidth: 16, textAlign: "right" }}>{i + 1}</span>
          <span>{highlightPython(line)}</span>
        </div>
      ))}
    </div>
  );
}

function highlightPython(line) {
  const keywords = ["print", "if", "else", "elif", "for", "while", "in", "range", "def", "return", "True", "False", "None", "let", "const", "var", "console", "function"];
  const parts = [];
  let rest = line;
  // strings
  const strMatch = rest.match(/(".*?"|'.*?')/);
  if (strMatch) {
    const idx = rest.indexOf(strMatch[0]);
    const before = rest.slice(0, idx);
    const after = rest.slice(idx + strMatch[0].length);
    return (
      <>
        {before && <span>{colorize(before, keywords)}</span>}
        <span style={{ color: "#A5D6FF" }}>{strMatch[0]}</span>
        {after && <span>{colorize(after, keywords)}</span>}
      </>
    );
  }
  return <span>{colorize(rest, keywords)}</span>;
}

function colorize(text, keywords) {
  const parts = text.split(/(\b\w+\b)/);
  return parts.map((p, i) => {
    if (keywords.includes(p)) return <span key={i} style={{ color: "#FF79C6" }}>{p}</span>;
    if (/^\d+$/.test(p)) return <span key={i} style={{ color: "#BD93F9" }}>{p}</span>;
    if (["=", ">", "<", "+", "-", "*", "/", ":", "(", ")", "[", "]"].includes(p)) return <span key={i} style={{ color: "#FF6BC1" }}>{p}</span>;
    return <span key={i}>{p}</span>;
  });
}

function MultipleChoiceExercise({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handle = (idx) => {
    if (submitted) return;
    setSelected(idx);
    setSubmitted(true);
    setTimeout(() => onAnswer(idx === exercise.answer), 1200);
  };

  return (
    <div>
      <CodeBlock code={exercise.code} />
      <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
        {exercise.options.map((opt, i) => {
          let bg = "#1E293B", border = "#334155", color = "#CBD5E1";
          if (submitted) {
            if (i === exercise.answer) { bg = "#14532D"; border = "#22C55E"; color = "#86EFAC"; }
            else if (i === selected) { bg = "#450A0A"; border = "#EF4444"; color = "#FCA5A5"; }
          } else if (i === selected) { bg = "#1E3A5F"; border = "#3B82F6"; color = "#93C5FD"; }
          return (
            <button
              key={i}
              onClick={() => handle(i)}
              style={{
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 12,
                padding: "14px 18px",
                color,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                textAlign: "left",
                cursor: submitted ? "default" : "pointer",
                transition: "all 0.25s",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: border, minWidth: 22 }}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
              {submitted && i === exercise.answer && <span style={{ marginLeft: "auto" }}>✓</span>}
              {submitted && i === selected && i !== exercise.answer && <span style={{ marginLeft: "auto" }}>✗</span>}
            </button>
          );
        })}
      </div>
      {submitted && exercise.explanation && (
        <div style={{ marginTop: 14, padding: "12px 16px", background: "#0F172A", borderLeft: "3px solid #22C55E", borderRadius: "0 8px 8px 0", color: "#94A3B8", fontSize: 14, lineHeight: 1.6 }}>
          💡 {exercise.explanation}
        </div>
      )}
    </div>
  );
}

function FillBlankExercise({ exercise, onAnswer }) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handle = () => {
    if (submitted) return;
    const isCorrect = value.trim().toLowerCase() === exercise.blanks[0].toLowerCase();
    setSubmitted(true);
    setCorrect(isCorrect);
    setTimeout(() => onAnswer(isCorrect), 1200);
  };

  const displayCode = submitted
    ? exercise.code.replace("____", `[${exercise.blanks[0]}]`)
    : exercise.code.replace("____", value || "____");

  return (
    <div>
      <CodeBlock code={displayCode} />
      {exercise.hint && !submitted && (
        <div style={{ color: "#64748B", fontSize: 13, marginBottom: 10, fontStyle: "italic" }}>
          Hint: {exercise.hint}
        </div>
      )}
      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === "Enter" && value && handle()}
          placeholder="Type your answer..."
          disabled={submitted}
          style={{
            flex: 1,
            background: submitted ? (correct ? "#14532D" : "#450A0A") : "#1E293B",
            border: `2px solid ${submitted ? (correct ? "#22C55E" : "#EF4444") : "#334155"}`,
            borderRadius: 10,
            padding: "12px 16px",
            color: "#E2E8F0",
            fontFamily: "'Space Mono', monospace",
            fontSize: 15,
            outline: "none",
          }}
        />
        <button
          onClick={handle}
          disabled={!value || submitted}
          style={{
            background: value && !submitted ? "#3B82F6" : "#1E293B",
            border: "none",
            borderRadius: 10,
            padding: "12px 20px",
            color: value && !submitted ? "#fff" : "#475569",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "bold",
            cursor: value && !submitted ? "pointer" : "default",
            transition: "all 0.2s",
          }}
        >
          Check
        </button>
      </div>
      {submitted && (
        <div style={{ marginTop: 12, fontSize: 15, fontWeight: "bold", color: correct ? "#22C55E" : "#EF4444" }}>
          {correct ? "🎉 Correct!" : `❌ The answer was: ${exercise.blanks[0]}`}
        </div>
      )}
    </div>
  );
}

function ArrangeExercise({ exercise, onAnswer }) {
  const [available, setAvailable] = useState(() => [...exercise.words].sort(() => Math.random() - 0.5));
  const [arranged, setArranged] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const pick = (word, i) => {
    if (submitted) return;
    setArranged(a => [...a, word]);
    setAvailable(a => a.filter((_, idx) => idx !== i));
  };

  const unpick = (word, i) => {
    if (submitted) return;
    setAvailable(a => [...a, word]);
    setArranged(a => a.filter((_, idx) => idx !== i));
  };

  const check = () => {
    if (submitted || arranged.length < exercise.words.length) return;
    const isCorrect = JSON.stringify(arranged) === JSON.stringify(exercise.answer);
    setSubmitted(true);
    setCorrect(isCorrect);
    setTimeout(() => onAnswer(isCorrect), 1400);
  };

  const chipStyle = (active, correct, wrong) => ({
    padding: "8px 14px",
    borderRadius: 8,
    background: wrong ? "#450A0A" : correct ? "#14532D" : active ? "#1E3A5F" : "#1E293B",
    border: `2px solid ${wrong ? "#EF4444" : correct ? "#22C55E" : active ? "#3B82F6" : "#334155"}`,
    color: "#E2E8F0",
    fontFamily: "'Space Mono', monospace",
    fontSize: 14,
    cursor: submitted ? "default" : "pointer",
    transition: "all 0.15s",
  });

  const isWrong = submitted && !correct;
  const isCorrectFinal = submitted && correct;

  return (
    <div>
      <div style={{ minHeight: 52, background: "#0D1117", border: "2px solid " + (isWrong ? "#EF4444" : isCorrectFinal ? "#22C55E" : "#21262D"), borderRadius: 12, padding: "10px 14px", display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        {arranged.length === 0 && <span style={{ color: "#30363D", fontStyle: "italic", fontSize: 14 }}>Tap words to arrange them here…</span>}
        {arranged.map((w, i) => (
          <button key={i} onClick={() => unpick(w, i)} style={chipStyle(true, isCorrectFinal, isWrong)}>{w}</button>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {available.map((w, i) => (
          <button key={i} onClick={() => pick(w, i)} style={chipStyle(false, false, false)}>{w}</button>
        ))}
      </div>
      <button
        onClick={check}
        disabled={arranged.length < exercise.words.length || submitted}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 12,
          border: "none",
          background: arranged.length === exercise.words.length && !submitted ? "linear-gradient(135deg, #3B82F6, #6366F1)" : "#1E293B",
          color: arranged.length === exercise.words.length && !submitted ? "#fff" : "#475569",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: "bold",
          fontSize: 16,
          cursor: arranged.length === exercise.words.length && !submitted ? "pointer" : "default",
          transition: "all 0.2s",
        }}
      >
        {submitted ? (correct ? "🎉 Correct!" : "❌ Try Again") : "Check Answer"}
      </button>
    </div>
  );
}

// ─── LESSON SCREEN ───────────────────────────────────────────────────────────

function LessonScreen({ lesson, pathColor, onComplete, onExit }) {
  const [exIdx, setExIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [xpEarned, setXpEarned] = useState(0);
  const [showXPBurst, setShowXPBurst] = useState(false);

  const exercises = lesson.exercises;
  const total = exercises.length;
  const progress = exIdx / total;

  const handleAnswer = (correct) => {
    setLastCorrect(correct);
    if (!correct) {
      setHearts(h => Math.max(0, h - 1));
    } else {
      const earned = Math.floor(lesson.xp / total);
      setXpEarned(x => x + earned);
      setCorrectCount(c => c + 1);
      setShowXPBurst(true);
      setTimeout(() => setShowXPBurst(false), 800);
    }
    setTimeout(() => {
      setLastCorrect(null);
      if (exIdx + 1 >= total) {
        setShowResult(true);
      } else {
        setExIdx(i => i + 1);
      }
    }, 1300);
  };

  const ex = exercises[exIdx];

  if (showResult) {
    const stars = correctCount === total ? 3 : correctCount >= total * 0.7 ? 2 : 1;
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: 72, marginBottom: 16, animation: "pop 0.5s ease" }}>
          {["⭐", "⭐⭐", "⭐⭐⭐"][stars - 1]}
        </div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 28, fontWeight: 800, color: "#F1F5F9", marginBottom: 8 }}>
          Lesson Complete!
        </h2>
        <div style={{ color: "#64748B", marginBottom: 32, fontSize: 16 }}>
          {correctCount}/{total} correct
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 32 }}>
          {[{ icon: "⚡", label: "XP Earned", value: `+${xpEarned}` }, { icon: "✅", label: "Correct", value: correctCount }, { icon: "❤️", label: "Hearts Left", value: hearts }].map(s => (
            <div key={s.label} style={{ background: "#1E293B", borderRadius: 16, padding: "16px 20px", border: "1px solid #334155" }}>
              <div style={{ fontSize: 24 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 20, fontWeight: "bold", color: "#F1F5F9" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#64748B" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onComplete(xpEarned)}
          style={{
            background: "linear-gradient(135deg, #3B82F6, #6366F1)",
            border: "none",
            borderRadius: 14,
            padding: "16px 48px",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
            boxShadow: "0 8px 24px #3B82F640",
          }}
        >
          Continue →
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <button onClick={onExit} style={{ background: "none", border: "none", color: "#475569", fontSize: 20, cursor: "pointer" }}>✕</button>
        <div style={{ flex: 1, height: 10, background: "#1E293B", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(exIdx / total) * 100}%`, background: `linear-gradient(90deg, ${pathColor}, ${pathColor}cc)`, borderRadius: 99, transition: "width 0.5s ease", boxShadow: `0 0 12px ${pathColor}88` }} />
        </div>
        <HeartBar hearts={hearts} />
      </div>

      {/* Exercise count */}
      <div style={{ fontSize: 12, color: "#475569", marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>
        {exIdx + 1} / {total}
      </div>

      {/* Question */}
      <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>
        {ex.question}
      </h3>

      {/* Exercise content */}
      <div style={{ flex: 1 }}>
        {ex.type === "multiple_choice" || ex.type === "code_output" ? (
          <MultipleChoiceExercise key={exIdx} exercise={ex} onAnswer={handleAnswer} />
        ) : ex.type === "fill_blank" ? (
          <FillBlankExercise key={exIdx} exercise={ex} onAnswer={handleAnswer} />
        ) : ex.type === "arrange" ? (
          <ArrangeExercise key={exIdx} exercise={ex} onAnswer={handleAnswer} />
        ) : ex.type === "tap_correct" ? (
          <MultipleChoiceExercise key={exIdx} exercise={ex} onAnswer={handleAnswer} />
        ) : null}
      </div>

      {/* XP burst */}
      {showXPBurst && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: 32, fontWeight: "bold", color: "#22C55E", fontFamily: "'Space Mono', monospace", pointerEvents: "none", animation: "floatUp 0.8s ease forwards", zIndex: 999 }}>
          +XP ✨
        </div>
      )}

      {/* Answer feedback bar */}
      {lastCorrect !== null && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "20px 24px", background: lastCorrect ? "#14532D" : "#450A0A", borderTop: `3px solid ${lastCorrect ? "#22C55E" : "#EF4444"}`, display: "flex", alignItems: "center", gap: 12, zIndex: 100 }}>
          <span style={{ fontSize: 24 }}>{lastCorrect ? "🎉" : "💔"}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "bold", fontSize: 18, color: lastCorrect ? "#86EFAC" : "#FCA5A5" }}>
            {lastCorrect ? "Brilliant!" : "Keep going!"}
          </span>
        </div>
      )}

      <style>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translate(-50%,-50%); }
          100% { opacity: 0; transform: translate(-50%,-120%); }
        }
        @keyframes pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─── PATH MAP ────────────────────────────────────────────────────────────────

function PathMap({ path, progress, onSelectLesson }) {
  const completedLessons = progress.completedLessons || {};
  const all = path.units.flatMap(u => u.lessons.map(l => ({ ...l, unit: u })));
  const totalDone = all.filter(l => completedLessons[l.id]).length;
  const totalLessons = all.length;

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 32, padding: "24px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>{path.icon}</div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 800, color: "#F1F5F9" }}>{path.name}</h2>
        <p style={{ color: "#64748B", fontSize: 14 }}>{path.tagline}</p>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
          <div style={{ height: 6, width: 120, background: "#1E293B", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(totalDone / totalLessons) * 100}%`, background: path.color, borderRadius: 99 }} />
          </div>
          <span style={{ fontSize: 12, color: "#475569", fontFamily: "'Space Mono', monospace" }}>{totalDone}/{totalLessons}</span>
        </div>
      </div>

      {path.units.map((unit, uIdx) => {
        const unitDone = unit.lessons.filter(l => completedLessons[l.id]).length;
        const isLocked = unit.locked && unitDone === 0 && uIdx > 0;
        return (
          <div key={unit.id} style={{ marginBottom: 32 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 16,
              padding: "12px 16px",
              background: isLocked ? "#0F172A" : `${path.bg}`,
              borderRadius: 14,
              border: `1px solid ${isLocked ? "#1E293B" : path.color + "40"}`,
            }}>
              <span style={{ fontSize: 22, filter: isLocked ? "grayscale(1)" : "none" }}>{unit.icon}</span>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: isLocked ? "#475569" : "#F1F5F9" }}>{unit.title}</div>
                <div style={{ fontSize: 12, color: "#475569" }}>{unitDone}/{unit.lessons.length} lessons</div>
              </div>
              {isLocked && <span style={{ marginLeft: "auto", fontSize: 18 }}>🔒</span>}
            </div>

            <div style={{ display: "grid", gap: 10, paddingLeft: 16 }}>
              {unit.lessons.map((lesson, lIdx) => {
                const done = !!completedLessons[lesson.id];
                const prevDone = lIdx === 0 || !!completedLessons[unit.lessons[lIdx - 1]?.id];
                const locked = isLocked || (!done && !prevDone && lIdx > 0);
                const typeIcons = { intro: "📖", concept: "💡", challenge: "⚔️" };

                return (
                  <button
                    key={lesson.id}
                    onClick={() => !locked && onSelectLesson(lesson, unit)}
                    style={{
                      background: done ? `${path.bg}` : locked ? "#0F172A" : "#1E293B",
                      border: `2px solid ${done ? path.color : locked ? "#1E293B" : "#334155"}`,
                      borderRadius: 14,
                      padding: "14px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      cursor: locked ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                      textAlign: "left",
                      opacity: locked ? 0.5 : 1,
                    }}
                  >
                    <div style={{
                      width: 42, height: 42, borderRadius: 10,
                      background: done ? path.color : "#0D1117",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20, flexShrink: 0,
                      boxShadow: done ? `0 0 16px ${path.color}60` : "none",
                    }}>
                      {locked ? "🔒" : done ? "✅" : typeIcons[lesson.type]}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: locked ? "#475569" : "#F1F5F9", fontSize: 15 }}>{lesson.title}</div>
                      <div style={{ fontSize: 12, color: "#475569" }}>⚡ {lesson.xp} XP</div>
                    </div>
                    {!locked && !done && (
                      <div style={{ marginLeft: "auto", background: path.color, border: "none", borderRadius: 8, padding: "6px 14px", color: "#fff", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: "bold" }}>
                        Start
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState("home"); // home | path | lesson
  const [activePath, setActivePath] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);

  const [userState, setUserState] = useState({
    xp: 0,
    level: 1,
    streak: 3,
    gems: 50,
    hearts: 3,
    completedLessons: {},
    pathProgress: {},
  });

  const gainXP = (amount) => {
    setUserState(u => {
      const newXP = u.xp + amount;
      const newLevel = Math.floor(newXP / 300) + 1;
      return { ...u, xp: newXP % 300, level: newLevel, gems: u.gems + Math.floor(amount / 5) };
    });
  };

  const completeLesson = (xpEarned) => {
    setUserState(u => ({
      ...u,
      completedLessons: { ...u.completedLessons, [activeLesson.id]: true },
    }));
    gainXP(xpEarned);
    setScreen(activePath ? "path" : "home");
    setActiveLesson(null);
  };

  const selectedPath = PATHS.find(p => p.id === activePath);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0F1E",
      color: "#F1F5F9",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0F1E; }
        ::-webkit-scrollbar-thumb { background: #1E293B; border-radius: 99px; }
        button:hover { filter: brightness(1.1); }
        button:active { transform: scale(0.97); }
      `}</style>

      {/* ─── NAVBAR ─── */}
      {screen !== "lesson" && (
        <nav style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "#0A0F1Ecc",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #1E293B",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          {screen !== "home" && (
            <button onClick={() => setScreen(activePath ? (screen === "path" ? "home" : "path") : "home")}
              style={{ background: "none", border: "none", color: "#64748B", fontSize: 22, cursor: "pointer" }}>
              ←
            </button>
          )}
          <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 18, background: "linear-gradient(135deg, #22D3EE, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {'<CodeQuest />'}
          </div>
          <div style={{ flex: 1 }}>
            <XPBar xp={userState.xp} level={userState.level} />
          </div>
          <StreakFlame streak={userState.streak} />
          <GemCount gems={userState.gems} />
        </nav>
      )}

      {/* ─── SCREENS ─── */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: screen === "lesson" ? 0 : "24px 20px" }}>

        {/* HOME */}
        {screen === "home" && (
          <div>
            <div style={{ marginBottom: 32, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#475569", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8, fontFamily: "'Space Mono', monospace" }}>
                Learn to code
              </div>
              <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.1, color: "#F1F5F9" }}>
                Pick your<br />
                <span style={{ background: "linear-gradient(135deg, #22D3EE, #3B82F6, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  coding path
                </span>
              </h1>
            </div>

            {/* Daily goal strip */}
            <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 16, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ fontSize: 28 }}>🎯</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>Daily Goal</div>
                <div style={{ height: 6, background: "#334155", borderRadius: 99 }}>
                  <div style={{ height: "100%", width: `${Math.min((userState.xp % 50) / 50 * 100, 100)}%`, background: "linear-gradient(90deg, #F59E0B, #EF4444)", borderRadius: 99 }} />
                </div>
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#64748B" }}>
                {userState.xp % 50}/50 XP
              </div>
            </div>

            {/* Paths grid */}
            <div style={{ display: "grid", gap: 16 }}>
              {PATHS.map(path => {
                const allLessons = path.units.flatMap(u => u.lessons);
                const done = allLessons.filter(l => userState.completedLessons[l.id]).length;
                const pct = Math.round((done / allLessons.length) * 100);
                return (
                  <button
                    key={path.id}
                    onClick={() => { setActivePath(path.id); setScreen("path"); }}
                    style={{
                      background: `linear-gradient(135deg, ${path.bg}, #0A0F1E)`,
                      border: `1px solid ${path.color}40`,
                      borderRadius: 20,
                      padding: "20px 24px",
                      cursor: "pointer",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", right: -20, top: -20, fontSize: 100, opacity: 0.08 }}>{path.icon}</div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <div style={{ fontSize: 36 }}>{path.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 20, color: "#F1F5F9", marginBottom: 2 }}>{path.name}</div>
                        <div style={{ fontSize: 14, color: "#64748B", marginBottom: 12 }}>{path.tagline}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ flex: 1, height: 5, background: "#1E293B", borderRadius: 99 }}>
                            <div style={{ height: "100%", width: `${pct}%`, background: path.color, borderRadius: 99, boxShadow: `0 0 8px ${path.color}88` }} />
                          </div>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#475569" }}>{pct}%</span>
                        </div>
                      </div>
                      <div style={{ fontSize: 20, color: "#475569" }}>→</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stats row */}
            <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {[
                { icon: "🏆", label: "Level", value: userState.level },
                { icon: "🔥", label: "Streak", value: `${userState.streak}d` },
                { icon: "⚡", label: "Total XP", value: userState.xp + (userState.level - 1) * 300 },
              ].map(s => (
                <div key={s.label} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 14, padding: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, color: "#F1F5F9", fontSize: 18 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PATH MAP */}
        {screen === "path" && selectedPath && (
          <PathMap
            path={selectedPath}
            progress={userState}
            onSelectLesson={(lesson, unit) => {
              setActiveLesson(lesson);
              setActiveUnit(unit);
              setScreen("lesson");
            }}
          />
        )}

        {/* LESSON */}
        {screen === "lesson" && activeLesson && (
          <div style={{ padding: "24px 20px", minHeight: "100vh" }}>
            <LessonScreen
              lesson={activeLesson}
              pathColor={selectedPath?.color || "#3B82F6"}
              onComplete={completeLesson}
              onExit={() => setScreen(activePath ? "path" : "home")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
