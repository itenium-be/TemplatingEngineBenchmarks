import * as b from 'benny';
import Handlebars from 'handlebars';
import Mustache from 'mustache';

const data = {
  name: 'Alice',
  projectMonth: 'July 2025',
  orderNr: '1234',
};

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Minimal with compile',

    b.add('Handlebars', () => {
      const hbsTemplate = Handlebars.compile(`
        Hello {{name}}, project month is {{projectMonth}}.
        {{#if orderNr}}Order: {{orderNr}}{{/if}}
      `);
      hbsTemplate(data);
    }),

    b.add('Mustache', () => {
      const mustacheTemplate = `
        Hello {{name}}, project month is {{projectMonth}}.
        {{#orderNr}}Order: {{orderNr}}{{/orderNr}}
      `;

      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'minimal-with', version: '1.0.0' }),
    b.save({ file: 'minimal-with', format: 'chart.html' }),
  );
}
