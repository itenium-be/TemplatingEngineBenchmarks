export const data = {
  clientName: "Alice Corp",
  consultantName: "John Doe",
  projectName: "NextGen App",
  projectMonth: "June 2025",
  billingPeriodStart: "2025-06-01",
  billingPeriodEnd: "2025-06-30",
  invoiceNumber: "INV-2025-0625",
  orderNumber: "PO-123456",
  days: [
    { date: "2025-06-03", hours: 8, activity: "Feature implementation" },
    { date: "2025-06-04", hours: 6, activity: "Bug fixing" },
  ],
  totalHours: 14,
  hourlyRate: 85,
  subtotal: 1190,
  discount: true,
  discountAmount: 190,
  discountDescription: "Loyalty discount",
  totalExclVat: 1000,
  vatRate: 21,
  vatAmount: 210,
  totalInclVat: 1210,
  notes: "Approved by client via email.",
  companyName: "Itenium Consulting"
};

export const mustacheTemplate = `
Hello {{clientName}},

Please find below the summary for project **{{projectName}}** for the month of {{projectMonth}}.

Consultant: {{consultantName}}
Billing Period: {{billingPeriodStart}} - {{billingPeriodEnd}}
Invoice Number: {{invoiceNumber}}
{{#orderNumber}}Order Number: {{orderNumber}}{{/orderNumber}}

{{#days}}
- {{date}}: {{hours}}h - {{activity}}
{{/days}}

Total hours: {{totalHours}}
Hourly Rate: €{{hourlyRate}}
Subtotal: €{{subtotal}}

{{#discount}}
Discount: -€{{discountAmount}} ({{discountDescription}})
{{/discount}}

Total (excl. VAT): €{{totalExclVat}}
VAT ({{vatRate}}%): €{{vatAmount}}
**Grand Total: €{{totalInclVat}}**

{{#notes}}
Note: {{notes}}
{{/notes}}

The signed timesheet is attached to this message.

Kind regards,
The {{companyName}} team
`;
