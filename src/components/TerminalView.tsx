
// components/TerminalView.tsx
import { useEffect } from 'react';

interface TerminalViewProps {
  onClose: () => void;
}

const TerminalView = ({ onClose }: TerminalViewProps) => {
  useEffect(() => {
    const terminalLogic = () => {
      // =================================================================== //
      // ==================== YOUR DETAILS CONFIGURATION =================== //
      // =================================================================== //
      const CONFIG = {
        USERNAME: "nikunj",
        HOSTNAME: "side_end.dev",
        CLEAR_REPRINTS_BANNER: true,
      };

      const USER_DATA = {
        name: "Nikunj Maheshwari",
        title: "A Tech Enthusiast",
        about: `Third-year B.Tech. student passionate about creating innovative solutions through code. Always learning and exploring new technologies to stay at the forefront of tech evolution.`,
        skills: `
          <div class="output-table">
              <div class="table-row"><div class="table-col-1">Languages:</div><div class="table-col-2">Python, C, Kotlin, Java, Dart, JavaScript (ES6+), TypeScript, HTML5, CSS3</div></div>
              <div class="table-row"><div class="table-col-1">Core Concepts:</div><div class="table-col-2">Data Structures & Algorithms (DSA)</div></div>
              <div class="table-row"><div class="table-col-1">Frontend:</div><div class="table-col-2">React, Next.js, Flutter, Tailwind CSS</div></div>
              <div class="table-row"><div class="table-col-1">Backend:</div><div class="table-col-2">Node.js, Express.js, FastAPI</div></div>
              <div class="table-row"><div class="table-col-1">Databases:</div><div class="table-col-2">MongoDB, PostgreSQL, MySQL, Firebase</div></div>
          </div>`,
        projectsHeader: "Here are some of our featured projects.",
        projects: [
            { name: "should-i-bunk", description: "Mobile app to help students decide on attending class using logistic regression." },
            { name: "nlp-chatbot", description: "An intelligent, intent-based chatbot using Natural Language Processing." },
            { name: "ecommerce-app", description: "A full-featured Ecom app with Flutter, Firebase, and a secure payment gateway." },
            { name: "task-alarm-app", description: "Android app that automatically sets alarms based on user tasks and time." },
            { name: "human-pose-estimation", description: "A web app for real-time human pose detection using OpenCV and MediaPipe." },
            { name: "task-list-app", description: "An Android task-list app with Room DB, widgets, and search functionality." },
            { name: "multi-unit-converter", description: "Android app for unit conversion, built with Jetpack Compose." },
            { name: "portfolio-website", description: "A personal portfolio built with Next.js and Tailwind CSS." },
            { name: "athlete-connection-app", description: "A multi-platform app to connect athletes and coaches (in progress)." }
        ],
        contact: `You can reach us here:
          <ul>
              <li><b>Email:</b>     <a href="mailto:nikunjnehu@gmail.com">nikunjnehu@gmail.com</a></li>
              <li><b>GitHub:</b>    <a href="https://github.com/markstone111" target="_self">github.com/markstone111</a></li>
          </ul>`,
        repo: "https://github.com/markstone111/side_end.dev",
        resume: "https://drive.google.com/file/d/1OxF6yhaxq9Um5I70qrAXeQU3O-D5CYcv/view?usp=drivesdk",
        insta: "https://instagram.com/nikunj_maheshwari_",
        neofetch: {
          art: `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%##</span>@@@@@@@@<span style="color:var(--prompt);">%****#</span>@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%#*++*%</span>@@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">#</span>@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">#*++++*%</span>@@@@@@<span style="color:var(--output);">+===+</span>@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%*++++*#</span>@@@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">#</span>@@@<span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%*++++*#</span>@@@@@@@@@<span style="color:var(--output);">+===+</span><span style="color:var(--prompt);">%</span>@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">+=</span><span style="color:var(--prompt);">*</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@<span style="color:var(--prompt);">%#*+*+*#%</span>@@@@@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">#</span>@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">+====</span><span style="color:var(--prompt);">*</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@
@@@@@@@@@@@<span style="color:var(--prompt);">%#*+***#%</span>@@@@@@@@@@@<span style="color:var(--output);">+===+</span><span style="color:var(--prompt);">%</span>@@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">*=====</span><span style="color:var(--prompt);">*</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@
@@@@@@@@@@@<span style="color:var(--prompt);">%*++*+*%</span>@@@@@@@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">#</span>@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">=====</span><span style="color:var(--prompt);">*</span>@@@@@@@@@@@@
@@@@@@@@@@@@<span style="color:var(--prompt);">%#*+*++*%</span>@@@@@@@@@<span style="color:var(--output);">+===+</span><span style="color:var(--prompt);">%</span>@@@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">*+====</span><span style="color:var(--prompt);">*</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@
@@@@@@@@@@@@@@<span style="color:var(--prompt);">%*++*+*#%</span>@@@@@@<span style="color:var(--prompt);">#</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">*</span>@@@<span style="color:var(--prompt);">*</span><span style="color:var(--output);">+====</span><span style="color:var(--prompt);">*</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%*++++*#%</span>@@@@<span style="color:var(--output);">+===+</span><span style="color:var(--prompt);">%</span>@@@<span style="color:var(--prompt);">*</span><span style="color:var(--output);">===+</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%*++++*#</span>@@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">*</span>@@@@@<span style="color:var(--prompt);">%*#</span>@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">#*++*%</span>@@<span style="color:var(--prompt);">*</span><span style="color:var(--output);">===+</span><span style="color:var(--prompt);">%</span>@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%##</span>@@@<span style="color:var(--prompt);">%</span><span style="color:var(--output);">====</span><span style="color:var(--prompt);">*</span>@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@<span style="color:var(--prompt);">%####</span>@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
          info: function () {
            return [
                { key: "Host", value: `side_end.dev` },
                { key: "Focus", value: this.title },
                { key: "OS", value: "Web Browser" },
                { key: "Shell", value: "zsh" },
                { key: "Theme", value: 'default' },
                { key: "Email", value: `<a href="mailto:nikunjnehu@gmail.com">nikunjnehu@gmail.com</a>` },
                { key: "GitHub", value: `<a href="https://github.com/markstone111" target="_self">markstone111</a>` }
            ];
          }
        },
        banner: `
          <pre>
  _   _ _ _                 _   __  __       _               _                       _ 
 | \\ | (_) | ___   _ _ __  (_) |  \\/  | __ _| |__   ___  ___| |____      ____ _ _ __(_)
 |  \\| | | |/ / | | | '_ \\ | | | |\\/| |/ _\` | '_ \\ / _ \\/ __| '_ \\ \\ /\\ / / _\` | '__| |
 | |\\  | |   <| |_| | | | || | | |  | | (_| | | | |  __/\\__ \\ | | \\ V  V / (_| | |  | |
 |_| \\_|_|_|\\_\\\\__,_|_| |_|/ | |_|  |_|\\__,_|_| |_|\\___||___/_| |_|\\_/\\_/ \\__,_|_|  |_|
                         |__/                                                          
      </pre> 
      <span class="success">Welcome to my interactive terminal!</span>
      <span>Type 'help' to see the list of available commands.</span>`
      };

      // =================================================================== //
      // ============== CORE TERMINAL LOGIC (Best to leave alone) ========== //
      // =================================================================== //
      const terminal = document.getElementById('terminal');
      const output = document.getElementById('output');
      const commandInput = document.getElementById('command-input') as HTMLInputElement;
      const promptElement = document.getElementById('prompt-text');

      if (!terminal || !output || !commandInput || !promptElement) return;

      const commandHistory: string[] = [];
      let historyIndex = -1;
      const currentTheme = 'default';

      const commands: Record<string, (args: string[]) => string> = {
        help: () => `
          <div class="output-table">
              <div class="table-row"><div class="table-col-1"><a data-command="help">help</a></div><div class="table-col-2">Show this help message</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="about">about</a></div><div class="table-col-2">Display my professional summary</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="skills">skills</a></div><div class="table-col-2">List my technical skills</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="projects">projects</a> (ls)</div><div class="table-col-2">View my projects</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="contact">contact</a> (socials)</div><div class="table-col-2">Show contact information</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="resume">resume</a></div><div class="table-col-2">Open my resume</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="insta">insta</a></div><div class="table-col-2">Open my Instagram profile</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="neofetch">neofetch</a></div><div class="table-col-2">Display a cool system summary</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="history">history</a></div><div class="table-col-2">Show command history</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="repo">repo</a></div><div class="table-col-2">Open the source code for this portfolio</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="date">date</a></div><div class="table-col-2">Display the current date and time</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="banner">banner</a></div><div class="table-col-2">Display the welcome banner</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="clear">clear</a></div><div class="table-col-2">Clear the terminal screen</div></div>
              <div class="table-row"><div class="table-col-1"><a data-command="exit">exit</a></div><div class="table-col-2">Exit the terminal</div></div>
          </div>`,
        whoami: () => "guest",
        about: () => USER_DATA.about,
        skills: () => USER_DATA.skills,
        contact: () => USER_DATA.contact,
        socials: () => commands.contact(),
        banner: () => USER_DATA.banner,
        neofetch: () => {
          const infoHtml = USER_DATA.neofetch.info().map(item => `<div class="nf-key">${item.key}:</div><div>${item.value}</div>`).join('');
          return `
          <div class="neofetch-container">
              <div class="neofetch-logo">${USER_DATA.neofetch.art}</div>
              <div class="neofetch-info">${infoHtml}</div>
          </div>`;
        },
        projects: () => {
          let projectList = `<div class="output-table">`;
          USER_DATA.projects.forEach(p => {
            projectList += `<div class="table-row"><div class="table-col-1">${p.name}</div><div class="table-col-2">${p.description}</div></div>`;
          });
          projectList += `</div>`;
          return `${USER_DATA.projectsHeader}\n${projectList}\n<br><span class="info">For the code and demo of these projects check main page.</span>`;
        },
        ls: () => commands.projects(),
        date: () => new Date().toString(),
        history: () => `<ul>${commandHistory.slice(0).reverse().map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`,
        repo: () => {
          window.open(USER_DATA.repo, "_self");
          return `Opening repository...`;
        },
        resume: () => {
          window.open(USER_DATA.resume, "_self");
          return `Opening resume...`;
        },
        insta: () => {
          window.open(USER_DATA.insta, "_self");
          return `Opening Instagram...`;
        },
        exit: () => {
          onClose();
          return `Exiting terminal...`;
        },
        clear: () => {
          output.innerHTML = '';
          if (CONFIG.CLEAR_REPRINTS_BANNER) {
            printOutput(USER_DATA.banner);
          }
          return "";
        },
      };

      const setPrompt = () => {
        promptElement.innerHTML = `<span style="color:var(--output)">${CONFIG.USERNAME}</span><span style="color:var(--foreground)">@</span><span style="color:var(--info)">${CONFIG.HOSTNAME}</span><span style="color:var(--foreground)">:~$</span>`;
      };

      const printOutput = (htmlContent: string) => {
        if (!htmlContent) return;
        const div = document.createElement('div');
        div.className = 'output-line';
        div.innerHTML = htmlContent;
        output.appendChild(div);
        terminal.scrollTop = terminal.scrollHeight;
      };

      const echoCommand = (command: string) => {
        const div = document.createElement('div');
        div.innerHTML = `<span class="prompt">${promptElement.innerHTML}</span><span>${escapeHtml(command)}</span>`;
        output.appendChild(div);
      };

      const handleCommand = (commandStr: string) => {
        const trimmed = commandStr.trim();
        if (trimmed) {
          echoCommand(trimmed);
          commandHistory.push(trimmed);
          historyIndex = commandHistory.length;
          const [cmd, ...args] = trimmed.toLowerCase().split(' ').filter(Boolean);
          const handler = commands[cmd];
          if (handler) {
            const result = handler(args);
            printOutput(result);
          } else {
            printOutput(`<span class="error">Command not found: ${escapeHtml(cmd)}. Type 'help' for a list of commands.</span>`);
          }
        }
        commandInput.value = '';
        terminal.scrollTop = terminal.scrollHeight;
      };

      const escapeHtml = (str: string) => {
        return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
      };

      // Event handlers are now named functions
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCommand(commandInput.value);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
            commandInput.setSelectionRange(commandInput.value.length, commandInput.value.length);
          }
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
          } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
          }
          commandInput.setSelectionRange(commandInput.value.length, commandInput.value.length);
        }
      };
      
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[data-command]');
        if (link) {
            e.preventDefault();
            handleCommand(link.getAttribute('data-command')!);
        } else {
            commandInput.focus();
        }
      };

      // Add event listeners using the named functions
      commandInput.addEventListener('keydown', handleKeyDown);
      terminal.addEventListener('click', handleClick as EventListener);

      const init = () => {
        document.body.dataset.theme = currentTheme === 'default' ? '' : currentTheme;
        setPrompt();
        printOutput(USER_DATA.banner);
        printOutput(commands.help());
        commandInput.focus();
      };
      
      init();

      // THIS IS THE NEW CLEANUP FUNCTION
      return () => {
        commandInput.removeEventListener('keydown', handleKeyDown);
        terminal.removeEventListener('click', handleClick as EventListener);
        if (output) output.innerHTML = ''; // Clear the output on cleanup
      };
    };

    // Run terminal logic and get the cleanup function
    // Run terminal logic and get the cleanup function
    const cleanup = terminalLogic();

    // THIS LOCKS THE SCROLL FOR THE WHOLE PAGE
    document.body.style.overflow = 'hidden';

    // Return the cleanup function to be run by React
    return () => {
      document.body.style.overflow = 'auto';
      cleanup();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#16141F]">
      <style>{`
          :root {
            --background: #1A1B26;     /* Changed to a darker charcoal */
            --foreground: #EAEAEA;     /* Kept as white for general text */
            --prompt-user: #61AFEF;     /* Changed to a readable light blue */
            --command: #EAEAEA;        /* Changed to white */
            --output: #98C379;         /* Changed to a soft green */
            --link: #61AFEF;           /* Changed to light blue */
            --error: #E06C75;          /* Changed to a soft red */
            --info: #EAEAEA;           /* Changed to white for readability */
            --header: #61AFEF;         /* Changed to light blue */
        }
        body[data-theme="matrix"] {
            --background: #000; --foreground: #0f0; --prompt: #0f0; --command: #fff;
            --output: #0f0; --link: #35a5ff; --error: #ff4d4d; --info: #0f0; --header: #0f0;
            --crt-effect: block; text-shadow: 0 0 3px var(--foreground);
        }
        body[data-theme="dracula"] {
            --background: #282a36; --foreground: #f8f8f2; --prompt: #50fa7b; --command: #f8f2f2;
            --output: #bd93f9; --link: #8be9fd; --error: #ff5555; --info: #8be9fd; --header: #ffb86c;
        }
        #terminal { padding: 15px; height: 100vh; overflow-y: auto; box-sizing: border-box; cursor: text; position: relative; font-family: 'Roboto Mono', monospace; line-height: 1.6; font-size: 1.1em;}
        #input-line { display: flex; align-items: center; flex-wrap: nowrap; padding: 2px 0; border-radius: 3px; }
        .prompt { color: var(--prompt); margin-right: 8px; white-space: nowrap; }
        .input-area { display: flex; align-items: center; flex-grow: 1; }
        #command-input { background: transparent; border: none; color: var(--command); font-family: inherit; font-size: inherit; flex-grow: 1; outline: none; padding: 0; }
        #cursor { background-color: var(--command); width: 0.6em; height: 1.2em; display: inline-block; animation: blink 1s steps(2, start) infinite; }
        @keyframes blink { to { visibility: hidden; } }
        #command-input:focus + #cursor { animation: none; }
        .output-line { white-space: pre-wrap; word-wrap: break-word; color: var(--foreground);}
        .error { color: var(--error); }
        .success { color: var(--output); }
        .info { color: var(--info); }
        b, .header { font-weight: bold; color: var(--header); }
        a { color: var(--link); text-decoration: none; }
        a:hover, a:focus { text-decoration: underline; filter: brightness(1.2); }
        pre { font-family: 'Roboto Mono', monospace; color: var(--foreground);}
        ul { list-style-type: none; padding-left: 0; }
        li { padding-left: 20px; position: relative; }
        li::before { content: '>'; position: absolute; left: 0; color: var(--prompt); }
        .output-table { display: flex; flex-direction: column; gap: 5px; }
        .table-row { display: flex; gap: 20px; }
        .table-col-1 { color: var(--header); flex-shrink: 0; width: 220px; }
        .table-col-2 { color: var(--foreground); }
        .neofetch-container { display: flex; flex-wrap: wrap; gap: 20px; }
        .neofetch-logo { white-space: pre; color: var(--foreground); }
        .neofetch-info { display: grid; grid-template-columns: auto 1fr; gap: 5px 15px; align-content: start; }
        .nf-key { font-weight: bold; color: var(--header); text-align: right; }
        @media (max-width: 768px) {
            #terminal { font-size: 1em; }
            .table-row { flex-direction: column; gap: 0; margin-bottom: 10px; }
            .table-col-1 { width: auto; }
            .neofetch-container { flex-direction: column; }
        }
      `}</style>
      <div id="terminal">
        <div id="output"></div>
        <div id="input-line">
          <span className="prompt" id="prompt-text"></span>
          <div className="input-area">
            <input
              type="text"
              id="command-input"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              autoFocus
              aria-label="Command input"
            />
            <span id="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalView;