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

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Minimal without compile',

    b.add('Handlebars', () => {
      hbsTemplate(data);
    }),

    b.add('Mustache', () => {
      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'minimal-without', version: '1.0.0' }),
    b.save({ file: 'minimal-without', format: 'chart.html' }),
  );
}
