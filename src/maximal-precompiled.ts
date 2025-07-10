import * as b from 'benny';
import Handlebars from 'handlebars';
import './maximal-precompiled-hbs.js';
import Mustache from 'mustache';
import { data, mustacheTemplate } from './maximal.js';

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Maximal precompiled',

    b.add('Handlebars', () => {
      Handlebars.templates['maximal-precompiled'](data);
    }),

    b.add('Mustache', () => {
      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'maximal-precompiled', version: '1.0.0' }),
    b.save({ file: 'maximal-precompiled', format: 'chart.html' }),
  );
}
