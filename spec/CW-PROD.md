# Chore Wheel — Product Spec

Living product definition.
Last updated: 2026-03-29.

For the Chore Wheel go-to-market playbook (the pitch, pilot playbook, partner feedback, operator outreach), see [CW-GTM.md](./CW-GTM.md).
For overall company strategy, see [STRATEGY.md](./STRATEGY.md).

## What It Is

Chore Wheel is an operating system for shared houses.
It's a suite of Slack apps that replaces the exhausting, invisible work of managing a household with software that handles it automatically.

Three tools, each solving a distinct coordination problem:
- **Chores** — fairly distributes household tasks without schedules or nagging
- **Hearts** — creates mutual accountability, resolving conflict clearly and respectfully
- **Things** — manages group purchasing without spreadsheets or Venmo requests

## What It's Not

- Not a chore chart (those require someone to manage them)
- Not a general-purpose collaboration tool
- Not a standalone app (it's Slack-native by design)

## Who It's For

**Primary audience:** Operator-led shared houses (4+ residents) with a property manager, house lead, or founder who can make adoption decisions.

**Why operator-led:** Chore Wheel needs a champion.
Every successful deployment had someone driving adoption.
Every failure lacked that.
A single decision-maker means easier setup, required participation, and real accountability.

**Secondary audience:** Democratic/flat houses with 4+ residents and real stakes.
These can work, but need a stronger onboarding experience and a clearer pitch for why the group should adopt together.

**Not for:** Online-only communities, teams without shared physical space, or situations where participation is optional with no consequences.

**Small groups (2-3 people):** Can work, but the chore list must be proportionally small. A couple with 5 chores works. A couple with 30 chores creates a bad experience.

## Why Slack

The strategy is: communities already use Slack, so Chore Wheel is a lightweight install, not a new platform to adopt.
Building a standalone app or complementary web interface would be a large lift vs. remaining Slack-native.

Tradeoffs:
- **Pro:** Zero platform adoption friction. No new logins, no new apps to download.
- **Pro:** Slack handles notifications, mobile, threading, and presence.
- **Con:** Slack's free tier limitations. Communities that don't use Slack are excluded.
- **Con:** UI is constrained by Slack's interaction model (modals, messages, slash commands).

## Core Mechanics

- Contributions are tracked and visible to everyone
- Accountability is mutual (peer-to-peer), not top-down
- The system handles institutional knowledge — when someone moves out, the house keeps running
- Designed to reduce meetings, not create new ones

## What Success Looks Like

A house installs Chore Wheel and within two weeks:
- Residents are logging contributions without prompting
- The house leader notices they're nagging less
- Residents who were previously invisible contributors are getting recognized
- Conflict about "who does what" drops measurably

Within six months:
- The house survives a resident turnover without losing operational knowledge
- The leader is no longer the bottleneck for house functioning

## Current State

- Open-source (AGPL-3): https://github.com/zaratanDotWorld/choreWheel
- Donation-based / free
- Peer-reviewed research paper published

## Open Questions

- What does self-serve onboarding look like within Slack's interaction model?
- Does an operator running multiple houses need cross-house visibility?
- What's the minimum viable operator dashboard?
- Should the product ever move beyond Slack? At what adoption threshold would that make sense?

## Influences

Chore Wheel draws from Nobel Laureate Elinor Ostrom (Governing the Commons), Stafford Beer (Designing Freedom), and Frederic Laloux (Reinventing Organizations).

## References

- **Source code:** https://github.com/zaratanDotWorld/choreWheel
- **Documentation:** https://docs.chorewheel.zaratan.world/
- **Research paper:** https://ssrn.com/abstract=4856267
- **Chore Protocols (magazine article):** https://protocolized.summerofprotocols.com/p/chore-protocols
- **Metagov talk:** https://archive.org/details/kronovet-metagov-20230329
- **Intro video:** https://www.youtube.com/embed/OMfJdXoh04k
- **Blog:** https://blog.zaratan.world
- **Contact:** hello@zaratan.world
