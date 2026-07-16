export interface Feature {
  id: string;
  num: string;
  title: string;
  benefit: string;
  category: string;
  summary: string;
  explanation: string;
  scenario: string;
  terminalLines: { type: 'input' | 'output' | 'info' | 'ticker'; text: string }[];
  codeExample?: {
    title: string;
    language: string;
    code: string;
  };
  shortcut?: string;
}

export const categories = [
  "Subscription & Budget",
  "Dynamic Model Tiering",
  "Autopilot & Collaboration",
  "Immersive Interfaces"
];

export const features: Feature[] = [
  {
    id: "universal-login",
    num: "01",
    title: "All Providers, One Login",
    benefit: "Access every model without managing API keys or multiple subscriptions.",
    category: "Subscription & Budget",
    summary: "Sign into your unified account to instantly access Anthropic, OpenAI, Gemini, and local models under a single interface.",
    explanation: "Managing API keys across multiple cloud providers is a chore. OMP solves this by letting you authenticate directly with your main subscriptions using the simple `/login` command. Once logged in, every commercial and open-source model is at your fingertips. No more rotating keys, billing setup for four different developers, or environment variables getting leaked in git history.",
    scenario: "You need to benchmark a new prompt across GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro. Instead of navigating three web consoles, you test it directly in your terminal in seconds.",
    terminalLines: [
      { type: 'input', text: '/login' },
      { type: 'info', text: 'Select provider to login:' },
      { type: 'output', text: '❯ ChatGPT Plus/Pro (Codex Subscription) ● logged in (login)' },
      { type: 'output', text: '  Anthropic (Claude Pro/Max) ● logged in (env)' },
      { type: 'output', text: '  Z.AI (GLM Coding Plan)' },
      { type: 'output', text: '  Kimi Code' },
      { type: 'output', text: '  OpenRouter' },
      { type: 'output', text: '  GitHub Copilot' },
      { type: 'output', text: '  Cursor (Claude, GPT, etc.)' },
      { type: 'output', text: '  Devin' },
      { type: 'output', text: '  Antigravity (Gemini 3, Claude, GPT-OSS) ● logged in (login)' },
      { type: 'output', text: '  Google Cloud Code Assist (Gemini CLI)' },
      { type: 'info', text: '  Type to search' }
    ],
    codeExample: {
      title: "Configuring default provider credentials in omp.json",
      language: "json",
      code: `{
  "providers": {
    "anthropic": { "auth": "subscription" },
    "openai": { "auth": "subscription" },
    "gemini": { "auth": "subscription" }
  }
}`
    }
  },
  {
    id: "model-modes",
    num: "02",
    title: "Task-Based Model Modes",
    benefit: "Automatically route tasks to the most cost-effective or powerful model.",
    category: "Dynamic Model Tiering",
    summary: "Define specific models for quick, default, planning, and slow tasks to balance speed, reasoning power, and token costs.",
    explanation: "Not all tasks require the highest-tier reasoning. Running o1 to fix a simple syntax typo is wasteful; conversely, using Claude Haiku to design a database migration will lead to errors. OMP introduces task-based model modes, allowing you to map models from different providers to different operational speeds.",
    scenario: "You ask OMP to document a file. The quick model (Haiku) handles it instantly. When you ask it to plan a multi-file migration, it automatically spins up the planning model (o1) to draw the blueprints.",
    terminalLines: [
      { type: 'info', text: 'Model speed-dial menu (Ctrl+P):' },
      { type: 'output', text: 'smol  default  slow' },
      { type: 'info', text: 'Prompt bar:' },
      { type: 'output', text: 'π  Haiku 4.5++  ·  med    ~/Code/SSL/Workshops/omp    main    136.3%/200K    $3.34' }
    ],
    codeExample: {
      title: "Custom model mappings in your project configuration",
      language: "json",
      code: `{
  "modes": {
    "quick": "anthropic/claude-3-5-haiku",
    "default": "anthropic/claude-3-5-sonnet",
    "planning": "openai/o1",
    "slow": "openai/o3-mini"
  }
}`
    }
  },
  {
    id: "switch-command",
    num: "03",
    title: "The `/switch` Command",
    benefit: "Swap models instantly mid-session without losing context.",
    category: "Dynamic Model Tiering",
    summary: "Change your active LLM on the fly with a simple slash command, preserving your loaded files, chat history, and shell context.",
    explanation: "If you're in the middle of a complex session and hit a roadblock where the current model is struggling, starting a new session is a flow-breaker. The `/switch` command hot-swaps the brain of your agent while keeping the active workspace state, shell session, and chat history intact.",
    scenario: "Your default model (Sonnet) is struggling with a highly mathematical algorithm refactoring. You type `/switch o1-mini` to swap to a reasoning model, solve the algorithm, and then `/switch back` to Sonnet.",
    terminalLines: [
      { type: 'input', text: '/switch openai/o1-mini' },
      { type: 'info', text: '🔄 Hot-swapping agent brain...' },
      { type: 'output', text: '✔ Swapped to o1-mini. Context preserved (14.2k tokens).' },
      { type: 'input', text: 'Solve the algorithmic edge cases outlined in math_lib.py' }
    ]
  },
  {
    id: "advisor-mode",
    num: "04",
    title: "Dual-Agent Advisor Mode",
    benefit: "Have two different models working in tandem on a single task.",
    category: "Autopilot & Collaboration",
    summary: "Run a primary executor model side-by-side with an advisor model that acts as a real-time code reviewer, suggesting improvements on the fly.",
    explanation: "Two brains are better than one. OMP lets you run an Advisor model alongside your default model. The primary agent executes tasks (reads files, writes code, runs terminal commands), while the secondary Advisor model checks the diffs in the background, intercepting errors before they land.",
    scenario: "You tell your primary model (Claude Sonnet) to write a database connection pool. While it writes, a reasoning model (Gemini 1.5 Pro) runs as the Advisor and interrupts: 'Warning: Connection pool leak detected. Ensure all connections are returned to the pool in a finally block.'",
    terminalLines: [
      { type: 'info', text: 'ℹ Advisor 1 note' },
      { type: 'output', text: '〈concern〉 The \'cost-tracking\' branch is now sharing the \'token-counter\' template...' },
      { type: 'info', text: 'The advisor provides critical context, helping the primary executor model correct its path.' }
    ]
  },
  {
    id: "planning-docs",
    num: "05",
    title: "Planning Document Interface",
    benefit: "Align on specifications in markdown before writing a single line of code.",
    category: "Immersive Interfaces",
    summary: "Collaborate on a dynamic, living markdown spec sheet that the agent reads, updates, and checks off as tasks are completed.",
    explanation: "Prompting agents with huge walls of text is error-prone. OMP implements a native Planning Document Interface (`PLAN.md`). You draft the steps in markdown, and the agent uses it as a structured source of truth, updating task checkmarks dynamically as it progresses through your workstation.",
    scenario: "You initialize a feature build. OMP writes a list of 5 sub-tasks in `PLAN.md`. As it finishes building the router, it checks off task 1 and proceeds to task 2, giving you full visibility.",
    terminalLines: [
      { type: 'info', text: '📝 Syncing local planning document (local://PLAN.md)...' },
      { type: 'output', text: '├── [x] Task 1: Initialize database schema' },
      { type: 'output', text: '├── [ ] Task 2: Implement REST routes (In Progress)' },
      { type: 'output', text: '└── [ ] Task 3: Write integrations tests' }
    ],
    codeExample: {
      title: "Living PLAN.md markdown structure",
      language: "markdown",
      code: `# Implementation Plan - Feature Auth

- [x] Create migration file
- [ ] Add JWT authentication middleware <!-- id: auth_middleware -->
- [ ] Write integration test cases`
    }
  },
  {
    id: "tts-kokoro",
    num: "06",
    title: "Kokoro Text-to-Speech",
    benefit: "Listen to your agent's thought process and progress updates hands-free.",
    category: "Immersive Interfaces",
    summary: "Listen to natural, high-fidelity neural speech narration from your agent using the built-in Kokoro voice synthesis engine.",
    explanation: "Reading long logs can be tiring. OMP includes a text-to-speech integration powered by the Kokoro-82M model. It verbally narrates its steps, explanations, and warnings, turning coding into a true collaborative conversation while you focus your eyes on the code editor.",
    scenario: "You start a build and test loop. Instead of watching the terminal, you review the diffs in VS Code while a realistic voice speaks: 'The compiler failed due to a missing import in client.ts. I am importing it now and restarting the build.'",
    terminalLines: [
      { type: 'input', text: 'omp --voice' },
      { type: 'info', text: '🔊 Audio engine online (Kokoro synthesis enabled)' },
      { type: 'ticker', text: 'Voice: "Analyzing build error... I see a missing bracket at line 48."' }
    ]
  },
  {
    id: "goal-command",
    num: "07",
    title: "Autopilot Loop with `/goal`",
    benefit: "Let the agent self-correct, run compiler checks, and fix bugs autonomously.",
    category: "Autopilot & Collaboration",
    summary: "Provide a target criteria (like passing test suites or building without errors) and let OMP loop, check, edit, and verify until it succeeds.",
    explanation: "Instead of copying compiler errors back and forth, OMP's `/goal` command creates a self-healing loop. The agent runs your build command, intercepts stderr output, edits the code to fix the issue, and re-runs the compiler until the target state is successfully achieved.",
    scenario: "You type `/goal cargo test passes`. OMP runs the test suite, encounters 3 failing test assertions, refines the implementation logic, runs the tests again, and successfully finishes when all tests are green.",
    terminalLines: [
      { type: 'input', text: '/goal cargo test passes' },
      { type: 'info', text: '🎯 Loop target set: "cargo test passes"' },
      { type: 'info', text: 'Loop #1: Running tests -> Failed (2 errors)' },
      { type: 'output', text: '🔧 Editing src/auth.rs to fix assertion...' },
      { type: 'info', text: 'Loop #2: Running tests -> Success (12/12 passed)' },
      { type: 'output', text: '✔ Goal achieved successfully.' }
    ]
  },
  {
    id: "collab-command",
    num: "08",
    title: "Multiplayer with `/collab`",
    benefit: "Share agent sessions and context with remote teammates in real-time.",
    category: "Autopilot & Collaboration",
    summary: "Pair program in real-time with remote teammates or sync multiple local terminal agents using a shared context connection.",
    explanation: "Coding is a team sport. With `/collab`, you can spin up a shared session ID. Multiple developers can join the same workspace channel, viewing the agent's work queue, output history, and active token counters synchronously, enabling seamless team pair programming.",
    scenario: "You and a teammate are debugging a production crash. You spin up a session with `/collab start`. Your teammate joins from their terminal, and you both watch and direct the agent as it analyzes logs.",
    terminalLines: [
      { type: 'input', text: '/collab start' },
      { type: 'info', text: '🌐 Collaboration session active. Room ID: omp-772-921' },
      { type: 'output', text: '👤 Developer alice joined the session.' },
      { type: 'ticker', text: 'Shared Agent: "Searching for NullPointerExceptions in application.log..."' }
    ]
  },
  {
    id: "token-counter",
    num: "09",
    title: "Real-Time Token Usage",
    benefit: "See exactly how much context you've consumed — always, at a glance, right in the prompt.",
    category: "Subscription & Budget",
    summary: "Token usage is permanently embedded in the omp prompt bar as a live percentage/max display. It updates after every single response.",
    explanation: "AI model performance degrades silently as the context window fills with redundant file reads and stale conversation turns. OMP solves this by embedding a live token counter directly into the prompt bar — always visible, zero commands needed. You can see at a glance what percentage of the context window is consumed and the raw token ceiling of your active model. When it gets high, you know it's time to run `/clear` or drop files from context.",
    scenario: "You've been working in a session for an hour, reading files and running commands. Glancing at the prompt bar you see 26.2%/1M — you're at 26.2% of a 1 million token context window. You can keep going confidently without worrying about hitting the limit or experiencing degraded responses.",
    terminalLines: [
      { type: 'info', text: 'The omp prompt bar — always visible at the bottom of your session:' },
      { type: 'output', text: 'π  Sonnet 4.6++  ·  med    ~/Code/SSL/Workshops/omp    main    26.2%/1M' },
    ],
  },
  {
    id: "cost-tracking",
    num: "10",
    title: "Anthropic Cost Tracking",
    benefit: "See the exact running cost of your session — always visible in the prompt bar.",
    category: "Subscription & Budget",
    summary: "When using Anthropic models, omp embeds a live cost counter directly into the prompt bar alongside token usage. Every response updates it in real-time.",
    explanation: "API bills can be unpredictable. OMP eliminates the surprise by embedding a live cost counter directly into the prompt bar when you are using Anthropic models. After each response you also get a brief stats row showing input tokens, output tokens, context size, response time, and tokens-per-second throughput — everything you need to understand exactly what you are spending and why.",
    scenario: "You ask OMP to refactor a large module. After the response lands, the stats row shows 916 tokens in, 63 out, 259K context, 2.2s, at 17.4 tokens/s. Glancing down at the prompt bar you see $2.58 — your running session total, updated instantly.",
    terminalLines: [
      { type: 'info', text: 'Response stats row (appears after every reply):' },
      { type: 'output', text: '→) 916   ↦ 63   ≡ 259K   ⏱ 2.2s   ⊘ 17.4/s' },
      { type: 'info', text: 'Prompt bar (always visible):' },
      { type: 'output', text: 'π  Sonnet 4.6++  ·  med    ~/Code/SSL/Workshops/omp    main    25.9%/1M    $2.58' },
    ],
  },
  {
    id: "ctrl-p",
    num: "11",
    title: "Ctrl+P Model Speed-Dial",
    benefit: "Switch between your favorite models with a split-second keyboard shortcut.",
    category: "Dynamic Model Tiering",
    summary: "Stay in your flow state by cycling through your pre-configured fast, default, and slow models with a keyboard combination.",
    explanation: "Commands are great, but keyboard shortcuts are faster. Instead of typing out long model identifiers or switching commands, pressing `Ctrl+P` in the OMP prompt immediately cycles through your model modes, upgrading or downgrading reasoning depth instantly.",
    scenario: "You are typing a prompt, realize it needs deep o1 logic, press `Ctrl+P` twice to cycle from Haiku to o1, and press Enter—all in a fraction of a second.",
    shortcut: "Ctrl + P",
    terminalLines: [
      { type: 'info', text: '⌨ Keyboard event captured: [Ctrl+P]' },
      { type: 'output', text: '🧠 Mode changed: default (Sonnet) -> planning (o1)' },
      { type: 'ticker', text: 'Active model is now: openai/o1' }
    ]
  },
  {
    id: "shift-tab",
    num: "12",
    title: "Shift+Tab Thinking Toggle",
    benefit: "Instantly adjust the thinking/reasoning budget of advanced reasoning models.",
    category: "Dynamic Model Tiering",
    summary: "Toggle the active reasoning level of models like o1 or o3-mini on the fly using a simple keyboard combination.",
    explanation: "Reasoning models are highly effective, but their 'thinking time' can introduce unwanted delay and costs on straightforward requests. Pressing `Shift+Tab` cycles the reasoning budget configurations (low, medium, high) to customize reasoning output depth instantly.",
    scenario: "You are using o3-mini. For a simple algorithm check, you press `Shift+Tab` to set thinking to 'low' for a 2-second response. For a complex lock-free concurrency bug, you press `Shift+Tab` to set thinking to 'max'.",
    shortcut: "Shift + Tab",
    terminalLines: [
      { type: 'info', text: '⌨ Keyboard event captured: [Shift+Tab]' },
      { type: 'output', text: '🧠 o3-mini thinking level set to: MEDIUM (1,024 reasoning token cap)' }
    ]
  }
];
