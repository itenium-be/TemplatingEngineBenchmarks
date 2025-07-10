import * as b from 'benny';
import Handlebars from 'handlebars';
import './minimal-precompiled-hbs.js';
import Mustache from 'mustache';

// console.log('handlebars.templates', Handlebars.templates);

const data = {
  name: 'Alice',
  projectMonth: 'July 2025',
  orderNr: '1234',
};

const mustacheTemplate = `
  Hello {{name}}, project month is {{projectMonth}}.
  {{#orderNr}}Order: {{orderNr}}{{/orderNr}}
`;

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Minimal precompiled',

    b.add('Handlebars', () => {
      Handlebars.templates['minimal-precompiled'](data);
    }),

    b.add('Mustache', () => {
      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'minimal-precompiled', version: '1.0.0' }),
    b.save({ file: 'minimal-precompiled', format: 'chart.html' }),
  );
}
