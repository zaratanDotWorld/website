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
- **Write in the peer-roommate voice, not the institutional one — on every channel.** Sage is a managed operation, but the register that sells it is grassroots: first-person housemate voice, real people, room described after the home and the people. Put the institutional *facts* (all-in price, utilities, supplies, amenities) inside that voice — never as a spec-sheet opener, pricing-sheet line ("$/mo all-in, no hidden fees"), or marketing testimonial. This is a product truth, not just a Craigslist flag-avoidance tactic: compare our own flagged Sage rewrite (spec-sheet register, removed repeatedly) with the year-long survivor (peer prose, ran clean) in `samples.md`. Better still, the ad should genuinely sound like a resident — grassroots peer listings work because actual housemates write them, not because an operator adopts a friendly costume.

## Sage posting facts

- Address: 215 N Ave 56, Los Angeles, CA 90042 (Highland Park). On listings, show cross-streets only, not the exact street number.
- Craigslist geography: subarea **central LA 213/323**, neighborhood field "Highland Park", postal code 90042. Post in one subarea only — cross-posting (e.g. also san gabriel valley) trips the "overposted, cross-posted" clause.
- Transit selling point: ~2 blocks from the A Line Highland Park station (Ave 57 & Marmion Way); walking distance to the York Blvd and Figueroa corridors. Speaks to car-free room-shoppers — worth a line in the house-facts paragraph.

## Channel notes

- **Craigslist: read `craigslist-policies.md` (this folder) before drafting.** It's a field guide compiled from CL's flag-help forum after our 2026-07 flagging episode. The rules that most bind drafting: write a **genuinely fresh ad every vacancy** (reusing a past ad — even one that ran fine for a year — is itself a trigger; the old ads in `samples.md` are reference for register, never templates to reuse); the CL ad must share **no text with any other channel** (SpareRoom, Facebook, our own site — including testimonial quotes that appear on the website); follow the **~60% room / 20% home / 20% neutral roommate facts** recipe; short, concrete, no bullets, no boast words, no testimonials, no screening questions or preference language (fair housing); price in CL's price field; consider "posted by the owner" for legitimacy. Our flagged episode was likely multi-cause — commercial register, reuse/similarity, non-local IP (operator posts from NYC), and the cascade effect (each removal makes the next easier) — per the forum, removals are "usually multiple issues, not just one." If flagged again: don't rapid-fire repost; ask on the flag-help forum (forums.craigslist.org, one thread, they review drafts pre-posting), or have an LA-based housemate post fresh text from their own account/IP to isolate account/geo causes.

## Output

- Plaintext, ready to paste. No markdown scaffolding unless the channel supports it.
- Lead with a headline, then body, then a clear next step / CTA appropriate to the channel.
- If useful, offer a short and a long variant.

## Growing this skill

When a listing performs well (or a competitor's does), add it to `samples.md` — annotated with why it's here and tagged by channel. See CO-GTM §Listing surfaces (line 326): canonicalize templates once a winner emerges.
