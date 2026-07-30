# LLM Wiki: Extreme Heat Safety for Elderly Residents (SDG 13)

This repo is an LLM-maintained wiki, following the pattern in
[Karpathy's LLM wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).
It supports the challenge: **"How might we help a neighborhood stay safe
during extreme heat?"**

## Team context (from the kickoff interview, 2026-07-29)

- **Candidate regions:** Los Angeles and Seoul / South Korea. Research both;
  commit to one only when the evidence supports it.
- **Focus population:** elderly residents — highest heat mortality, often
  living alone, without air conditioning, hard to reach with alerts.
- **Solution direction:** deliberately undecided. Gather evidence on the
  problem and on existing responses before picking an intervention.
- **Region decision test:** the team will choose the region where
  (1) harm to elderly residents is worst, (2) existing programs have the
  clearest gap, and (3) solid, citable neighborhood-level data exists.

## The three layers

1. **`sources/` — raw sources (immutable).** One markdown file per source.
   Never edit a source file after it is committed, except to fix a typo in
   its own metadata. Never delete sources.
2. **`wiki/` — synthesized pages (LLM-maintained).** Summaries, region
   pages, concept pages, comparisons. Every factual claim must cite a file
   in `sources/`. Rewrite these freely as new sources arrive.
3. **`CLAUDE.md` — this file (the schema).** Conventions and workflows.
   Update it when the wiki's structure changes.

Plus two bookkeeping files at the root:

- **`index.md`** — catalog of every page: link, one-line summary. Update it
  on every ingest and whenever a wiki page is added or removed.
- **`log.md`** — append-only record of operations. Never rewrite old
  entries.

## File conventions

- Filenames: lowercase kebab-case, `.md` (e.g. `seoul-heat-deaths-2025.md`).
- Source files live flat in `sources/` and start with this header:

  ```markdown
  # <Page title>

  - **URL:** <url>
  - **Accessed:** YYYY-MM-DD
  - **Region:** Los Angeles | South Korea | global | other
  - **Type:** dataset | news | program | policy | research

  ## Key facts
  - Exact figures with short direct quotes ("...") — numbers verbatim,
    never paraphrased.

  ## Summary
  Two sentences.
  ```

- Wiki pages cite sources inline as links:
  `([LA Times, 2026](../sources/la-times-heat-deaths.md))`.
- A claim with no source link is a **placeholder**: mark it `*(uncited)*`
  so it is never mistaken for evidence. Uncited claims never go in a pitch.
- Quote numbers exactly as the source states them; do not round or combine
  figures from different sources into one number.

## Workflows

### Ingest (new source → wiki)

1. Read the new file(s) in `sources/`.
2. Update or create the relevant `wiki/` pages: the matching region page,
   `wiki/region-comparison.md`, and any concept pages. A single source may
   touch several pages.
3. Cross-link related pages in both directions.
4. Update `index.md`.
5. Append a `log.md` entry.

### Query (question → answer page)

Answer from `wiki/` and `sources/` — not from general knowledge. If the
wiki can't support an answer, say what's missing and add it to
`wiki/research-plan.md` instead of guessing. Save substantial answers as
new `wiki/` pages, then update `index.md` and `log.md`.

### Lint (health check)

Check for: contradictions between pages, uncited claims, orphan pages not
in `index.md`, stale "open question" entries already answered by a source,
and gaps against the decision test in `wiki/research-plan.md`. Report
findings; fix mechanical issues; log the pass.

## log.md entry format

```markdown
## [YYYY-MM-DD] ingest | <source filename(s)>
## [YYYY-MM-DD] query | <question, short>
## [YYYY-MM-DD] lint | <scope>
```

One line of detail under each header is enough.

## Git

- Work happens on per-person draft branches; `main` is the published wiki.
- Commit messages: short imperative summary of the operation, e.g.
  `Ingest KMA heat wave dataset; update Seoul page`.
