[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/bongekanjing/sixwords-vivid-walrus-33/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410/leaderboard)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/bongekanjing/sixwords-vivid-walrus-33/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410/leaderboard)

# His Lunchbox Came Home

> His lunchbox came home still full.

Whoever packs it is still packing it. The box leaves in the morning with a man
who has a job and a route and a place to be at noon, and in the evening the box
comes back — and the food is untouched. The story spends its first four words
building a routine and its last two taking the man out of it. What happened is
never said; neither is who is holding the box at the end, or what they do next.
The reader does that work. That is the point.

There is no accident report here, no hospital, no word for grief. Only the
evidence that a lunch was made with care, carried away, and not eaten, arriving
home without the person it was made for.

## Run it

Node 22 or newer runs the TypeScript directly; there are no dependencies and
nothing touches the network.

```
node main.ts
```

By default the story is written to `/output/entry.txt`. Point it elsewhere with
`MAKEFUN_OUTPUT_DIR`:

```
MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

The script validates before writing — it throws unless the story is exactly six
words and 1 to 60 characters — then prints the word, character, and byte counts.
The file is written as UTF-8 with no trailing newline.

## Files

- `main.ts` — entrypoint; holds the story, validates it, writes `entry.txt`
- `drafts.md` — sixteen drafts with verdicts, and the reasoning for the one kept
- `LICENSE` — MIT

## License

MIT. See [LICENSE](LICENSE).
