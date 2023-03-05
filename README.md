## Setup steps
1. Install `pnpm` package manager

```
npm i -g pnpm
```

2. Install dependencies:

```
pnpm i
```

## Description of the issue

`turbo` seems not to be respecting signal traps.

### Expected behavior

I expect `turbo` to avoid exiting with non zero code when a SIGINT or SIGTERM signal is trapped and ignored.

### Actual behavior

`turbo` seems to ignore the trap and will exit with non zero code

### Steps to reproduce the issue

After setting up the repo, the following root scripts doesn't run as expected:

- Root script `foo:turbo:trap` can be run and won't exit with 0 code receiving INT and TERM signals even when a trap to ignore the signals is set up for the parent process, the child process and the node script.

### Steps to reproduce the expected behavior

After setting up the repo, the following root scripts run as expected:

- Root script `foo:pnpm` can be run and will exit with non 0 code receiving INT and TERM signals because no trap is set up for the parent process.
- Root script `foo:pnpm:trap` can be run and will exit with 0 code receiving INT and TERM signals because a trap to ignore the signals is set up for the parent process, the child process and the node script.
- Root script `foo:turbo` can be run and will exit with non 0 code receiving INT and TERM signals because no trap is set up for the parent process.
