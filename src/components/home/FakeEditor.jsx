import React, { useState } from 'react';
import { Play, Terminal, CheckCircle2, Copy } from 'lucide-react';

export const FakeEditor = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// strike.js — Fullstack System Architecture
import { StrikeEngine } from '@strike/core';

async function launchCareer() {
  const student = await StrikeEngine.initialize({
    dsaLevel: 'Intermediate',
    systemDesign: 'HLD + LLD',
    genAI: true
  });

  const coupon = await student.scratchCard('STRIKE2026');
  console.log(\`Unlocked Discount: \${coupon.discount}%\`);
  
  return await student.enroll({ status: 'SUCCESS' });
}

launchCareer();`;

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      setOutput({
        time: '142ms',
        memory: '18.4 MB',
        logs: [
          '[STRIKE CLI] Initializing Strike Execution Environment...',
          '[STRIKE CLI] Connecting to Scratch Coupon Engine...',
          '[STRIKE CLI] Coupon STRIKE2026 validated: 20% DISCOUNT UNLOCKED! ✨',
          '[STRIKE CLI] Status: 200 OK — Ready to transform your future.'
        ]
      });
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto my-6 select-none">
      <div className="tape-piece -top-3 -right-2 transform rotate-12"></div>
      <div className="tape-piece -bottom-3 -left-3 transform -rotate-6"></div>

      <div className="bg-paper-dark border-4 border-ink rounded-2xl shadow-brutal-lg overflow-hidden">
        <div className="bg-ink px-4 py-3 flex items-center justify-between border-b-2 border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-ink"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-ink"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-ink"></div>
            
            <div className="ml-3 bg-paper-dark text-yellow border border-gray-700 px-3 py-1 rounded-t-lg font-mono text-xs flex items-center gap-1.5 font-bold">
              <span>strike.js</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              READY
            </span>

            <button
              onClick={handleCopyCode}
              className="text-gray-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              title="Copy code"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="btn-brutal bg-green text-ink border-2 border-ink px-3 py-1 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 shadow-brutal-sm cursor-pointer disabled:opacity-50"
            >
              <Play className={`w-3.5 h-3.5 fill-ink ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'RUNNING...' : 'Run Code'}</span>
            </button>
          </div>
        </div>

        <div className="p-4 font-mono text-xs sm:text-sm text-gray-200 overflow-x-auto bg-[#111115] leading-relaxed">
          <pre className="text-gray-300">
            <code>
              {codeSnippet.split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-4 text-gray-600 select-none text-right">{idx + 1}</span>
                  <span className="table-cell">
                    {line.startsWith('//') ? (
                      <span className="text-gray-500 italic">{line}</span>
                    ) : line.includes('import') || line.includes('async') || line.includes('function') || line.includes('const') || line.includes('return') || line.includes('await') ? (
                      <span className="text-pink-400 font-semibold">{line}</span>
                    ) : line.includes('console.log') || line.includes('StrikeEngine') ? (
                      <span className="text-yellow">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {output && (
          <div className="border-t-2 border-dashed border-gray-700 bg-black p-3.5 font-mono text-xs text-emerald-400">
            <div className="flex items-center justify-between text-gray-400 mb-2 border-b border-gray-800 pb-1">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-yellow" /> TERMINAL OUTPUT
              </span>
              <span>Exec: {output.time} | Mem: {output.memory}</span>
            </div>
            {output.logs.map((log, i) => (
              <div key={i} className="leading-snug text-emerald-300">
                {log}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
