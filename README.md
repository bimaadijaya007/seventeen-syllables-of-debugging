# Seventeen Syllables of Debugging

A tiny deterministic Node program that writes one fixed three-line haiku about debugging to `/output/entry.txt`.

```
midnight cursor blinks
the stack trace dissolves in fog
my fix was the bug
```

Run it:

```
node main.ts
```

The output directory can be overridden with the `MAKEFUN_OUTPUT_DIR` environment variable (default `/output`). No input, no network, no clock, no randomness — two runs produce byte-identical output.
