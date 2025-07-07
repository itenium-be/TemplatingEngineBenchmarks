import * as b from 'benny';
import Handlebars from 'handlebars';
import Mustache from 'mustache';

const data = {
  name: 'Alice',
  projectMonth: 'July 2025',
  orderNr: '1234',
};

const hbsTemplate = Handlebars.compile(`
Hello {{name}}, project month is {{projectMonth}}.
{{#if orderNr}}Order: {{orderNr}}{{/if}}
`);

const mustacheTemplate = `
Hello {{name}}, project month is {{projectMonth}}.
{{#orderNr}}Order: {{orderNr}}{{/orderNr}}
`;

await b.suite(
  'Template Engine Benchmark',

  b.add('Handlebars', () => {
    hbsTemplate(data);
  }),

  b.add('Mustache', () => {
    Mustache.render(mustacheTemplate, data);
  }),

  b.cycle(),
  b.complete(),

  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' }),
);
