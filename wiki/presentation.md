# 10-minute presentation

Built from [problem-statement.md](problem-statement.md), [concept.md](concept.md),
and [pitch.md](pitch.md). Presenter labels are placeholders — swap in real
names before the real run. Timing: ~1 / 3 / 2 / 3 / 1 minutes.

---

## 1. Problem — Presenter 1 (~1 min)

**On screen:** title card, "They're not dying of heat. They're dying alone
in it."

> In South Korea, elderly farmers are dying of heat while working alone in
> their fields. Two cases show what that looks like: a woman in her 80s
> found unconscious near a greenhouse in Jinju, and another woman in her
> 80s found dead in a rice paddy on Jeju Island. Both worked alone.
> ([korea-heat-deaths-elderly.md](../sources/korea-heat-deaths-elderly.md))
>
> The government's own advice is to stay inside between noon and five —
> advice for someone who has somebody else to cover for them. These
> farmers don't.
> ([korea-heat-deaths-elderly.md](../sources/korea-heat-deaths-elderly.md))

## 2. Evidence — Presenter 2 (~3 min)

**On screen:** the two stat cards from `index.html` — lead with the season
figure, then the long-pattern figure.

> This isn't a one-time story. In the 2025 heat season alone, through
> mid-September, **5 of 29** heat deaths in Korea were elderly people who
> died doing outdoor field work.
> ([korea-heat-deaths-2025-season-elderly-farmworkers.md](../sources/korea-heat-deaths-2025-season-elderly-farmworkers.md))
>
> And it goes back further than this season. Since Korea started counting
> in 2011, **two out of three** of the country's **238** recorded heat
> deaths are people 60 or older, and **nearly a third (32%)** happen on
> farms. ([korea-heat-deaths-elderly.md](../sources/korea-heat-deaths-elderly.md))
>
> This is exactly what SDG Target 13.1 calls "adaptive capacity to
> climate-related hazards," and Target 13.3 calls "early warning."
> ([un-sdg13-targets.md](../sources/un-sdg13-targets.md))

## 3. Solution — Presenter 3 (~2 min)

**On screen:** the "How HeatWatch works" 3-step graphic from `index.html`.

> So we built HeatWatch: an early-warning and check-in service. Days
> before a heat wave, it calls or texts the farmer, a family member we
> call their buddy, and a local health worker — all at once. During the
> dangerous hours, the farmer checks in by phone or a simple field device.
> Miss a check-in, and the buddy and health worker are alerted
> immediately. ([concept.md](concept.md))
>
> This warning-first design follows the same shape as Ahmedabad's Heat
> Action Plan, which gives up to 5 days' notice before a heat wave and is
> credited with averting roughly 1,190 deaths a year in that city — a
> different city, cited here for the approach, not as a Korea number.
> ([ahmedabad-heat-action-plan.md](../sources/ahmedabad-heat-action-plan.md))
>
> It's sold to local governments and agricultural co-ops, not to farmers
> directly, and it starts as a single-village pilot.
> ([concept.md](concept.md))

## 4. Demo — Presenter 4 (~3 min)

**On screen:** two live browser tabs — `app/checkin.html` and
`app/dashboard.html`, side by side.

- Open the dashboard: show the roster, sorted so overdue is impossible to
  miss.
- Switch to the check-in screen: press "I'm OK" → dashboard updates live,
  no reload.
- Use "Start a new check-in window," let the countdown lapse this time →
  status flips to "Overdue" automatically on both screens.
- Back on the dashboard, click "Mark as checked" → check-in screen shows
  "A health worker checked on you."

> This is a working app, not a mockup — built from our own problem
> statement and concept, with every number on the pitch page linked
> straight back to its source.

No new figures are introduced in this section — it's the app itself,
built per [concept.md](concept.md).

## 5. Ask — All presenters (~1 min)

> What we want is one village and one agricultural co-op willing to run a
> real pilot with us. Give us one season, and we'll show you whether this
> saves a life. ([pitch.md](pitch.md), [concept.md](concept.md))

---

## What we cut, on purpose

The LA-vs-Korea comparison and the national U.S. mortality trends — the
region's decided, so that evidence doesn't need airtime here.
([la-vs-south-korea.md](la-vs-south-korea.md),
[national-heat-trends.md](national-heat-trends.md))
