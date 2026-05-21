# Open Questions & Decisions

This document tracks open questions, assumptions and accepted decisions.

## Open questions

| ID | Area | Question | Owner | Status |
|---|---|---|---|---|
| Q-001 | ERPNext | Should ERPNext be used as the first ERP base for testing? | Vladimir | Open |
| Q-002 | Minisys | Which Minisys functions are actually critical for daily work? | Business owner | Open |
| Q-003 | Logistics | How detailed must LKW disposition be in the first version? | Logistics | Open |
| Q-004 | Pricing | How is EP calculated today, including transport costs? | Business owner | Open |
| Q-005 | Warehouse | Which stock movements and corrections are used daily? | Warehouse | Open |

## Decisions

| ID | Date | Decision | Reason | Status |
|---|---|---|---|---|
| D-001 | 2026-05-21 | Use lean documentation approach | Speed of implementation is more important than exhaustive documentation | Accepted |
| D-002 | 2026-05-21 | Treat most processes as standard until proven otherwise | Small German trading/logistics company should fit standard ERP patterns | Accepted |
| D-003 | 2026-05-21 | Use GitHub Markdown docs as documentation source of truth | Allows versioning, updates and agent-assisted documentation | Accepted |

## Assumptions

| ID | Assumption | Validation method | Status |
|---|---|---|---|
| A-001 | ERPNext can cover most core ERP workflows | Pilot workflows | To validate |
| A-002 | Logistics may be the biggest customization area | Process test and interview | To validate |
| A-003 | Marketplace sync should not block internal ERP pilot | Architecture review | To validate |
