# Lean ERP Implementation Plan

## Goal

Launch the first useful ERP workflows as quickly as possible, likely using ERPNext or another standard ERP system.

The project should avoid excessive documentation. Documentation exists to support implementation, configuration and decision-making.

## Core approach

1. Start from standard ERP processes.
2. Validate the most important workflows in a pilot.
3. Identify real gaps only after testing.
4. Configure before customizing.
5. Document decisions and deviations.
6. Improve processes iteratively.

## Initial implementation phases

| Phase | Focus | Output |
|---|---|---|
| 1 | Project setup | Repository, documentation structure, first backlog |
| 2 | Process overview | High-level process landscape |
| 3 | ERPNext fit-gap | Check standard modules against business needs |
| 4 | Pilot workflows | Sales order, purchase order, warehouse, delivery, invoice |
| 5 | MVP scope | Define first usable ERP version |
| 6 | Iteration | Improve processes based on real usage |

## First workflows to validate

- Customer master data
- Supplier master data
- Item master data
- Sales order
- Purchase order
- Stock receipt
- Delivery note
- Invoice
- Payment status / reminder
- Basic logistics planning

## Rule

If a process can be handled with standard ERPNext functionality, do not design a custom process yet.
