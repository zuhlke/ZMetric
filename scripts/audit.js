const child_process = require('child_process');

let yarnOpts = ['--color=true', '--emoji=false'];
child_process.execFile('yarn', ['audit', '--summary', ...yarnOpts], (_, stdout) => {
  let lines = stdout.split('\n');
  let hasHighVuln = lines.find(line => /Severity: \d+ High/.test(line));
  let hasCriticalVuln = lines.find(line => /Severity: \d+ Critical/.test(line));
  if (hasHighVuln || hasCriticalVuln) {
    child_process.spawn('yarn', ['audit', ...yarnOpts], { stdio: 'inherit' });
    if (hasCriticalVuln) {
      process.exitCode = 1;
    }
  } else {
    process.stdout.write(stdout);
  }
});
