# Zaratan Leasing

Operational playbook for filling coliving vacancies (Sage House, and any future coliving properties).
Source-of-truth for positioning, funnel architecture, listing surfaces, and competitor tactics.
For business-level strategy, see [GROWTH.md](./GROWTH.md).

This is a living doc — positioning, framings, and funnel mechanics are an ongoing refinement, not a one-shot answer.

**Strategic focus: external sourcing.**
Historically, ~67% of move-ins came from referrals — current residents bringing friends in — and that motion mostly works on its own.
This playbook exists for the ~33% of vacancies where no resident has a friend ready and we need to source a candidate externally.
That's the motion being refined here: phone screens, listing channels, comparison framings, funnel mechanics.

## When to use this doc

- Before editing a house page (`/pages/houses/*.jsx`) or the Tally form copy.
- When writing a Craigslist post, Instagram caption, or any external listing.
- When deciding how to describe Zaratan to a prospective resident.
- When reviewing competitor sites for tactics worth adopting.

## Positioning

Zaratan is positioned somewhat uniquely in the market -- half corporate coliving (operational support, residents not financial exposed to each other), half diy coliving (people choose their housemates, are involved in daily operations).
The end result is a much stronger product -- a richer social experience than that given by corporate coliving, while being more stable and convenient than the diy alternative.
The challenge is communicating this to prospective applicants, and being able to meet them where they are at in terms of decision timeline.

*(The "half corporate / half DIY" framing is an internal model. Don't use it verbatim in marketing copy — see Language direction below for the public-facing version.)*

So, the pitch has to thread a needle.
Over-emphasizing community sets the wrong internal expectation (residents wanting weeks of candidate review, veto power, boutique selection theater) — which the business model can't sustain, since vacancies fill from real-time applicants on Craigslist and Facebook.
Under-emphasizing community erases the real differentiator and concedes the language to operators who don't deliver it.

**The resolution: separate operational agency from selection agency.**

- **Selection (who moves in):** operator-driven, fast, two-layer filter. *Hard gate:* landlord due-diligence — income, credit, references. *Past that:* housemate-fit judgment call (wants shared living, plans to stay 12+ months, no obvious red flags). No selection theater, no weeks of candidate review. The "good enough" standard is a feature, not a compromise — hand-picked communities are fragile, system-driven communities are resilient.
- **Operations (how the house runs):** resident-led, system-supported. Chore Wheel distributes tasks, residents shape norms, no programming director. This is where the real community claim lives, and it's rare in the category.

This is honest in a way competitors aren't.
Outpost markets "Find Your People" over a centrally-placed boarding-house product with zero resident agency.
Zaratan offers *less* selection agency than residents might wish, and *more* operational agency than any branded coliving operator actually delivers.

**Language direction:** "A house residents actually run." "Operator-light, resident-led." "The community runs the house, not the other way around."

**Avoid:** "Find your people," "find your house find your people," "matching" framing — all imply selection agency and set the wrong expectation in both directions (applicants think it's curated; residents think they get to curate).

## Comparison framings

The pricing theory (see [GROWTH.md § Pricing](./GROWTH.md#pricing)) says we don't need to undercut the alternative — we need to make the bundle legible.
Three framings do that work in marketing copy.

### 1. Itemize the unbundled alternative

Side-by-side cost table: Zaratan all-in vs. peer coliving vs. unbundled (Craigslist room + utilities + internet + cleaning + shared furniture + lease + roommate-replacement risk).
Even when individual numbers are arguable, the *shape* of the comparison stops the conversation from being one number against one number.

Note: at Sage, common-area furniture is included but individual rooms aren't furnished. Be precise in the comparison — overpromising furniture invites disappointment on the visit.

**Current state on `/houses/sage`:** Pricing Comparison table exists (`pages/houses/sage.jsx:117-135`) covering Sage / Other Coliving / Craigslist with Rent, Utilities, Supplies, Food Staples, Internet, Service Fee, Stay Discount, Total. Solid foundation; needs additional rows for Risk reduction differentiators (see Framing 4).

### 2. Anchor against a peer bundle, not Craigslist

Outpost, Common, Starcity all price higher and offer less.
Apples-to-apples — no bundle argument needed when comparing two bundles.
The Craigslist column forces the bundle argument every time; the peer-bundle column doesn't.

**Current state:** The "Other Coliving" column in the Sage comparison table does this generically.
**Decision:** Keep the comparator generic ("Other Coliving"). Naming a specific competitor (e.g. "Outpost") is sharper but invites a competitive snipe-war that isn't worth the marginal precision.

### 3. Mutual lease flexibility

Sage is 4-month initial, then month-to-month — **both ways**.
Residents can leave on 30 days' notice; the operator also can't force a resident out, reassign rooms without consent, or impose a fixed-term lease.
This asymmetric-flexibility-in-the-resident's-favor is rare in coliving — Outpost, for instance, uses fixed-term leases and reserves the right to reassign rooms.

A Craigslist 3BR is a year-long commitment with strangers, deposit lock-up, and roommate-flake risk.
People consistently underweight all of this until it's pointed out.

**Current state on `/houses/sage`:** Mentioned in FAQ #1 ("Is Sage House coliving?") at `pages/houses/sage.jsx:155`. Buried, framed as a constraint ("Leases are initially 4 months") not a benefit, and missing the bidirectional/anti-eviction protection angle.
**Gap:** Should appear as a row in the comparison table ("Lease commitment: Sage 4mo + M2M, mutual | Other Coliving fixed-term, operator-reassignable | Craigslist 12mo lock-in") and have its own FAQ. Highest-leverage edit on the page.

### 4. Risk reduction

Shared-housing horror stories (the crazy roommate, the broken stuff nobody fixes, the operator who won't help) are the deepest objection to coliving.
Don't invoke the horror to dispel it — lead with the systems and the evidence that bound it. Assert the positive; let the reader's existing fears find their own answer.

Concrete differentiators worth surfacing:

- **Financial isolation.** Your rent is yours alone — you're not on the hook for a housemate's share, and you don't have to find your own replacement when you leave.
- **Problem-housemate removal exists.** Sage has a process for addressing serious problems with housemates, including removal when necessary. Most corporate coliving doesn't (e.g. at Outpost, eviction is functionally impossible under NYC law, so problem residents stay).
- **Conflicts bounded by governance.** Chore Wheel and resident-shaped norms keep day-to-day frictions inside normal ranges. Variance is what people fear, not average — the systems compress variance.
- **Resident-controlled house budget.** Part of rent funds a budget residents use to replace broken items and improve the space. At corporate coliving, broken stuff often stays broken.
- **Vetted housemates.** Selection isn't curated by current residents (see Positioning), but the operator runs the landlord due-diligence + fit screen. Strangers don't just appear in the house.
- **Operational agency for residents.** Decorate, install shelves, paint rooms, allocate the house budget, shape house norms. Not a hotel room you rent; a home you have stake in.
- **Every voice heard.** Systems ensure decisions aren't made by the loudest resident. Quiet residents get the same weight as vocal ones.
- **No hidden fees.** All-in pricing. The Sage comparison table already surfaces this (Service Fee $0 vs. $175 at "Other Coliving").

**How to deploy these in copy:** assert the positive system ("Sage has a process for removing problem housemates") rather than the negative comparison ("we won't be a horror story"). The first communicates safety without invoking fear; the second invokes the fear in the act of denying it.

## Funnel architecture

### Source data

Historical move-ins (n=25): Referral 72%, Craigslist 20%, Listings Project 4%, Facebook 4%.
Top-of-funnel interest form (n=19, new): Craigslist 32%, Other 21%, Friend 16%, SpareRoom 11%, Facebook 11%, Website 5%, WhatsApp 5%.

Two populations, two different distributions.
The historical data shows what converts; the form data shows what visits the site.
Listing channels generate top-of-funnel volume; referrals generate move-ins.

### Current funnel (broken at email step)

1. **Awareness** — listing channels (Craigslist, SpareRoom, Listings Project, Facebook groups), Instagram (`instagram.com/sage.co.op`), Substack mentions, Supernuclear case study, NBC4 segment, word-of-mouth.
2. **Landing** — `/houses/sage` or `/sage` (short URL).
3. **Interest** — Tally form at `/interest` (`tallyInterestUrl = tally.so/r/gDLPzN`). CTA event: `cta_waitlist_sage`.
4. **Automatic email** — sent within minutes with application link.
5. **(Drop)** — interest-form submitters rarely complete the application.

The bottleneck isn't response speed (minutes-fast already).
It's engagement — the impersonal "here's the application link" handoff doesn't convert.

### Planned funnel (Outpost-inspired, not yet built)

Modeled on Outpost's own intake when the founder first applied there.

1. **Awareness** — same as above.
2. **Landing** — same.
3. **Interest** — Tally form.
4. **Soft response** — automated email with a Google Drive of additional photos + a promise to call within 24 hours. Builds desire while introducing personal contact.
5. **Phone screen** — verbal conversation. Operator confirms fit and interest; candidate confirms the place. Replaces the impersonal "here's the application link" handoff. **Target conversion: ~30%** (baseline guess, refine after first cohort).
6. **Application** — `/apply`, sent only after verbal interest is confirmed.
7. **Visit** — in-person tour. Conversion event.
8. **Move-in** — 4-month initial lease, then month-to-month.

**Reported conversion:** 80% application-to-move-in (per GROWTH.md). Most of the leak is upstream — interest → application is the largest drop.

### Decision-timeline assumption

Default assumption: prospective residents are looking for housing within ~2 weeks and want a fast turnaround.
All else equal, faster turnaround wins.
Casual/exploratory shoppers are directed to the interest form for future-vacancy notifications rather than routed through the active funnel.

## Listing surfaces

### On-site

| Surface | Path / URL | Purpose | CTA event |
|---|---|---|---|
| Homepage | `pages/index.jsx` | Brand intro, both products | `newsletter_signup` |
| Sage long-form | `pages/houses/sage.jsx` / `/sage` | Full Sage listing, pricing table, FAQ | `cta_waitlist_sage` |
| Interest form | Tally `gDLPzN` / `/interest` | Capture for Sage waitlist | (form submit) |
| Application | `/apply` | Full application post-interest | (form submit) |
| About | `pages/about.jsx` | Founder context, consult booking | `cta_book_consult`, `cta_email_about` |
| Instagram (Sage) | `instagram.com/sage.co.op` | Lifestyle proof, community signal | external |
| Blog | `blog.zaratan.world` | Long-form, SEO, Substack-syndicated | external |

### Off-site (experimental — try platforms, see what converts)

Current rotation: Craigslist, SpareRoom, Listings Project, Facebook groups.
More platforms get added over time.
Templates aren't canonicalized yet — worth doing once a vacancy cycle proves a winner.

### Referral channel

72% of historical move-ins came from referrals.
The motion is largely organic: residents want to live with friends, and friends who visit and like the house apply.
No formal program needs to drive it.

Current incentive: $200 referral credit.
Effectiveness is unknown — possibly not moving the needle since the inherent desire to live with friends is already strong.
Considering reducing to $100; potentially drop entirely if it's pure cost without measurable lift.

The referral channel isn't the focus of this playbook (it mostly works on its own).
The strategic problem is the ~33% of vacancies without a referral pipeline.

## Competitor playbooks

### Outpost Club (outpost.me)

NYC coliving operator at very different scale (50+ properties, 12,000+ tenants).
Lived-in perspective: founder is a current Outpost resident, so notes are firsthand.

**Steal:**
1. **Stacked social proof above the fold** — Google + Facebook + Trustpilot ratings displayed together with press logos. Quantified credibility before any copy.
2. **One short resident video** — a 30–60s clip is more persuasive than any copy. Already have YouTube embeds; add a resident testimonial.
3. **Numbers on the home page** — "9 residents, X years operating, 80% application-to-move-in." We have the 80% number; surface it.
4. **"How applying works" 3-step block** — Apply → Visit → Move in. Reduces perceived risk of clicking `/apply`.
5. **Press/mention strip** — Substack, NBC4, Supernuclear count.

**Don't copy:**
- Hero copy ("Rent Furnished Rooms & Apartments Stress-Free") is generic.
- "Find Your People" / matching language — devalued by misuse, wrong selection-agency expectation.
- Heavy promotional pricing / discount theater — wrong for our scale and brand.
- Complex nested navigation — one house, one studio, one application flow.

**Differentiators to position against** (concrete weaknesses Sage doesn't have):
- **No problem-housemate removal.** Eviction is functionally impossible in their jurisdiction; serious issues with housemates have no operator-driven resolution path. Sage has process for removal when warranted.
- **No replacement of shared supplies.** Broken items in common areas stay broken — operator won't replace. Sage allocates part of rent to a resident-controlled house budget.
- **Asymmetric lease power.** Fixed-term leases; operator reserves the right to reassign rooms without consent. Sage is month-to-month both ways.

Use these as positive Sage claims, never as negative Outpost claims (see Risk reduction in Comparison framings for how to deploy).

### Bungalow / Cohabs / Cohaus (TBD detail)

- **Bungalow** — national coliving operator, master-lease model.
- **Cohabs** — international community-oriented coliving.
- **Cohaus** — LA-only, directly in our market.

Detailed playbooks for each TBD as time and competitive overlap warrant.

### June Homes (junehomes.com)

VC-backed furnished-rental network (~2,200 units, SoftBank + Demi Lovato backed).
Different category — national flex-lease aggregator, not coliving — but well-engineered and worth mining.

**Steal:**
1. **Publish fit expectations, not credit gates** — "We look for residents who want shared living and plan to stay 12+ months." Self-screens for fit, avoids selection theater.
2. **Concrete time commitment** — "We respond to applications within 48 hours" or "We schedule visits within a week." A number beats a vibe.
3. **Itemized cost breakdown** — already have this on Sage; extend to any future coliving listing.
4. **Neighborhood-flavored content** — "Living in Highland Park" page (walkability, coffee, transit) as cheap SEO + qualification asset.
5. **Schema.org markup** — Organization + LocalBusiness JSON-LD. Sage already has `LodgingBusiness` schema (`pages/houses/sage.jsx:24-41`); extend pattern.

**Don't copy:**
- Filter-search hero — we have 9 rooms in one house, not 1,488 units.
- Virtual-only move-in — in-person visit is the conversion event.
- Lease-length filter — we want 12+ month residents; short stays would invite churn.
- Credit-score gating language — wrong applicants.
- "Easiest rental experience" framing — treats housing as a transaction, opposite of our pitch.

### Underlying lesson

June Homes optimizes for **reducing friction in a low-trust transaction**.
Zaratan is the opposite problem: **increasing trust in a high-commitment relationship**.
Borrow honesty mechanics (qualification rules, itemized costs, time commitments) and SEO infrastructure (neighborhood pages, schema markup); reject transactional UX.

## Open questions

- **External-sourcing motion design.** The core focus of this doc — the v1 funnel (interest form → email + Drive → phone screen → application → visit) is designed but not yet built. Needs implementation and first-cohort data.
- **Phone screen conversion target.** 30% as initial baseline. Real number TBD once enough phone screens have run to compute.
- **Sage page comparison table additions.** Candidate new rows: Conflict resolution, House budget, Mutual lease flexibility (reframing the current lease mention). Continue gathering ideas before deciding what ships publicly.
- **Off-site listing template canonicalization.** Continue testing platforms — Craigslist, SpareRoom, Listings Project, Facebook. Worth writing canonical templates once a winner emerges.
- **Referral credit calibration.** Currently $200; considering reducing to $100 or dropping entirely. Inherent desire to live with friends may be doing all the work; the credit might be pure cost without lift.
- **Stay Discount communication.** Punt — program still in development. Revisit once design is finalized.
- **Resident video.** Concrete next step, no decision blocker. Just needs a willing resident and a phone.
