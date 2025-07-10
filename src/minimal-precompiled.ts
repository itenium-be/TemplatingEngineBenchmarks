import * as b from 'benny';
import Handlebars from 'handlebars';
// import './minimal-precompiled.js';
import Mustache from 'mustache';

const data = {
  name: 'Alice',
  projectMonth: 'July 2025',
  orderNr: '1234',
};

const hbsTemplate = `
  Hello {{name}}, project month is {{projectMonth}}.
  {{#if orderNr}}Order: {{orderNr}}{{/if}}
`;

const precompiled = Handlebars.precompile(hbsTemplate, {
  knownHelpers: {'if': true},
  knownHelpersOnly: true,
});

const template = Handlebars.template(eval('(' + precompiled + ')')); // as HandlebarsTemplateDelegate<User>;

// const hbsTemplate = Handlebars.templates['minimal-precompiled'];


const mustacheTemplate = `
  Hello {{name}}, project month is {{projectMonth}}.
  {{#orderNr}}Order: {{orderNr}}{{/orderNr}}
`;

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Minimal precompiled',

    b.add('Handlebars', () => {
      template(data);
    }),

    b.add('Mustache', () => {
      // ATTN TODO: Mustache.parse(mustacheTemplate); might make it even more performant for Mustache
      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'minimal-precompiled', version: '1.0.0' }),
    b.save({ file: 'minimal-precompiled', format: 'chart.html' }),
  );
}
