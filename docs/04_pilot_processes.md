# Pilot Processes

## Purpose

This document defines the first business processes that should be tested in the new ERP setup.

The pilot should prove whether a standard ERP system such as ERPNext can cover the core business workflows with minimal customization.

## Pilot workflow 1: Sales order to invoice

| Step | Description | Expected ERP object |
|---|---|---|
| 1 | Create customer | Customer |
| 2 | Create item | Item |
| 3 | Create sales order | Sales Order |
| 4 | Check stock | Stock / Warehouse |
| 5 | Create delivery note | Delivery Note |
| 6 | Create invoice | Sales Invoice |
| 7 | Track payment status | Payment / Receivable |

## Pilot workflow 2: Purchase to stock

| Step | Description | Expected ERP object |
|---|---|---|
| 1 | Create supplier | Supplier |
| 2 | Create purchase order | Purchase Order |
| 3 | Receive goods | Purchase Receipt / Stock Entry |
| 4 | Update stock | Stock Ledger |
| 5 | Register supplier invoice | Purchase Invoice |

## Pilot workflow 3: Order with procurement and delivery

| Step | Description | Expected ERP object |
|---|---|---|
| 1 | Customer order is created | Sales Order |
| 2 | Missing stock triggers purchase | Purchase Order |
| 3 | Goods are received | Purchase Receipt |
| 4 | Delivery is planned | Delivery / Logistics note |
| 5 | Goods are delivered | Delivery Note |
| 6 | Customer invoice is issued | Sales Invoice |

## Pilot success criteria

- Process can be completed end-to-end.
- Required documents can be generated.
- Important statuses are visible.
- Manual work is reduced or at least not increased.
- Real gaps are documented in `03_erpnext_fit_gap.md`.
