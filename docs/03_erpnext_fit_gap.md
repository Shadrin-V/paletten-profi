# ERPNext Fit-Gap

## Purpose

This document tracks which business requirements can be covered by standard ERPNext functionality and where configuration or customization may be needed.

## Rule

Start with standard ERPNext. Only mark a gap after testing or clear evidence from the business process.

## Initial fit-gap table

| Process / Need | ERPNext standard fit | Gap | Notes | Status |
|---|---:|---|---|---|
| Customer master data | Likely yes | Unknown | Standard CRM/customer records should be checked | To validate |
| Supplier master data | Likely yes | Unknown | Standard supplier records | To validate |
| Item master data | Likely yes | Unknown | Pallet and load carrier product structure must be checked | To validate |
| Sales order | Likely yes | Unknown | Standard sales order flow | To validate |
| Purchase order | Likely yes | Unknown | Standard purchasing flow | To validate |
| Stock / warehouse | Likely yes | Unknown | Need to check stock movements and corrections | To validate |
| Delivery note | Likely yes | Unknown | Standard document flow | To validate |
| Invoice | Likely yes | Unknown | Standard sales invoice | To validate |
| Payment reminders | Possibly yes | Unknown | German reminder flow needs checking | To validate |
| Logistics / LKW disposition | Partial | Likely | Own trucks and external carriers may need adaptation | Open |
| Commission calculation | Partial | Unknown | Needs business rules | Open |
| Marketplace sync | No / custom | Yes | Requires API integration | Later |

## Open questions

- Which ERPNext modules should be enabled first?
- How much logistics planning can be handled with standard delivery/shipping flows?
- Are commissions simple enough for standard sales partner logic?
