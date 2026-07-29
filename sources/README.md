# sources/

Raw source layer. One markdown file per source. Files here are **immutable once created**
— Claude reads them but never edits or deletes them (fixing a typo right after creation is
fine; rewriting content is not).

Filename: `lowercase-kebab-slug.md`, prefixed `la-` or `kr-` when region-specific.

Template:

```markdown
# ⟨Page title⟩

- **URL:** ⟨link⟩
- **Publisher / author:** ⟨who⟩
- **Date accessed:** ⟨YYYY-MM-DD⟩
- **Region:** LA | KR | general
- **Added by:** ⟨teammate name⟩

## Key facts and figures

- "⟨short direct quote with the exact number⟩" — ⟨one line of context⟩
- ...

## Summary

⟨Two sentences.⟩
```

Quote the numbers exactly; don't paste whole articles. A judge wants the figure and the
source, not the page.
