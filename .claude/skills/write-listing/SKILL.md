---
name: write-listing
description: Draft a room listing for a Zaratan coliving house (Sage), tuned to a target channel (Craigslist, SpareRoom, Listings Project, Facebook). Pulls positioning and pricing from the repo, applies the coliving GTM guardrails, and outputs plaintext copy to paste. Use when writing or refreshing a room listing, sublet post, or vacancy ad.
---

# Draft a room listing

Produce plaintext listing copy for an open room, tuned to a target channel.
Output copy only — the user pastes it into the channel themselves.

## Inputs to gather

Ask for whatever the user hasn't already given:

- **Room specifics** — rent, available date, minimum stay, room size/features, which house.
- **Target channel** — Craigslist, SpareRoom, Listings Project, or Facebook group. Each reads differently; if unspecified, ask.
- **Anything time-sensitive** — move-in urgency, promotions, specific vibe to emphasize.

## Context to load before drafting

- `spec/CO-GTM.md` — positioning (§Positioning), the comparison framings (§Comparison framings), and the listing-surface + channel table (§Listing surfaces). This is the source of truth for how a listing should argue.
- Latest `analytics/pricing/report-*.md` — pull the current median Craigslist room comp so the price is anchored against a real market number, not asserted in a vacuum.
- `samples.md` (this folder) — real listings collected for reference. Match a sample to the target channel and borrow structure/tone, guided by each sample's annotation. Read the annotations, not just the copy.
- `spec/CO-TESTIMONIALS.md` — verbatim quotes from Sage residents. This is the primary source for voice: quote or closely paraphrase real resident language instead of inventing warmth. If it's empty, say so and lean plainer — an invented "we" voice reads false.

## Guardrails (non-negotiable)

- **Lead with operational agency, not selection agency.** Emphasize what's handled for the resident — all-in pricing, utilities, supplies, logistics, low-friction move-in. Do *not* promise curated community or a hand-picked social fit.
- **Do not say** "find your people," "your people," or any language implying boutique candidate selection / veto / weeks of review. Vacancies fill from real-time applicants; over-promising community sets an expectation the model can't sustain (see CO-GTM §Positioning, line 30).
- **Anchor on the bundle.** The differentiator is all-in cost + mutual lease flexibility (short min stay + month-to-month) vs. a 12-month Craigslist lock-in with strangers. Make the itemized inclusion visible where the channel allows.
- **Keep it truthful and concrete.** Time-bound promises ("approval in 3 business hours") beat vague adjectives ("easy," "amazing"). No claims the house can't back.

## Channel notes

- **Craigslist flagging (learned 2026-07):** a post was auto-flagged; flagging appears cumulative, not single-keyword. Never use urgency/scarcity phrasing ("expect it to go quickly") — textbook scam-filter trigger with no informational value. The off-site link (zaratan.world/interest) has survived on past posts but likely adds risk — keep it, but don't stack other triggers on top. When reposting after a flag or expiry, reword meaningfully (e.g. rotate the resident quote); the similarity filter compares against prior posts.

## Output

- Plaintext, ready to paste. No markdown scaffolding unless the channel supports it.
- Lead with a headline, then body, then a clear next step / CTA appropriate to the channel.
- If useful, offer a short and a long variant.

## Growing this skill

When a listing performs well (or a competitor's does), add it to `samples.md` — annotated with why it's here and tagged by channel. See CO-GTM §Listing surfaces (line 326): canonicalize templates once a winner emerges.
