# CLAUDE.md — Wiki schema and workflows

This repo is an **LLM wiki** (pattern: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
for the GLP 2026 SDG 13 challenge:

> **How might we help a neighborhood stay safe during extreme heat?**

Team decisions from the kickoff interview (2026-07-29):

- **Candidate regions:** Los Angeles and South Korea — researching both before committing to one.
- **Primary user group:** elderly residents.
- **Stance:** still exploring the problem. Do not push toward a solution type; organize knowledge around understanding the problem.
- **Research priorities:** impact data & statistics, existing programs, lived experience, root causes.
- **End goal:** a judged pitch AND a working prototype. Maintain `wiki/evidence-for-pitch.md` (exact figures + citations) and `wiki/design-requirements.md` (user needs the prototype must meet).

## Layers

1. **`sources/` — raw source layer. Humans curate it; you read it but NEVER rewrite or delete files in it.**
   One markdown file per source: title, URL, date accessed, key facts and figures with short
   direct quotes, and a two-sentence summary. Never copy whole articles.
2. **`wiki/` — synthesis layer. You write and maintain it; the team reads it.**
3. **Schema layer** — this file, plus `index.md` (catalog of all pages) and `log.md` (append-only activity record).

## Operations

### Ingest (default operation when a source is added)

1. Read the new file(s) in `sources/`.
2. Update every wiki page the source touches — typically the relevant region page, one or
   more topic pages, `wiki/people/elderly-residents.md`, and `wiki/evidence-for-pitch.md`
   if the source contains a citable figure.
3. Every fact you write into the wiki gets an inline citation: `([source-file-name](../sources/file.md))`.
   Quote important numbers exactly as the source states them.
4. When a sourced fact replaces starter background, delete the `*[unsourced]*` marker and the old text.
5. Update `index.md` if pages were added, and append one line to `log.md`.

### Query

Answer team questions from the wiki first; only open `sources/` to verify a quote.
If a query produces a genuinely new synthesis, file it as a wiki page and index it.

### Lint

On request (or after a large merge): check for contradictions between pages, stale
`*[unsourced]*` claims that now have sources, orphan pages missing from `index.md`,
broken links, and figures in `evidence-for-pitch.md` that no longer match their source
file. Log what was fixed.

## Conventions

- Filenames: lowercase-kebab-case. Sources: `sources/<short-slug>.md` (add `-la-` / `-kr-`
  when region-specific, e.g. `sources/kr-heat-illness-surveillance-2025.md`).
- Starter background that predates any source is marked `*[unsourced]*` — it orients the
  team but must never be quoted in a pitch. Sourced facts replace it over time.
- Keep pages short and interlinked. Prefer adding a cross-link over duplicating a fact.
- Region-neutral insights go in `wiki/topics/`; region-specific facts go in `wiki/regions/`.

## Team workflow (multiple simultaneous sessions)

- Each teammate works on their own draft branch; PRs are merged one at a time.
- If a prompt says "add this source but don't edit index.md or the wiki yet": ONLY create
  the `sources/` file. Ingestion happens later in a single "ingest everything" session.
  This avoids merge conflicts in shared files.
- Commit with clear messages and push to the session's designated branch. Never push to `main`.
