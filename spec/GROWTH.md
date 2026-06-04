# Zaratan Growth

Living document for growth strategy and company-building.
Last updated: 2026-06-04.

For the coliving leasing playbook (positioning, funnel, listing surfaces, competitor tactics), see [LEASING.md](./LEASING.md).
Sections below on Positioning, Competitor Notes, and the pricing comparison framings are the source for that doc and will be trimmed here in a follow-up.

## Two Businesses

Zaratan runs two businesses under one brand:

1. **Coliving rental business** — Sage House (9 residents), Cactus Cottage (studio). Revenue from rent. Local to LA.
2. **Chore Wheel** — open-source governance tool suite for shared houses, deployed as Slack apps. The strategy is that communities already use Slack, so adoption is a lightweight install rather than a new platform. Donation-based. Seeking growth and adoption.

## Target Audience

**Primary (ICP):** Operator-led shared houses — a property manager, house lead, or founder who can make adoption decisions.
Single decision-maker = easier adoption.

**Secondary:** Flat/democratic houses with 4+ residents and real stakes.
Can work, needs stronger onboarding and marketing pitch.

## Key Insights

- The website is a landing pad, not a growth engine. Substack is the strongest distribution channel.
- Organic search is not an acquisition channel for us.
  The 2026-06 GSC report shows traffic is competitor-name searches (the SettleLiving review post ≈ half of clicks) and generic "sage" / "chore wheel" terms with no ICP intent.
  With one house's worth of pages, SEO scale doesn't apply.
- Acquisition is push and relational (Substack, warm intros, being where operators already are), not pull.
  The site converts traffic we send it; it doesn't manufacture traffic.
- Onboarding is the #1 product bottleneck. Not distribution, not design.
- Chore Wheel works when: physical shared space + recurring obligations + enforcement mechanism.
- When context is right and onboarding succeeds, the product sticks. When either is wrong, it churns.
- 80% application-to-move-in conversion on housing side = the product (the house) works. Upstream pipeline is the constraint.

## Key Feedback (Feb 2026)

From a potential partner connection who reviewed the Chore Wheel slide deck:
- The deck focuses on features, not benefits. Needs to lead with pain (burnout, conflict, turnover), not product mechanics.
- Position as a "digital house manager" that removes emotional friction.
- Any pilot needs: defined success metrics, concierge onboarding (don't just give a login), clear 30-60 day timeline, low-risk framing.
- Problem-first narrative: pain → cost → solution → evidence → ask.

This feedback is captured in detail in spec/TOOLS.md under "Pilot Playbook."

## Growth Priorities

1. **Follow up on the multi-house operator intro** — warm connection from Feb 2026, follow-up overdue. One org with multiple houses could be more users than the entire current base.
2. **Fix Chore Wheel onboarding** — self-serve setup so new houses don't need founder hand-holding. Concierge onboarding for pilots in the meantime.
3. **Leverage Substack** — it's already the strongest channel. Write more, link strategically.
4. **Site hygiene, not SEO-as-growth** — canonicalize www vs apex, fix titles/snippets, structured data, meta descriptions, headings.
   The 2026-06 GSC report confirms organic search delivers non-ICP traffic, so these are cheap correctness fixes, not a growth lever.
   The one real-ICP search surface is *local* housing intent — a Google Business Profile + a "Living in Highland Park" neighborhood page — but weigh GBP against the reputation-channel risk under Positioning before opening any public review profile.
5. **Website refresh** — deprioritized until traffic grows.

## Pipeline (Housing)

- Tally interest form live at zaratan.world/interest
- Feeds into Airtable pipeline
- Short URLs: /apply (application), /sage (Sage House page), /interest (Tally form)
- Next: track interest-to-application conversion rate

## Open Questions

- Chore Wheel is Slack-native by design (low adoption friction). Building a standalone app or web interface would be a large lift. How far can we push the Slack-native onboarding experience?
- Does an operator need cross-house visibility?
- What does the minimum viable operator dashboard look like?
- How to reach more coliving operators? (Substack audience? Conferences? Partnerships?)

## Positioning

The pitch has to thread a needle.
Over-emphasizing community sets the wrong internal expectation (residents wanting weeks of candidate review, veto power, boutique selection theater) — which the business model can't sustain, since vacancies fill from real-time applicants on Craigslist and Facebook.
Under-emphasizing community erases the real differentiator and concedes the language to operators who don't deliver it.

**The resolution: separate operational agency from selection agency.**

- **Selection (who moves in):** operator-driven, fast, fit-screened. Applicants should expect a quick yes/no based on whether they want shared living, can cover rent, and plan to stay 12+ months. No selection theater. The "good enough" standard is a feature, not a compromise — hand-picked communities are fragile, system-driven communities are resilient.
- **Operations (how the house runs):** resident-led, system-supported. Chore Wheel distributes tasks, residents shape norms, no programming director. This is where the real community claim lives, and it's rare in the category.

This is honest in a way competitors aren't.
Outpost markets "Find Your People" over a centrally-placed boarding-house product with zero resident agency.
Zaratan offers *less* selection agency than residents might wish, and *more* operational agency than any branded coliving operator actually delivers.

**Language direction:** "A house residents actually run." "Operator-light, resident-led." "The community runs the house, not the other way around."
**Avoid:** "Find your people," "find your house find your people," "matching" framing — all imply selection agency and set the wrong expectation in both directions (applicants think it's curated; residents think they get to curate).

### Resident relationship: agency, expectations, and reputation

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

### Making the bundle legible

The pricing theory only works if prospective residents see the bundle at the point of decision.
Three framings that tend to make unbundled-vs-bundled comparisons land:

1. **Itemize the unbundled alternative on the marketing page.** Side-by-side: Zaratan all-in vs. 3BR split + utilities + internet + cleaning + furniture + lease + roommate-replacement risk. Even if individual numbers are arguable, the *shape* of the comparison stops the conversation from being one number against one number. (Reinforces the "itemized cost breakdown" idea already on the Growth list — see Competitor Notes: June Homes #3.)
2. **Anchor against a peer bundle, not Craigslist.** Outpost, Common, Starcity all price higher and offer less. Apples-to-apples — no bundle argument needed.
3. **Lease flexibility as a bundle item.** Most coliving lets residents leave on 30 days' notice; a Craigslist 3BR is a year with strangers, deposit lock-up, and roommate-flake risk. People consistently underweight this until it's pointed out.

## Competitor Notes: Outpost Club (outpost.me)

NYC coliving operator at very different scale (50+ properties, 12,000+ tenants), so not all tactics transfer.
Lived-in perspective: I'm a current Outpost resident, so these notes are firsthand, not site-reading.
Several patterns are cheap to adopt and worth stealing — but their community claim is marketing fiction, not a model.

### What they do well

- **Stacked social proof above the fold.** Google (4.4, 638 reviews), Facebook (4.6), Trustpilot (4.0) ratings displayed together, plus press logos (Forbes, Fox, NYC.gov). Quantified credibility before any copy.
- **Video testimonials.** ~10 embedded resident videos, not just text quotes. Higher trust per pixel.
- **Concrete numbers as positioning.** "12,000+ Tenants", "50+ Nationalities", "24/7 Support" — every claim has a number attached.
- **"How it Works" as a 4-step graphic.** Demystifies the application flow upfront, reduces friction for first-time renters.
- **Promotional pricing with strikethroughs.** Original price crossed out next to discounted price. Creates urgency without scarcity language.
- **Segmented funnels.** Separate landing experiences for students (FALL2026 promo code), corporate groups, and individual renters.
- **Amenities transparency.** Icon grid (~25 items per listing) so visitors don't have to ask basic questions.

### What they market well but don't deliver

- **"Find Your People" / community-forward language.** In practice, Outpost centrally places tenants. Residents have zero say over who moves in — it's a branded boarding house with a community wrapper. Informative for two reasons: (1) the market clearly rewards community language even with nothing behind it, so Zaratan's real claim has competitive value; (2) the words "find your people" / "matching" have been devalued by misuse and shouldn't be borrowed. We need different language (see Positioning above).

### What we could adopt for Zaratan

1. **Pull review counts onto the homepage.** Even one Google rating with a count beats a generic testimonial. Low-cost trust win.
2. **One short resident video.** A 30–60s clip of a Sage House resident is more persuasive than any copy I can write.
3. **Numbers on the home page.** "9 residents, X years operating, Y% application-to-move-in." We already have the 80% number — use it.
4. **"How applying works" 3-step block.** Apply → Visit → Move in. Reduces the perceived risk of clicking /apply.
5. **Press/mention strip if/when we get any.** Substack mentions, podcast appearances, etc. count.

> Caveat (items 1–2): resident-sourced public reputation is structurally fragile for our model — see Positioning → "Resident relationship: agency, expectations, and reputation."
> Lead with #3/#5 (operator-owned numbers, press) as the load-bearing proof; treat resident reviews/video as curated and optional, never an open review profile.

### What NOT to copy

- Their hero copy ("Rent Furnished Rooms & Apartments Stress-Free") is generic. We can do better with specific positioning (resident-led, system-supported, not a landlord product).
- "Find Your People" / matching language — see above. Devalued by misuse; sets the wrong selection-agency expectation.
- Heavy promotional pricing / discount theater is wrong for our scale and brand. We're not running a sales funnel, we're filling 1–2 rooms.
- Complex nested navigation. Our site should stay simple — one house, one studio, one application flow.

### Caveat

Per the key insights above, the website is a landing pad, not the growth engine.
These are cheap upgrades to make when we touch the site, not a reason to prioritize a refresh.

## Competitor Notes: June Homes (junehomes.com)

VC-backed furnished-rental network (SoftBank + Demi Lovato, $50M, TechCrunch 2021).
Different category — national flex-lease aggregator, not coliving — with ~2,200 units across NYC (1,488), Boston (507), DC, LA, Chicago, Austin.
Site is well-engineered and worth mining for tactics.

### What they do well

- **Filter-first hero.** Homepage is a search form: city, hometype, lease length (1/3/6/12mo), move-in date. Visitors self-segment before reading any copy.
- **"3 business hours to approval" as a headline promise.** A concrete, time-bound commitment beats any "easy" adjective.
- **Qualification rules published upfront.** Each city states income (3x rent), assets (36x), credit score (550–650+). Honest filter — no surprise rejection after applying.
- **Itemized upfront costs.** "First month + deposit + fees, due within 3 days of signing." The transparency itself is a trust signal.
- **Neighborhood-level SEO pages.** Brooklyn has 15 (Bed-Stuy, Bushwick, Williamsburg…), Boston 25. Each a long-tail search target.
- **Schema.org structured data.** Organization + WebSite + SearchAction markup. Google can render their search box in SERPs.
- **Dismissible press banner.** "Check out our recent write-up in TechCrunch!" — low-pressure, top-of-page.
- **Two parallel off-ramps.** Klaviyo email capture + Frontapp live chat for visitors who aren't ready to apply.

### What we could adopt for Zaratan

1. **Publish fit expectations, not credit gates.** One line: "We look for residents who want shared living and plan to stay 12+ months." Self-screens for fit. Avoids selection theater (which the business model can't sustain) and credit-gating language (which attracts the wrong applicants and is also what Outpost-style operators use to screen for revenue, not for community).
2. **Concrete time commitment, fast.** "We respond to applications within 48 hours" or "We schedule visits within a week." A number beats a vibe — and a *fast* number reinforces the operator-driven selection model (no weeks-long deliberation, no curated boutique process).
3. **Itemized cost breakdown.** "$1,250/mo includes rent + utilities + food staples + internet + supplies. First month + deposit due at signing." We have the all-in story — make the itemization visible.
4. **Neighborhood-flavored content.** A "Living in Highland Park" page (walkability, coffee, transit) is a cheap SEO + qualification asset.
5. **Schema.org markup.** Already on the GROWTH list as "SEO basics" — June Homes shows the working pattern (Organization + LocalBusiness JSON-LD).

### What NOT to copy

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
