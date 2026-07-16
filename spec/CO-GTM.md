# Coliving — Go-To-Market

Operational playbook for positioning and filling coliving vacancies (Sage House, and any future coliving properties).
Source-of-truth for positioning, pricing, funnel architecture, listing surfaces, and competitor tactics.
For overall company strategy, see [STRATEGY.md](./STRATEGY.md). For the coliving product spec, see [CO-PROD.md](./CO-PROD.md).

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

Zaratan is positioned somewhat uniquely in the market -- half corporate coliving (operational support, residents not financially exposed to each other), half diy coliving (people choose their housemates, are involved in daily operations).
The end result is a much stronger product -- a richer social experience than that given by corporate coliving, while being more stable and convenient than the diy alternative.
The challenge is communicating this to prospective applicants, and being able to meet them where they are at in terms of decision timeline.

*(The "half corporate / half DIY" framing is an internal model. Don't use it verbatim in marketing copy — see Language direction below for the public-facing version.)*

So, the pitch has to thread a needle.
Over-emphasizing community sets the wrong internal expectation (residents wanting weeks of candidate review, veto power, boutique selection theater) — which the business model can't sustain, since vacancies fill from real-time applicants on Craigslist and Facebook.
Under-emphasizing community erases the real differentiator and concedes the language to operators who don't deliver it.

**The resolution: separate operational agency from selection agency.**

- **Selection (who moves in):** two-stage process with a clear handoff. *Operator-owned (top-of-funnel):* landlord due-diligence (income, credit, references) + initial fit screen via phone call. *Housemate-owned (final decision):* visit, culture-fit conversation, yes/no on the candidate. Aspirational standard per the lease is fast turnaround with "default yes / maybe veto"; in practice the housemate stage has drifted toward extended multi-candidate evaluation — a structural gap (see Open questions). The "good enough" standard is a feature, not a compromise — hand-picked communities are fragile, system-driven communities are resilient.
- **Operations (how the house runs):** resident-led, system-supported. Chore Wheel distributes tasks, residents shape norms, no programming director. This is where the real community claim lives, and it's rare in the category.

This is honest in a way competitors aren't.
Outpost markets "Find Your People" over a centrally-placed boarding-house product with zero resident agency.
Zaratan offers *less* selection agency than residents might wish, and *more* operational agency than any branded coliving operator actually delivers.

**Language direction:** "A house residents actually run." "Operator-light, resident-led." "The community runs the house, not the other way around."

**Avoid:** "Find your people," "find your house find your people," "matching" framing — all imply selection agency and set the wrong expectation in both directions (applicants think it's curated; residents think they get to curate).

### Resident relationship: agency, expectations, and reputation

The canonical incident behind this section is the **Parable of the Washer** ([STRATEGY.md](./STRATEGY.md) § Operating Principles) — well-intended generosity that netted to disappointment through under-structured agency and drip-fed conditions.

The split above covers two kinds of agency; the resident relationship needs a third.

- **Financial agency** is the third axis.
  Operational agency is cheap to grant and is the differentiator — grant it generously.
  Financial agency (rev-share framed as "their money," "free" perks, resident-directed funds) is expensive to grant loosely: it feeds an entitlement frame and sets expectations the economics can't always meet.

Most resident upset comes from **violated expectations**, not from the model itself — and expectation-shaping is a lever the operator controls.
Calibrated, not catastrophized: ~1 in 5 residents won't reconcile with a for-profit operator no matter what (a fixed cost, not worth optimizing for); the other ~80% are maintainable, and stay maintainable when reality matches what they expected.

Root distortion: residents (often a few years out of college) read Zaratan as a "University administration" — an institution of abundant resources — rather than an individual carrying real financial risk.
This imports false expectations: deep pockets, abundance owed, asking-is-costless.

Two operator-controlled levers:

- **Front-load the full shape of any deal before saying yes.**
  Name every condition and feasibility check up front so they read as stated goalposts, not moved ones.
  An enthusiastic yes followed by drip-fed terms is the most reliable way to look like bad faith, even with good intent.
- **Make operator risk legible early, as baseline — never reactively when declining a request.**
  The same fact ("one person carrying real risk, not an endowment") earns goodwill set at move-in and reads as nickel-and-diming when surfaced under pressure.

**Reputation as a channel.**
This is why uncontrolled public review profiles (e.g. Google Business) are a poor fit: they capture expectation-violation moments (rent, exit) with no way to set context first, and grievance writes more reviews than contentment.
Build social proof from sources that don't depend on resident goodwill toward the brand: operator-owned outcomes (80% application-to-move-in, tenure/retention), the product itself (Chore Wheel as proof the model works), and third-party/press.
This qualifies the resident-review and testimonial tactics borrowed from competitors below.

## Pricing

Two market ceilings define the maximum chargeable rent in NELA:

- **Median Craigslist room price** in the same radius — the unbundled alternative for a price-shopping prospective resident.
- **Median 3+BR house ÷ 3** — the "move out with friends" alternative for residents considering exit.

Current snapshots live in `analytics/pricing/` (regenerated by the housing-agent job).
Both ceilings already control for location, so a location-premium argument doesn't justify pricing above either.

**We do not need to undercut the 3BR-per-bed alternative.**
The bundle absorbs ~$200–400/mo of costs that a 3BR split ignores: lease, deposit, utilities, internet, cleaning, furniture, roommate sourcing, replacement on departure, governance for conflicts.
Pricing *at* the 3BR-per-bed median is already a real-cost discount once the bundle is internalized.

**The discount we actually need is for unknown-quantity friction, not for the alternative being cheaper.**
Prospective residents are entering a high-commitment relationship with an unfamiliar product.
A discount (or strong social proof / itemization) closes the trust gap, not the cost gap.

### Refinements

- **Use p25 as the conservative anchor on the room ceiling, not median.** A motivated comparison-shopper finds rooms at the lower end of the distribution. p25 is the worst-case alternative price; median is the typical-effort price.
- **Ability to pay is a third, much higher ceiling.** An $80–100K target persona's 30% housing budget is ~$2,000–2,500/mo — well above both market ceilings. Current pricing is bounded by market comp, not affordability. Headroom exists for a bundle premium if it can be established.

The three comparison framings that make the bundle legible at the point of decision are below.

## Comparison framings

The pricing theory (see [Pricing](#pricing) above) says we don't need to undercut the alternative — we need to make the bundle legible.
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
3. **Interest** — Tally form at `/interest` (`tallyInterestUrl = tally.so/r/gDLPzN`) → Airtable pipeline. CTA event: `cta_waitlist_sage`.
4. **Automatic email** — sent within minutes with application link.
5. **(Drop)** — interest-form submitters rarely complete the application.

The bottleneck isn't response speed (minutes-fast already).
It's engagement — the impersonal "here's the application link" handoff doesn't convert.
Next instrumentation step: track interest-to-application conversion rate so the drop is measured, not just inferred.

### Planned funnel (Outpost-inspired, not yet built)

Modeled on Outpost's own intake when the founder first applied there.

1. **Awareness** *(operator)* — same as above.
2. **Landing** *(operator)* — same.
3. **Interest** *(operator)* — Tally form.
4. **Soft response** *(operator)* — automated email with a Google Drive of additional photos + a promise to call within 24 hours. Builds desire while introducing personal contact.
5. **Phone screen** *(operator)* — verbal conversation. Operator confirms fit and interest; candidate confirms the place. Replaces the impersonal "here's the application link" handoff. **Target conversion: ~30%** (baseline guess, refine after first cohort).
6. **Application** *(operator delivers candidate)* — `/apply`, sent shortly after phone screen while intent is still fresh.
7. **Visit** *(housemates)* — in-person tour. Culture-fit conversation. Housemate-owned decision.
8. **Move-in** *(operator)* — 4-month initial lease, then month-to-month.

**Ownership boundary.** Steps 1–6 are operator-owned: sourcing, screening, delivering a qualified, applied candidate. Step 7 hands off to housemates for the final culture-fit decision. Step 8 returns to the operator for lease and logistics. The whole point of this playbook is to make the operator side fast and reliable so the housemate side can do its work without back-end pressure on candidate timing.

**Early signal (2026-07-15):** first runs of the phone-screen step are promising — 2 interest forms → 2 screens → 2 applications (n=2, watch form→screen as volume grows).

**Reported conversion:** 80% application-to-move-in. Most of the leak is upstream — interest → application is the largest drop.

### Decision-timeline assumption

Default assumption: prospective residents are looking for housing within ~2 weeks and want a fast turnaround.
All else equal, faster turnaround wins.
Casual/exploratory shoppers are directed to the interest form for future-vacancy notifications rather than routed through the active funnel (the reservoir/waitlist model).

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

NYC coliving operator at very different scale (50+ properties, 12,000+ tenants), so not all tactics transfer.
Lived-in perspective: I'm a current Outpost resident, so these notes are firsthand, not site-reading.
Several patterns are cheap to adopt and worth stealing — but their community claim is marketing fiction, not a model.

**What they do well:**
- **Stacked social proof above the fold.** Google (4.4, 638 reviews), Facebook (4.6), Trustpilot (4.0) ratings displayed together, plus press logos (Forbes, Fox, NYC.gov). Quantified credibility before any copy.
- **Video testimonials.** ~10 embedded resident videos, not just text quotes. Higher trust per pixel.
- **Concrete numbers as positioning.** "12,000+ Tenants", "50+ Nationalities", "24/7 Support" — every claim has a number attached.
- **"How it Works" as a 4-step graphic.** Demystifies the application flow upfront, reduces friction for first-time renters.
- **Promotional pricing with strikethroughs.** Original price crossed out next to discounted price. Creates urgency without scarcity language.
- **Segmented funnels.** Separate landing experiences for students (FALL2026 promo code), corporate groups, and individual renters.
- **Amenities transparency.** Icon grid (~25 items per listing) so visitors don't have to ask basic questions.

**What they market well but don't deliver:**
- **"Find Your People" / community-forward language.** In practice, Outpost centrally places tenants. Residents have zero say over who moves in — it's a branded boarding house with a community wrapper. Informative for two reasons: (1) the market clearly rewards community language even with nothing behind it, so Zaratan's real claim has competitive value; (2) the words "find your people" / "matching" have been devalued by misuse and shouldn't be borrowed. We need different language (see Positioning above).

**Steal:**
1. **Pull review counts onto the homepage.** Even one Google rating with a count beats a generic testimonial. Low-cost trust win.
2. **One short resident video.** A 30–60s clip of a Sage House resident is more persuasive than any copy I can write. Already have YouTube embeds; add a resident testimonial.
3. **Numbers on the home page.** "9 residents, X years operating, 80% application-to-move-in." We already have the 80% number — use it.
4. **"How applying works" 3-step block.** Apply → Visit → Move in. Reduces the perceived risk of clicking `/apply`.
5. **Press/mention strip.** Substack mentions, NBC4, Supernuclear case study, podcast appearances count.

> Caveat (items 1–2): resident-sourced public reputation is structurally fragile for our model — see Positioning → "Resident relationship: agency, expectations, and reputation."
> Lead with #3/#5 (operator-owned numbers, press) as the load-bearing proof; treat resident reviews/video as curated and optional, never an open review profile.

**Don't copy:**
- Their hero copy ("Rent Furnished Rooms & Apartments Stress-Free") is generic. We can do better with specific positioning (resident-led, system-supported, not a landlord product).
- "Find Your People" / matching language — see above. Devalued by misuse; sets the wrong selection-agency expectation.
- Heavy promotional pricing / discount theater is wrong for our scale and brand. We're not running a sales funnel, we're filling 1–2 rooms.
- Complex nested navigation. Our site should stay simple — one house, one studio, one application flow.

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

VC-backed furnished-rental network (SoftBank + Demi Lovato, $50M, TechCrunch 2021).
Different category — national flex-lease aggregator, not coliving — with ~2,200 units across NYC (1,488), Boston (507), DC, LA, Chicago, Austin.
Site is well-engineered and worth mining for tactics.

**What they do well:**
- **Filter-first hero.** Homepage is a search form: city, hometype, lease length (1/3/6/12mo), move-in date. Visitors self-segment before reading any copy.
- **"3 business hours to approval" as a headline promise.** A concrete, time-bound commitment beats any "easy" adjective.
- **Qualification rules published upfront.** Each city states income (3x rent), assets (36x), credit score (550–650+). Honest filter — no surprise rejection after applying.
- **Itemized upfront costs.** "First month + deposit + fees, due within 3 days of signing." The transparency itself is a trust signal.
- **Neighborhood-level SEO pages.** Brooklyn has 15 (Bed-Stuy, Bushwick, Williamsburg…), Boston 25. Each a long-tail search target.
- **Schema.org structured data.** Organization + WebSite + SearchAction markup. Google can render their search box in SERPs.
- **Dismissible press banner.** "Check out our recent write-up in TechCrunch!" — low-pressure, top-of-page.
- **Two parallel off-ramps.** Klaviyo email capture + Frontapp live chat for visitors who aren't ready to apply.

**Steal:**
1. **Publish fit expectations, not credit gates.** One line: "We look for residents who want shared living and plan to stay 12+ months." Self-screens for fit. Avoids selection theater (which the business model can't sustain) and credit-gating language (which attracts the wrong applicants and is also what Outpost-style operators use to screen for revenue, not for community).
2. **Concrete time commitment, fast.** "We respond to applications within 48 hours" or "We schedule visits within a week." A number beats a vibe — and a *fast* number reinforces the operator-driven selection model (no weeks-long deliberation, no curated boutique process).
3. **Itemized cost breakdown.** "$1,250/mo includes rent + utilities + food staples + internet + supplies. First month + deposit due at signing." We have the all-in story — make the itemization visible. Sage already has the comparison table; extend to any future coliving listing.
4. **Neighborhood-flavored content.** A "Living in Highland Park" page (walkability, coffee, transit) is a cheap SEO + qualification asset.
5. **Schema.org markup.** Sage already has `LodgingBusiness` schema (`pages/houses/sage.jsx:24-41`); extend the pattern (Organization + LocalBusiness JSON-LD).

**Don't copy:**
- **Filter-search hero.** They have 1,488 NYC units; we have 9 rooms in one house. A search UI would feel absurd. Our hero is the house.
- **Virtual-only move-in.** Anti-pattern for community housing — the in-person visit is the conversion event where mutual fit gets established.
- **Lease-length filter (1/3/6 months).** We want 12+ month residents. Surfacing short stays would invite churn.
- **Credit-score gating language.** Our application is relational, not algorithmic. "650+ required" would attract the wrong applicants.
- **App for rent + maintenance.** Overengineering at our scale, and the opposite of the Chore Wheel self-management ethos.
- **Generic "easiest rental experience" framing.** Treats housing as a transaction. Our pitch is the opposite.

### Underlying lesson

June Homes optimizes for **reducing friction in a low-trust transaction**.
Zaratan is the opposite problem: **increasing trust in a high-commitment relationship**.
Borrow their honesty mechanics (qualification rules, itemized costs, time commitments) and SEO infrastructure (neighborhood pages, schema markup); reject their transactional UX.

## Open questions

- **Structural gap: cost-bearer ≠ decision-maker (high priority, next few months).** Operator bears 100% of vacancy cost during recruitment; housemates hold veto power but have no skin in the game. The pattern that emerges — slow, perfectionist multi-candidate evaluation — contradicts the lease's "default yes / maybe veto" design and bottlenecks the external-sourcing motion this playbook optimizes for (candidates time out before housemates decide; one recent cycle: 7 interested → 0 applied). Planned structural fixes to discuss at next house meeting: 50/50 vacancy cost split, Long Stay rent credits, retroactive tenure credits. Until resolved, the housemate decision stage is the binding constraint on funnel speed.
- **External-sourcing motion design.** The core focus of this doc — the v1 funnel (interest form → email + Drive → phone screen → application → visit) is designed but not yet built. Needs implementation and first-cohort data.
- **Phone screen conversion target.** 30% as initial baseline. Real number TBD once enough phone screens have run to compute.
- **Sage page comparison table additions.** Candidate new rows: Conflict resolution, House budget, Mutual lease flexibility (reframing the current lease mention). Continue gathering ideas before deciding what ships publicly.
- **Off-site listing template canonicalization.** Continue testing platforms — Craigslist, SpareRoom, Listings Project, Facebook. Worth writing canonical templates once a winner emerges.
- **Referral credit calibration.** Currently $200; considering reducing to $100 or dropping entirely. Inherent desire to live with friends may be doing all the work; the credit might be pure cost without lift.
- **Stay Discount communication.** Punt — program still in development. Revisit once design is finalized.
- **Resident video.** Concrete next step, no decision blocker. Just needs a willing resident and a phone.
